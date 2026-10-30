// Cloudflare Pages Function: /api/feedback
// Handles GET (Read feedback list or stats) and POST (Submit new feedback/rating)

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  });
}

// Ensure feedback table exists
async function ensureFeedbackTable(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      user_name TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'student',
      rating INTEGER NOT NULL DEFAULT 5,
      category TEXT NOT NULL DEFAULT 'general',
      recipe_id TEXT DEFAULT NULL,
      comment TEXT NOT NULL,
      created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
}

// ====================================================================
// 1. READ ACCESS (GET /api/feedback)
// ====================================================================
export async function onRequestGet(context) {
  const { request, env } = context;
  const db = env?.DB;

  if (!db) {
    return jsonResponse({ success: false, error: 'Database binding (DB) not configured' }, 503);
  }

  // Optional Secure API Key Authentication
  const authKey = request.headers.get('X-API-Key') || (request.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  if (authKey) {
    try {
      const keyRow = await db.prepare("SELECT id, scope, status, expires_at FROM api_keys WHERE key_token = ? AND status = 'active'").bind(authKey).first();
      if (!keyRow) {
        return jsonResponse({ success: false, error: 'Invalid or revoked API key token' }, 401);
      }
      if (keyRow.expires_at && new Date(keyRow.expires_at) < new Date()) {
        return jsonResponse({ success: false, error: 'API key expired' }, 403);
      }
    } catch (e) {}
  }

  try {
    await ensureFeedbackTable(db);

    const url = new URL(request.url);
    const category = (url.searchParams.get('category') || '').trim();
    const recipeId = (url.searchParams.get('recipeId') || '').trim();
    let limit = parseInt(url.searchParams.get('limit'), 10);
    if (isNaN(limit) || limit <= 0) limit = 50;
    limit = Math.min(limit, 100);

    let rows;
    if (recipeId) {
      const res = await db.prepare(`
        SELECT id, user_id, user_name, role, rating, category, recipe_id, comment, created_at
        FROM feedback
        WHERE recipe_id = ?
        ORDER BY created_at DESC
        LIMIT ?
      `).bind(recipeId, limit).all();
      rows = res.results || [];
    } else if (category && category !== 'all') {
      const res = await db.prepare(`
        SELECT id, user_id, user_name, role, rating, category, recipe_id, comment, created_at
        FROM feedback
        WHERE category = ?
        ORDER BY created_at DESC
        LIMIT ?
      `).bind(category, limit).all();
      rows = res.results || [];
    } else {
      const res = await db.prepare(`
        SELECT id, user_id, user_name, role, rating, category, recipe_id, comment, created_at
        FROM feedback
        ORDER BY created_at DESC
        LIMIT ?
      `).bind(limit).all();
      rows = res.results || [];
    }

    // Also get overall rating stats
    const statsRes = await db.prepare(`
      SELECT 
        COUNT(*) as total_feedback,
        COALESCE(AVG(rating), 5.0) as average_rating
      FROM feedback
    `).first();

    const feedbacks = rows.map(r => ({
      id: r.id,
      userId: r.user_id,
      userName: r.user_name,
      role: r.role || 'student',
      rating: Number(r.rating) || 5,
      category: r.category || 'general',
      recipeId: r.recipe_id,
      comment: r.comment,
      createdAt: r.created_at
    }));

    return jsonResponse({
      success: true,
      stats: {
        total: Number(statsRes?.total_feedback) || 0,
        averageRating: Number(Number(statsRes?.average_rating || 5).toFixed(1))
      },
      count: feedbacks.length,
      feedbacks
    }, 200);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Failed to retrieve feedback' }, 500);
  }
}

// ====================================================================
// 2. WRITE ACCESS (POST /api/feedback)
// ====================================================================
export async function onRequestPost(context) {
  const { request, env } = context;
  const db = env?.DB;

  if (!db) {
    return jsonResponse({ success: false, error: 'Database binding (DB) not configured' }, 503);
  }

  // Optional Secure API Key Authentication
  const authKey = request.headers.get('X-API-Key') || (request.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  if (authKey) {
    try {
      const keyRow = await db.prepare("SELECT id, scope, status, expires_at FROM api_keys WHERE key_token = ? AND status = 'active'").bind(authKey).first();
      if (!keyRow) {
        return jsonResponse({ success: false, error: 'Invalid or revoked API key token' }, 401);
      }
      if (keyRow.expires_at && new Date(keyRow.expires_at) < new Date()) {
        return jsonResponse({ success: false, error: 'API key expired' }, 403);
      }
    } catch (e) {}
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse({ success: false, error: 'Invalid JSON request body' }, 400);
  }

  const userId = (body.userId || body.id || 'anonymous').toString().trim();
  const userName = (body.userName || body.name || 'Anonymous Chef').toString().trim();
  const role = body.role === 'parent' ? 'parent' : 'student';
  const category = (body.category || 'general').toString().trim();
  const recipeId = body.recipeId ? body.recipeId.toString().trim() : null;
  const comment = (body.comment || body.message || '').toString().trim();

  let rating = parseInt(body.rating, 10);
  if (isNaN(rating) || rating < 1) rating = 5;
  if (rating > 5) rating = 5;

  if (!comment) {
    return jsonResponse({ success: false, error: 'Field "comment" (or "message") is required' }, 400);
  }

  try {
    await ensureFeedbackTable(db);

    const insertRes = await db.prepare(`
      INSERT INTO feedback (user_id, user_name, role, rating, category, recipe_id, comment)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(userId, userName, role, rating, category, recipeId, comment).run();

    return jsonResponse({
      success: true,
      action: 'created',
      feedback: {
        id: insertRes?.meta?.last_row_id || null,
        userId,
        userName,
        role,
        rating,
        category,
        recipeId,
        comment,
        createdAt: new Date().toISOString()
      }
    }, 201);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Failed to save feedback' }, 500);
  }
}

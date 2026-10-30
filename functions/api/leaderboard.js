// Cloudflare Pages Function: /api/leaderboard
// Handles GET (Read leaderboard rankings) and POST (Write/Upsert leaderboard entry)

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  });
}

const VALID_FILTERS = new Set(['all', 'overall', 'hotPotato', 'buildDish', 'trivia', 'pronunciation', 'scienceSpins']);

// ====================================================================
// 1. READ ACCESS (GET /api/leaderboard)
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

  // Ensure leaderboard table exists
  try {
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS leaderboard (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        user_name TEXT NOT NULL,
        avatar TEXT NOT NULL DEFAULT '🎒',
        role TEXT NOT NULL DEFAULT 'student',
        level INTEGER NOT NULL DEFAULT 1,
        game_type TEXT NOT NULL DEFAULT 'overall',
        score INTEGER NOT NULL DEFAULT 0,
        xp INTEGER NOT NULL DEFAULT 0,
        streak INTEGER NOT NULL DEFAULT 0,
        rank INTEGER NOT NULL DEFAULT 0,
        country TEXT NOT NULL DEFAULT 'Global',
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, game_type)
      )
    `).run();
  } catch (e) {}

  const url = new URL(request.url);
  const rawFilter = (url.searchParams.get('filter') || 'all').toString().trim();
  const filter = VALID_FILTERS.has(rawFilter) ? rawFilter : 'all';

  let limit = parseInt(url.searchParams.get('limit'), 10);
  if (isNaN(limit) || limit <= 0) {
    limit = 25;
  }
  limit = Math.min(limit, 100);

  try {
    let rows;
    if (filter === 'all' || filter === 'overall') {
      const query = `
        SELECT user_id, user_name, avatar, role, COALESCE(level, 1) AS level, game_type, score, xp, streak, country, updated_at
        FROM leaderboard
        WHERE game_type = 'overall'
        ORDER BY level DESC, xp DESC
        LIMIT ?
      `;
      const res = await db.prepare(query).bind(limit).all();
      rows = res.results || [];
    } else {
      const query = `
        SELECT user_id, user_name, avatar, role, COALESCE(level, 1) AS level, game_type, score, xp, streak, country, updated_at
        FROM leaderboard
        WHERE game_type = ?
        ORDER BY score DESC, level DESC, xp DESC
        LIMIT ?
      `;
      const res = await db.prepare(query).bind(filter, limit).all();
      rows = res.results || [];
    }

    const leaderboard = rows.map((row, index) => ({
      rank: index + 1,
      userId: row.user_id,
      userName: row.user_name,
      avatar: row.avatar || '🎒',
      role: row.role || 'student',
      level: Number(row.level) || 1,
      gameType: row.game_type,
      score: Number(row.score) || 0,
      xp: Number(row.xp) || 0,
      streak: Number(row.streak) || 0,
      country: row.country || 'Global',
      updatedAt: row.updated_at
    }));

    return jsonResponse({
      success: true,
      filter,
      count: leaderboard.length,
      leaderboard
    }, 200);
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Leaderboard query failed' }, 500);
  }
}

// ====================================================================
// 2. WRITE ACCESS (POST /api/leaderboard)
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

  const userId = (body.userId || body.id || '').toString().trim();
  const userName = (body.userName || body.name || '').toString().trim();
  let gameType = (body.gameType || 'overall').toString().trim();
  if (gameType === 'all') gameType = 'overall';
  const avatar = (body.avatar || '🎒').toString().trim();
  const role = body.role === 'parent' ? 'parent' : 'student';
  const country = (body.country || 'Global').toString().trim();
  const score = parseInt(body.score, 10) || 0;
  const xp = Math.max(0, parseInt(body.xp, 10) || 0);
  const streak = Math.max(0, parseInt(body.streak, 10) || 0);
  const level = Math.max(1, parseInt(body.level, 10) || 1);

  if (!userId || !userName) {
    return jsonResponse({ success: false, error: 'Fields "userId" and "userName" are required' }, 400);
  }

  if (!VALID_FILTERS.has(gameType)) {
    return jsonResponse({
      success: false,
      error: `Invalid gameType "${gameType}". Allowed: ${Array.from(VALID_FILTERS).join(', ')}`
    }, 400);
  }

  try {
    // Ensure table exists
    await db.prepare(`
      CREATE TABLE IF NOT EXISTS leaderboard (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT NOT NULL,
        user_name TEXT NOT NULL,
        avatar TEXT NOT NULL DEFAULT '🎒',
        role TEXT NOT NULL DEFAULT 'student',
        level INTEGER NOT NULL DEFAULT 1,
        game_type TEXT NOT NULL DEFAULT 'overall',
        score INTEGER NOT NULL DEFAULT 0,
        xp INTEGER NOT NULL DEFAULT 0,
        streak INTEGER NOT NULL DEFAULT 0,
        rank INTEGER NOT NULL DEFAULT 0,
        country TEXT NOT NULL DEFAULT 'Global',
        created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(user_id, game_type)
      )
    `).run();

    // Check existing entry
    const existing = await db.prepare(
      'SELECT id, score, xp, level FROM leaderboard WHERE user_id = ? AND game_type = ?'
    ).bind(userId, gameType).first();

    if (existing) {
      const finalScore = Math.max(Number(existing.score) || 0, score);
      const finalXP = Math.max(Number(existing.xp) || 0, xp);
      const finalLevel = Math.max(Number(existing.level) || 1, level);

      await db.prepare(`
        UPDATE leaderboard
        SET user_name = ?, avatar = ?, role = ?, level = ?, score = ?, xp = ?, streak = ?, country = ?, updated_at = CURRENT_TIMESTAMP
        WHERE user_id = ? AND game_type = ?
      `).bind(userName, avatar, role, finalLevel, finalScore, finalXP, streak, country, userId, gameType).run();

      return jsonResponse({
        success: true,
        action: 'updated',
        entry: {
          userId,
          userName,
          avatar,
          role,
          level: finalLevel,
          gameType,
          score: finalScore,
          xp: finalXP,
          streak,
          country
        }
      }, 200);
    } else {
      await db.prepare(`
        INSERT INTO leaderboard (user_id, user_name, avatar, role, level, game_type, score, xp, streak, country)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(userId, userName, avatar, role, level, gameType, score, xp, streak, country).run();

      return jsonResponse({
        success: true,
        action: 'created',
        entry: {
          userId,
          userName,
          avatar,
          role,
          level,
          gameType,
          score,
          xp,
          streak,
          country
        }
      }, 201);
    }
  } catch (err) {
    return jsonResponse({ success: false, error: err.message || 'Failed to write leaderboard entry' }, 500);
  }
}

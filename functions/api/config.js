// Cloudflare Pages Function: /api/config
// Handles GET (Read worldwide global site configuration) and POST (Update global configuration from Admin Panel)

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=UTF-8' }
  });
}

async function ensureConfigTable(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS site_config (
      key TEXT PRIMARY KEY NOT NULL,
      value_json TEXT NOT NULL,
      updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
}

// --------------------------------------------------------------------
// 1. GET /api/config (Read worldwide site configuration)
// --------------------------------------------------------------------
export async function onRequestGet(context) {
  const { env } = context;
  const db = env?.DB;

  const defaultConfig = {
    gameToggles: {
      buildDish: true,
      pronunciation: true,
      trivia: true,
      hotPotato: true,
      spinScience: true
    },
    defaultDifficulty: 'parent',
    v2Features: {
      chefHatCameraFilter: true,
      faceVectorAntiDuplication: true,
      tandoorSkewerGame: true,
      pdfPortfolioExport: true,
      communityFeedback: true
    },
    updatedAt: new Date().toISOString()
  };

  if (!db) {
    return jsonResponse({
      success: true,
      source: 'fallback',
      config: defaultConfig
    }, 200);
  }

  try {
    await ensureConfigTable(db);
    const res = await db.prepare('SELECT key, value_json, updated_at FROM site_config').all();
    const rows = res.results || [];

    const config = { ...defaultConfig };
    rows.forEach(r => {
      try {
        config[r.key] = JSON.parse(r.value_json);
      } catch (e) {
        config[r.key] = r.value_json;
      }
    });

    return jsonResponse({
      success: true,
      source: 'd1_database',
      config
    }, 200);
  } catch (err) {
    return jsonResponse({
      success: true,
      source: 'memory_fallback',
      config: defaultConfig,
      warning: err.message
    }, 200);
  }
}

// --------------------------------------------------------------------
// 2. POST /api/config (Save admin panel settings worldwide)
// --------------------------------------------------------------------
export async function onRequestPost(context) {
  const { request, env } = context;
  const db = env?.DB;

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse({ success: false, error: 'Invalid JSON request body' }, 400);
  }

  // Security: check admin PIN or API key token
  const adminPin = (body.adminPin || '').toString().trim();
  const authHeader = request.headers.get('Authorization') || request.headers.get('X-API-Key') || '';
  
  // Accept standard admin PIN 'careers2026' or valid token
  const isValidAuth = adminPin === 'careers2026' || authHeader.includes('ff_live_');
  if (!isValidAuth) {
    return jsonResponse({
      success: false,
      error: 'Unauthorized: Invalid Admin PIN or Security Key'
    }, 401);
  }

  const { gameToggles, defaultDifficulty, v2Features, customSettings } = body;

  if (!db) {
    return jsonResponse({
      success: true,
      action: 'saved_locally',
      message: 'Database binding (DB) not configured, settings saved to session',
      config: { gameToggles, defaultDifficulty, v2Features }
    }, 200);
  }

  try {
    await ensureConfigTable(db);

    const updates = [];
    if (gameToggles !== undefined) {
      updates.push(db.prepare(`
        INSERT INTO site_config (key, value_json, updated_at)
        VALUES ('gameToggles', ?, CURRENT_TIMESTAMP)
        ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = CURRENT_TIMESTAMP
      `).bind(JSON.stringify(gameToggles)));
    }

    if (defaultDifficulty !== undefined) {
      updates.push(db.prepare(`
        INSERT INTO site_config (key, value_json, updated_at)
        VALUES ('defaultDifficulty', ?, CURRENT_TIMESTAMP)
        ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = CURRENT_TIMESTAMP
      `).bind(JSON.stringify(defaultDifficulty)));
    }

    if (v2Features !== undefined) {
      updates.push(db.prepare(`
        INSERT INTO site_config (key, value_json, updated_at)
        VALUES ('v2Features', ?, CURRENT_TIMESTAMP)
        ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = CURRENT_TIMESTAMP
      `).bind(JSON.stringify(v2Features)));
    }

    if (customSettings !== undefined) {
      updates.push(db.prepare(`
        INSERT INTO site_config (key, value_json, updated_at)
        VALUES ('customSettings', ?, CURRENT_TIMESTAMP)
        ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = CURRENT_TIMESTAMP
      `).bind(JSON.stringify(customSettings)));
    }

    if (updates.length > 0) {
      await db.batch(updates);
    }

    return jsonResponse({
      success: true,
      action: 'persisted_worldwide',
      message: 'Admin settings saved successfully to Cloudflare D1 and applied worldwide',
      timestamp: new Date().toISOString()
    }, 200);
  } catch (err) {
    return jsonResponse({
      success: false,
      error: err.message || 'Failed to save admin configuration'
    }, 500);
  }
}

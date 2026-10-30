// ====================================================================
// Fusion Food Family Lab - Unified Standalone Cloudflare Worker
// Routes API requests to D1 Database with full CORS and KV caching
// ====================================================================

import * as profileHandler from '../functions/api/profile.js';
import * as syncHandler from '../functions/api/sync.js';
import * as leaderboardHandler from '../functions/api/leaderboard.js';
import * as submitScoreHandler from '../functions/api/submit-score.js';
import * as feedbackHandler from '../functions/api/feedback.js';
import * as adminKeysHandler from '../functions/api/admin/keys.js';
import * as configHandler from '../functions/api/config.js';

function getCorsHeaders(request) {
  const origin = request.headers.get('Origin') || '*';
  const isAllowedOrigin = origin === '*' ||
    origin === 'null' ||
    origin.endsWith('.pages.dev') ||
    origin.startsWith('http://localhost') ||
    origin.startsWith('http://127.0.0.1');

  const allowOrigin = isAllowedOrigin ? origin : '*';

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Cache-Control',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      ...extraHeaders
    }
  });
}

export default {
  async fetch(request, env, ctx) {
    const cors = getCorsHeaders(request);

    // Preflight OPTIONS handling
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: cors
      });
    }

    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, ''); // strip trailing slash

    const context = {
      request,
      env,
      ctx,
      data: {},
      next: async () => new Response('Not Found', { status: 404 })
    };

    try {
      let response;

      if (pathname === '/api/profile') {
        if (request.method === 'GET') {
          response = await profileHandler.onRequestGet(context);
        } else if (request.method === 'POST') {
          response = await profileHandler.onRequestPost(context);
        } else {
          response = jsonResponse({ success: false, error: 'Method Not Allowed' }, 405);
        }
      } else if (pathname === '/api/sync') {
        if (request.method === 'POST') {
          response = await syncHandler.onRequestPost(context);
        } else {
          response = jsonResponse({ success: false, error: 'Method Not Allowed' }, 405);
        }
      } else if (pathname === '/api/leaderboard') {
        if (request.method === 'GET') {
          response = await leaderboardHandler.onRequestGet(context);
        } else if (request.method === 'POST') {
          response = await leaderboardHandler.onRequestPost(context);
        } else {
          response = jsonResponse({ success: false, error: 'Method Not Allowed' }, 405);
        }
      } else if (pathname === '/api/submit-score') {
        if (request.method === 'POST') {
          response = await submitScoreHandler.onRequestPost(context);
        } else {
          response = jsonResponse({ success: false, error: 'Method Not Allowed' }, 405);
        }
      } else if (pathname === '/api/feedback') {
        if (request.method === 'GET') {
          response = await feedbackHandler.onRequestGet(context);
        } else if (request.method === 'POST') {
          response = await feedbackHandler.onRequestPost(context);
        } else {
          response = jsonResponse({ success: false, error: 'Method Not Allowed' }, 405);
        }
      } else if (pathname === '/api/admin/keys') {
        if (request.method === 'GET') {
          response = await adminKeysHandler.onRequestGet(context);
        } else if (request.method === 'POST') {
          response = await adminKeysHandler.onRequestPost(context);
        } else if (request.method === 'DELETE') {
          response = await adminKeysHandler.onRequestDelete(context);
        } else {
          response = jsonResponse({ success: false, error: 'Method Not Allowed' }, 405);
        }
      } else if (pathname === '/api/config' || pathname === '/api/admin/config') {
        if (request.method === 'GET') {
          response = await configHandler.onRequestGet(context);
        } else if (request.method === 'POST') {
          response = await configHandler.onRequestPost(context);
        } else {
          response = jsonResponse({ success: false, error: 'Method Not Allowed' }, 405);
        }
      } else if (pathname === '/api/health' || pathname === '/api/status') {
        response = jsonResponse({
          status: 'ok',
          service: 'fusion-food-worker',
          timestamp: new Date().toISOString(),
          database: env?.DB ? 'connected' : 'mock/unbound',
          version: '1.0.0'
        }, 200);
      } else if (pathname.startsWith('/api/')) {
        response = jsonResponse({ success: false, error: `Endpoint not found: ${pathname}` }, 404);
      } else {
        // Fallback for non-API requests when running as standalone worker
        response = new Response('Fusion Food Family Lab API Worker', {
          status: 200,
          headers: { 'Content-Type': 'text/plain; charset=UTF-8' }
        });
      }

      // Ensure CORS headers on all responses
      const newHeaders = new Headers(response.headers);
      for (const [k, v] of Object.entries(cors)) {
        newHeaders.set(k, v);
      }

      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    } catch (err) {
      return jsonResponse(
        { success: false, error: err.message || 'Worker Internal Error' },
        500,
        cors
      );
    }
  }
};

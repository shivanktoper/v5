// Cloudflare Pages Function: /api/admin/config
// Delegates to /api/config for administration settings persistence
import { onRequestGet as getHandler, onRequestPost as postHandler } from '../config.js';

export async function onRequestGet(context) {
  return getHandler(context);
}

export async function onRequestPost(context) {
  return postHandler(context);
}

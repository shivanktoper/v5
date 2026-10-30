-- ====================================================================
-- Fusion Food Family Lab - Cloudflare D1 Database Schema
-- Database: fusion-food-db
-- SQLite 3 Dialect with Composite Indexes and Global Seed Data
-- ====================================================================

-- --------------------------------------------------------------------
-- 1. PROFILES TABLE
-- Stores persistent player/chef profiles, XP, streaks, and personal bests
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS profiles (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student' CHECK(role IN ('student', 'parent')),
  avatar TEXT NOT NULL DEFAULT '🎒',
  level INTEGER NOT NULL DEFAULT 1 CHECK(level >= 1),
  xp INTEGER NOT NULL DEFAULT 0 CHECK(xp >= 0),
  streak INTEGER NOT NULL DEFAULT 0 CHECK(streak >= 0),
  bests_json TEXT NOT NULL DEFAULT '{}',
  badges_json TEXT NOT NULL DEFAULT '[]',
  country TEXT NOT NULL DEFAULT 'Global',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_profiles_level_xp ON profiles (level DESC, xp DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_xp ON profiles (xp DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles (role);
CREATE INDEX IF NOT EXISTS idx_profiles_country ON profiles (country);

-- --------------------------------------------------------------------
-- 2. LEADERBOARD TABLE
-- Stores global competitive standings for overall XP and individual lab challenges
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS leaderboard (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  avatar TEXT NOT NULL DEFAULT '🎒',
  role TEXT NOT NULL DEFAULT 'student' CHECK(role IN ('student', 'parent')),
  level INTEGER NOT NULL DEFAULT 1 CHECK(level >= 1),
  game_type TEXT NOT NULL DEFAULT 'overall' CHECK(game_type IN ('overall', 'all', 'hotPotato', 'buildDish', 'trivia', 'pronunciation', 'scienceSpins')),
  score INTEGER NOT NULL DEFAULT 0 CHECK(score >= 0),
  xp INTEGER NOT NULL DEFAULT 0 CHECK(xp >= 0),
  streak INTEGER NOT NULL DEFAULT 0 CHECK(streak >= 0),
  rank INTEGER NOT NULL DEFAULT 0,
  country TEXT NOT NULL DEFAULT 'Global',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, game_type)
);

CREATE INDEX IF NOT EXISTS idx_leaderboard_level_xp ON leaderboard (level DESC, xp DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_xp ON leaderboard (xp DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_game_score ON leaderboard (game_type, score DESC, level DESC, xp DESC);
CREATE INDEX IF NOT EXISTS idx_leaderboard_user ON leaderboard (user_id);
CREATE INDEX IF NOT EXISTS idx_leaderboard_game_type ON leaderboard (game_type);

-- --------------------------------------------------------------------
-- 3. FEEDBACK TABLE
-- Stores ratings, comments, and community feedback on recipes and lab experience
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student' CHECK(role IN ('student', 'parent')),
  rating INTEGER NOT NULL DEFAULT 5 CHECK(rating >= 1 AND rating <= 5),
  category TEXT NOT NULL DEFAULT 'general',
  recipe_id TEXT DEFAULT NULL,
  comment TEXT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON feedback (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_category ON feedback (category);
CREATE INDEX IF NOT EXISTS idx_feedback_recipe_id ON feedback (recipe_id);

-- --------------------------------------------------------------------
-- 4. API KEYS TABLE
-- Stores admin-generated API access tokens for REST endpoints
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS api_keys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key_id TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  key_prefix TEXT NOT NULL,
  key_token TEXT NOT NULL,
  scope TEXT NOT NULL DEFAULT 'read_write' CHECK(scope IN ('read', 'read_write', 'admin')),
  status TEXT NOT NULL DEFAULT 'active' CHECK(status IN ('active', 'revoked')),
  expires_at DATETIME DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_api_keys_status ON api_keys (status);
CREATE INDEX IF NOT EXISTS idx_api_keys_token ON api_keys (key_token);

-- --------------------------------------------------------------------
-- 5. SITE CONFIGURATION TABLE
-- Stores global admin-configured settings synced worldwide across all browsers
-- --------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS site_config (
  key TEXT PRIMARY KEY NOT NULL,
  value_json TEXT NOT NULL,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Seed Site Configuration
INSERT OR IGNORE INTO site_config (key, value_json) VALUES
  ('game_toggles', '{"buildDish":true,"pronunciation":true,"trivia":true,"hotPotato":true,"spinScience":true}'),
  ('default_difficulty', '{"role":"parent","name":"Adult Chef"}'),
  ('v2_features', '{"chefHatCameraFilter":true,"faceVectorAntiDuplication":true,"tandoorSkewerGame":true,"pdfPortfolioExport":true,"communityFeedback":true}');

-- --------------------------------------------------------------------
-- 6. GLOBAL SEED DATA
-- Diverse international culinary students and parent master chefs
-- --------------------------------------------------------------------

-- Seed Profiles
INSERT OR IGNORE INTO profiles (id, name, role, avatar, level, xp, streak, bests_json, badges_json, country) VALUES
  ('chef_priya', 'Chef Priya', 'parent', '👨‍🍳', 3, 4500, 18, '{"hotPotato":42,"trivia":10,"buildDish":14,"pronunciation":15,"scienceSpins":18}', '["👨‍🍳 Sous-Chef Guide","🔥 Tandoor Wizard","🎌🇵🇪 Nikkei Explorer","🥘 Dish Master","🧠 Spice Scholar"]', 'India'),
  ('kenji_tanaka', 'Kenji Tanaka', 'student', '🍱', 3, 3850, 15, '{"hotPotato":38,"trivia":10,"buildDish":12,"pronunciation":16,"scienceSpins":14}', '["🌱 Junior Taster","🎌🇵🇪 Nikkei Explorer","🍄 Shroom Alchemist","🧪 Molecular Gastronomist"]', 'Japan'),
  ('elena_alvarez', 'Elena Alvarez', 'parent', '👩‍🍳', 3, 3620, 14, '{"hotPotato":35,"trivia":9,"buildDish":15,"pronunciation":14,"scienceSpins":12}', '["👩‍🍳 Executive Pioneer","🥑 Andean Herbalist","🔥 Tandoor Wizard"]', 'Peru'),
  ('amara_okafor', 'Amara Okafor', 'student', '✨', 3, 3200, 12, '{"hotPotato":30,"trivia":10,"buildDish":11,"pronunciation":12,"scienceSpins":15}', '["🌱 Junior Taster","🌶️ Suya Alchemist","🥘 Dish Master"]', 'Nigeria'),
  ('marcus_chen', 'Marcus Chen', 'student', '🥢', 3, 2950, 11, '{"hotPotato":28,"trivia":9,"buildDish":10,"pronunciation":13,"scienceSpins":10}', '["🍄 Shroom Alchemist","🥢 Wok Virtuoso","🧠 Spice Scholar"]', 'Singapore'),
  ('giulia_rossi', 'Giulia Rossi', 'parent', '🍕', 3, 2780, 10, '{"hotPotato":26,"trivia":8,"buildDish":12,"pronunciation":11,"scienceSpins":9}', '["🍅 Umami Architect","🌿 Basil Sorcerer","👨‍🍳 Sous-Chef Guide"]', 'Italy'),
  ('tariq_almansoor', 'Tariq Al-Mansoor', 'student', '🫖', 3, 2540, 9, '{"hotPotato":25,"trivia":9,"buildDish":9,"pronunciation":12,"scienceSpins":11}', '["🫖 Saffron Artisan","🌱 Junior Taster","🧠 Spice Scholar"]', 'UAE'),
  ('sofia_lindqvist', 'Sofia Lindqvist', 'student', '🫐', 3, 2310, 8, '{"hotPotato":24,"trivia":8,"buildDish":8,"pronunciation":10,"scienceSpins":12}', '["🌲 Nordic Forager","🧀 Paneer Smoker","🧪 Molecular Gastronomist"]', 'Sweden'),
  ('chef_devendra', 'Chef Devendra', 'parent', '👳‍♂️', 3, 2150, 7, '{"hotPotato":22,"trivia":9,"buildDish":11,"pronunciation":10,"scienceSpins":8}', '["🔥 Tandoor Wizard","👑 Royal Curry Crafter","👨‍🍳 Sous-Chef Guide"]', 'India'),
  ('leo_dubois', 'Leo Dubois', 'student', '🥐', 3, 1980, 7, '{"hotPotato":20,"trivia":8,"buildDish":9,"pronunciation":14,"scienceSpins":9}', '["🧈 Emulsion Maestro","🌱 Junior Taster","🍄 Shroom Alchemist"]', 'France'),
  ('zara_patel', 'Zara Patel', 'student', '🧁', 3, 1820, 6, '{"hotPotato":19,"trivia":8,"buildDish":7,"pronunciation":9,"scienceSpins":8}', '["⚡ Street Fusionist","🥘 Dish Master","🌱 Junior Taster"]', 'UK'),
  ('mateo_silva', 'Mateo Silva', 'student', '🌮', 3, 1650, 6, '{"hotPotato":18,"trivia":7,"buildDish":8,"pronunciation":8,"scienceSpins":7}', '["🌶️ Mole Hybridizer","🌱 Junior Taster"]', 'Mexico'),
  ('ananya_sen', 'Ananya Sen', 'student', '🍛', 3, 1420, 5, '{"hotPotato":16,"trivia":9,"buildDish":6,"pronunciation":9,"scienceSpins":7}', '["🍋 Gondhoraj Luminary","🌱 Junior Taster","🧠 Spice Scholar"]', 'India'),
  ('kid', 'Maya', 'student', '🎒', 3, 1270, 5, '{"hotPotato":15,"trivia":8,"buildDish":6,"pronunciation":7,"scienceSpins":8}', '["🌱 Junior Taster","🍄 Shroom Alchemist","🥘 Dish Master"]', 'India'),
  ('chloe_martin', 'Chloe Martin', 'student', '🍁', 3, 1150, 4, '{"hotPotato":14,"trivia":8,"buildDish":5,"pronunciation":7,"scienceSpins":6}', '["🍁 Maple Glazer","🌱 Junior Taster"]', 'Canada'),
  ('hiroshi_sato', 'Chef Hiroshi', 'parent', '🔪', 2, 980, 3, '{"hotPotato":12,"trivia":7,"buildDish":6,"pronunciation":8,"scienceSpins":5}', '["🔪 Dashi Alchemist","👨‍🍳 Sous-Chef Guide"]', 'Japan');

-- Seed Leaderboard - Overall Standings (Ranked by Level DESC, then XP DESC)
INSERT OR IGNORE INTO leaderboard (user_id, user_name, avatar, role, level, game_type, score, xp, streak, rank, country) VALUES
  ('chef_priya', 'Chef Priya', '👨‍🍳', 'parent', 3, 'overall', 4500, 4500, 18, 1, 'India'),
  ('kenji_tanaka', 'Kenji Tanaka', '🍱', 'student', 3, 'overall', 3850, 3850, 15, 2, 'Japan'),
  ('elena_alvarez', 'Elena Alvarez', '👩‍🍳', 'parent', 3, 'overall', 3620, 3620, 14, 3, 'Peru'),
  ('amara_okafor', 'Amara Okafor', '✨', 'student', 3, 'overall', 3200, 3200, 12, 4, 'Nigeria'),
  ('marcus_chen', 'Marcus Chen', '🥢', 'student', 3, 'overall', 2950, 2950, 11, 5, 'Singapore'),
  ('giulia_rossi', 'Giulia Rossi', '🍕', 'parent', 3, 'overall', 2780, 2780, 10, 6, 'Italy'),
  ('tariq_almansoor', 'Tariq Al-Mansoor', '🫖', 'student', 3, 'overall', 2540, 2540, 9, 7, 'UAE'),
  ('sofia_lindqvist', 'Sofia Lindqvist', '🫐', 'student', 3, 'overall', 2310, 2310, 8, 8, 'Sweden'),
  ('chef_devendra', 'Chef Devendra', '👳‍♂️', 'parent', 3, 'overall', 2150, 2150, 7, 9, 'India'),
  ('leo_dubois', 'Leo Dubois', '🥐', 'student', 3, 'overall', 1980, 1980, 7, 10, 'France'),
  ('zara_patel', 'Zara Patel', '🧁', 'student', 3, 'overall', 1820, 1820, 6, 11, 'UK'),
  ('mateo_silva', 'Mateo Silva', '🌮', 'student', 3, 'overall', 1650, 1650, 6, 12, 'Mexico'),
  ('ananya_sen', 'Ananya Sen', '🍛', 'student', 3, 'overall', 1420, 1420, 5, 13, 'India'),
  ('kid', 'Maya', '🎒', 'student', 3, 'overall', 1270, 1270, 5, 14, 'India'),
  ('chloe_martin', 'Chloe Martin', '🍁', 'student', 3, 'overall', 1150, 1150, 4, 15, 'Canada'),
  ('hiroshi_sato', 'Chef Hiroshi', '🔪', 'parent', 2, 'overall', 980, 980, 3, 16, 'Japan');

-- Seed Leaderboard - Hot Potato Rush (Ranked by Potatoes Served)
INSERT OR IGNORE INTO leaderboard (user_id, user_name, avatar, role, level, game_type, score, xp, streak, rank, country) VALUES
  ('chef_priya', 'Chef Priya', '👨‍🍳', 'parent', 3, 'hotPotato', 42, 4500, 18, 1, 'India'),
  ('kenji_tanaka', 'Kenji Tanaka', '🍱', 'student', 3, 'hotPotato', 38, 3850, 15, 2, 'Japan'),
  ('elena_alvarez', 'Elena Alvarez', '👩‍🍳', 'parent', 3, 'hotPotato', 35, 3620, 14, 3, 'Peru'),
  ('amara_okafor', 'Amara Okafor', '✨', 'student', 3, 'hotPotato', 30, 3200, 12, 4, 'Nigeria'),
  ('marcus_chen', 'Marcus Chen', '🥢', 'student', 3, 'hotPotato', 28, 2950, 11, 5, 'Singapore'),
  ('giulia_rossi', 'Giulia Rossi', '🍕', 'parent', 3, 'hotPotato', 26, 2780, 10, 6, 'Italy'),
  ('tariq_almansoor', 'Tariq Al-Mansoor', '🫖', 'student', 3, 'hotPotato', 25, 2540, 9, 7, 'UAE'),
  ('sofia_lindqvist', 'Sofia Lindqvist', '🫐', 'student', 3, 'hotPotato', 24, 2310, 8, 8, 'Sweden'),
  ('chef_devendra', 'Chef Devendra', '👳‍♂️', 'parent', 3, 'hotPotato', 22, 2150, 7, 9, 'India'),
  ('leo_dubois', 'Leo Dubois', '🥐', 'student', 3, 'hotPotato', 20, 1980, 7, 10, 'France'),
  ('zara_patel', 'Zara Patel', '🧁', 'student', 3, 'hotPotato', 19, 1820, 6, 11, 'UK'),
  ('mateo_silva', 'Mateo Silva', '🌮', 'student', 3, 'hotPotato', 18, 1650, 6, 12, 'Mexico'),
  ('ananya_sen', 'Ananya Sen', '🍛', 'student', 3, 'hotPotato', 16, 1420, 5, 13, 'India'),
  ('kid', 'Maya', '🎒', 'student', 3, 'hotPotato', 15, 1270, 5, 14, 'India'),
  ('chloe_martin', 'Chloe Martin', '🍁', 'student', 3, 'hotPotato', 14, 1150, 4, 15, 'Canada'),
  ('hiroshi_sato', 'Chef Hiroshi', '🔪', 'parent', 2, 'hotPotato', 12, 980, 3, 16, 'Japan');

-- Seed Leaderboard - Build-a-Dish (Ranked by Dishes Mastered)
INSERT OR IGNORE INTO leaderboard (user_id, user_name, avatar, role, level, game_type, score, xp, streak, rank, country) VALUES
  ('elena_alvarez', 'Elena Alvarez', '👩‍🍳', 'parent', 3, 'buildDish', 15, 3620, 14, 1, 'Peru'),
  ('chef_priya', 'Chef Priya', '👨‍🍳', 'parent', 3, 'buildDish', 14, 4500, 18, 2, 'India'),
  ('kenji_tanaka', 'Kenji Tanaka', '🍱', 'student', 3, 'buildDish', 12, 3850, 15, 3, 'Japan'),
  ('giulia_rossi', 'Giulia Rossi', '🍕', 'parent', 3, 'buildDish', 12, 2780, 10, 4, 'Italy'),
  ('amara_okafor', 'Amara Okafor', '✨', 'student', 3, 'buildDish', 11, 3200, 12, 5, 'Nigeria'),
  ('chef_devendra', 'Chef Devendra', '👳‍♂️', 'parent', 3, 'buildDish', 11, 2150, 7, 6, 'India'),
  ('marcus_chen', 'Marcus Chen', '🥢', 'student', 3, 'buildDish', 10, 2950, 11, 7, 'Singapore'),
  ('tariq_almansoor', 'Tariq Al-Mansoor', '🫖', 'student', 3, 'buildDish', 9, 2540, 9, 8, 'UAE'),
  ('leo_dubois', 'Leo Dubois', '🥐', 'student', 3, 'buildDish', 9, 1980, 7, 9, 'France'),
  ('sofia_lindqvist', 'Sofia Lindqvist', '🫐', 'student', 3, 'buildDish', 8, 2310, 8, 10, 'Sweden'),
  ('mateo_silva', 'Mateo Silva', '🌮', 'student', 3, 'buildDish', 8, 1650, 6, 11, 'Mexico'),
  ('zara_patel', 'Zara Patel', '🧁', 'student', 3, 'buildDish', 7, 1820, 6, 12, 'UK'),
  ('kid', 'Maya', '🎒', 'student', 3, 'buildDish', 6, 1270, 5, 13, 'India'),
  ('ananya_sen', 'Ananya Sen', '🍛', 'student', 3, 'buildDish', 6, 1420, 5, 14, 'India'),
  ('hiroshi_sato', 'Chef Hiroshi', '🔪', 'parent', 2, 'buildDish', 6, 980, 3, 15, 'Japan'),
  ('chloe_martin', 'Chloe Martin', '🍁', 'student', 3, 'buildDish', 5, 1150, 4, 16, 'Canada');

-- Seed Leaderboard - Family Trivia (Ranked by High Score)
INSERT OR IGNORE INTO leaderboard (user_id, user_name, avatar, role, level, game_type, score, xp, streak, rank, country) VALUES
  ('chef_priya', 'Chef Priya', '👨‍🍳', 'parent', 3, 'trivia', 10, 4500, 18, 1, 'India'),
  ('kenji_tanaka', 'Kenji Tanaka', '🍱', 'student', 3, 'trivia', 10, 3850, 15, 2, 'Japan'),
  ('amara_okafor', 'Amara Okafor', '✨', 'student', 3, 'trivia', 10, 3200, 12, 3, 'Nigeria'),
  ('elena_alvarez', 'Elena Alvarez', '👩‍🍳', 'parent', 3, 'trivia', 9, 3620, 14, 4, 'Peru'),
  ('marcus_chen', 'Marcus Chen', '🥢', 'student', 3, 'trivia', 9, 2950, 11, 5, 'Singapore'),
  ('tariq_almansoor', 'Tariq Al-Mansoor', '🫖', 'student', 3, 'trivia', 9, 2540, 9, 6, 'UAE'),
  ('chef_devendra', 'Chef Devendra', '👳‍♂️', 'parent', 3, 'trivia', 9, 2150, 7, 7, 'India'),
  ('ananya_sen', 'Ananya Sen', '🍛', 'student', 3, 'trivia', 9, 1420, 5, 8, 'India'),
  ('giulia_rossi', 'Giulia Rossi', '🍕', 'parent', 3, 'trivia', 8, 2780, 10, 9, 'Italy'),
  ('sofia_lindqvist', 'Sofia Lindqvist', '🫐', 'student', 3, 'trivia', 8, 2310, 8, 10, 'Sweden'),
  ('leo_dubois', 'Leo Dubois', '🥐', 'student', 3, 'trivia', 8, 1980, 7, 11, 'France'),
  ('zara_patel', 'Zara Patel', '🧁', 'student', 3, 'trivia', 8, 1820, 6, 12, 'UK'),
  ('kid', 'Maya', '🎒', 'student', 3, 'trivia', 8, 1270, 5, 13, 'India'),
  ('chloe_martin', 'Chloe Martin', '🍁', 'student', 3, 'trivia', 8, 1150, 4, 14, 'Canada'),
  ('mateo_silva', 'Mateo Silva', '🌮', 'student', 3, 'trivia', 7, 1650, 6, 15, 'Mexico'),
  ('hiroshi_sato', 'Chef Hiroshi', '🔪', 'parent', 2, 'trivia', 7, 980, 3, 16, 'Japan');

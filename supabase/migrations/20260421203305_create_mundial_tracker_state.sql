/*
  # Create Mundial 2026 Tracker State Table

  1. New Tables
    - `mundial_state`
      - `id` (text, primary key) - session/user identifier key
      - `scores` (jsonb) - group stage match scores
      - `knockout` (jsonb) - knockout round scores
      - `simulated` (jsonb) - which scores were auto-simulated (to allow clearing them)
      - `view_mode` (text) - last active view mode (groups/chrono)
      - `zoom` (numeric) - bracket zoom level
      - `updated_at` (timestamptz) - last update time

  2. Security
    - Enable RLS on `mundial_state` table
    - Allow public read/write by session key (anonymous access for this tracker app)

  Notes:
    - This is a public tracker app with no auth, so we use a shared state key
    - The app stores state under a fixed key "default" for shared use
*/

CREATE TABLE IF NOT EXISTS mundial_state (
  id text PRIMARY KEY DEFAULT 'default',
  scores jsonb DEFAULT '{}',
  knockout jsonb DEFAULT '{}',
  simulated jsonb DEFAULT '{}',
  view_mode text DEFAULT 'groups',
  zoom numeric DEFAULT 1,
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE mundial_state ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read of mundial state"
  ON mundial_state FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public insert of mundial state"
  ON mundial_state FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public update of mundial state"
  ON mundial_state FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

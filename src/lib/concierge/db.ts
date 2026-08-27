import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Sales database (concierge records). Server-side only: the service key must
 * never reach the client bundle. All access goes through the concierge_*
 * SECURITY DEFINER functions; the sales schema itself is not exposed to
 * PostgREST.
 */
let cached: SupabaseClient | null = null;

export function salesDb(): SupabaseClient {
  if (cached) return cached;
  const url = process.env.SALES_DB_URL;
  const key = process.env.SALES_DB_SERVICE_KEY;
  if (!url || !key) {
    throw new Error("SALES_DB_URL and SALES_DB_SERVICE_KEY must be set");
  }
  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

type Json = Record<string, unknown>;

export async function startSession(payload: Json): Promise<{ session_id: string }> {
  const { data, error } = await salesDb().rpc("concierge_start", { payload });
  if (error) throw new Error(`concierge_start failed: ${error.message}`);
  return data as { session_id: string };
}

export async function getSession(sessionId: string): Promise<Json | null> {
  const { data, error } = await salesDb().rpc("concierge_get_session", {
    p_session_id: sessionId,
  });
  if (error) throw new Error(`concierge_get_session failed: ${error.message}`);
  return (data as Json) ?? null;
}

export async function saveTurn(
  sessionId: string,
  transcript: unknown,
  answers: unknown[] = [],
  patch: Json = {},
): Promise<void> {
  const { error } = await salesDb().rpc("concierge_save_turn", {
    p_session_id: sessionId,
    p_transcript: transcript,
    p_answers: answers,
    p_patch: patch,
  });
  if (error) throw new Error(`concierge_save_turn failed: ${error.message}`);
}

import { salesDb } from "@/lib/concierge/db";

/**
 * Watch page records (2026-10-14). Same pattern as the concierge: the sales
 * schema is reached only through SECURITY DEFINER RPCs with the service key,
 * server-side. watch_resolve_token never returns an email address.
 */

export type WatchGreeting = {
  first_name: string | null;
  company: string | null;
  campaign: string | null;
  source: string | null;
};

const TOKEN = /^[a-f0-9]{8,32}$/;

export async function resolveToken(token: string | undefined): Promise<WatchGreeting | null> {
  if (!token || !TOKEN.test(token)) return null;
  try {
    const { data, error } = await salesDb().rpc("watch_resolve_token", { p_token: token });
    if (error || !data) return null;
    return data as WatchGreeting;
  } catch {
    // A greeting is a nicety; the page must render without it.
    return null;
  }
}

export type WatchEventName =
  | "view"
  | "play"
  | "progress_25"
  | "progress_50"
  | "progress_75"
  | "complete"
  | "cta_click"
  | "clip_select";

export type WatchEvent = {
  token?: string;
  source?: string;
  campaign?: string;
  clip: string;
  event: WatchEventName;
  seconds?: number;
  visitor_id?: string;
  user_agent?: string;
  referrer?: string;
};

export async function logWatchEvent(payload: WatchEvent): Promise<void> {
  const { error } = await salesDb().rpc("watch_log_event", { payload });
  if (error) throw new Error(`watch_log_event failed: ${error.message}`);
}

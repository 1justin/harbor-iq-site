"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

type ChatMessage = { role: "assistant" | "user"; content: string };

type Props = { rescheduleUrl: string };

/** Booking details from the TidyCal redirect params, all optional. */
function useBookingParams() {
  const params = useSearchParams();
  return {
    firstName: params.get("name")?.split(" ")[0] || undefined,
    email: params.get("email") || undefined,
    scheduledAt: params.get("time") || undefined,
    timezone: params.get("tz") || undefined,
    source: params.get("src") || undefined,
    tidycalRef: params.get("ref") || undefined,
  };
}

export function BookingCard() {
  const { scheduledAt, timezone } = useBookingParams();
  return (
    <div className="bg-paper rounded-lg border-l-4 border-interactive px-6 py-4 mb-10 flex items-center justify-between gap-4">
      <div>
        <p className="font-semibold text-anchor">HarborIQ demo with Justin</p>
        <p className="text-sm text-charcoal">
          {scheduledAt ?? "Your booking is confirmed. Details are in your email."}
          {timezone ? ` · ${timezone}` : ""}
        </p>
      </div>
      <span
        className="w-8 h-8 rounded-full bg-success flex items-center justify-center text-white text-sm shrink-0"
        aria-label="Demo booked"
        title="Demo booked"
      >
        &#10003;
      </span>
    </div>
  );
}

type ApiResponse = {
  sessionId?: string;
  messages?: string[];
  reply?: string;
  quickReplies?: string[];
  phase?: "intake" | "recap" | "done";
  progress?: number;
  error?: string;
};

export function ConciergeChat(props: Props) {
  const booking = useBookingParams();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"intake" | "recap" | "done" | "skipped" | "failed">("intake");
  const scrollRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  const scrollDown = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    (async () => {
      try {
        const res = await fetch("/api/concierge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "start",
            firstName: booking.firstName,
            email: booking.email,
            scheduledAt: booking.scheduledAt,
            timezone: booking.timezone,
            source: booking.source,
            tidycalRef: booking.tidycalRef,
          }),
        });
        const data: ApiResponse = await res.json();
        if (!res.ok || !data.sessionId) throw new Error(data.error);
        setSessionId(data.sessionId);
        setMessages((data.messages ?? []).map((content) => ({ role: "assistant", content })));
        setQuickReplies(data.quickReplies ?? []);
        setProgress(data.progress ?? 0.05);
      } catch {
        setPhase("failed");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const send = useCallback(
    async (text: string) => {
      const message = text.trim();
      if (!message || !sessionId || busy) return;
      setBusy(true);
      setInput("");
      setQuickReplies([]);
      setMessages((prev) => [...prev, { role: "user", content: message }]);
      scrollDown();
      try {
        const res = await fetch("/api/concierge", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "message", sessionId, message }),
        });
        const data: ApiResponse = await res.json();
        const reply =
          data.reply ??
          "Something went wrong on my end. Your demo is booked either way, and Justin will cover this live.";
        setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
        setQuickReplies(data.quickReplies ?? []);
        if (typeof data.progress === "number") setProgress(data.progress);
        if (data.phase === "done") setPhase("done");
        else if (data.phase === "recap") setPhase("recap");
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I lost my connection for a moment. Your demo is safe either way; feel free to try again or just close this page.",
          },
        ]);
      } finally {
        setBusy(false);
        scrollDown();
      }
    },
    [sessionId, busy, scrollDown],
  );

  const skip = useCallback(async () => {
    setPhase("skipped");
    if (sessionId) {
      fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "skip", sessionId }),
      }).catch(() => {});
    }
  }, [sessionId]);

  const finished = phase === "done" || phase === "skipped";

  if (phase === "failed") {
    return (
      <div className="bg-paper rounded-xl p-6">
        <p className="text-charcoal">
          The concierge is unavailable right now, but your demo is booked and
          nothing is lost. Justin will cover everything live. Need to change the
          time?{" "}
          <a href={props.rescheduleUrl} className="text-interactive underline">
            Reschedule here
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="bg-paper rounded-xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-ash">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-anchor text-white flex items-center justify-center font-bold">
            H
          </div>
          <div>
            <p className="font-semibold text-ink leading-tight">
              HarborIQ Demo Concierge
            </p>
            <p className="text-xs text-stone">
              AI assistant · Answers go directly to Justin
            </p>
          </div>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-[11px] font-semibold tracking-wider text-stone uppercase mb-1">
            About 2 minutes
          </p>
          <div className="w-28 h-1.5 bg-ash rounded-full overflow-hidden ml-auto">
            <div
              className="h-full bg-interactive rounded-full transition-all duration-500"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="px-5 py-5 space-y-3 max-h-[26rem] overflow-y-auto"
        aria-live="polite"
      >
        {messages.map((m, i) =>
          m.role === "assistant" ? (
            <div key={i} className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-md bg-anchor text-white text-xs font-bold flex items-center justify-center shrink-0">
                H
              </div>
              <div className="bg-linen border border-ash rounded-lg rounded-bl-sm px-4 py-3 text-ink max-w-[85%] whitespace-pre-wrap">
                {m.content}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="bg-interactive text-white rounded-lg rounded-br-sm px-4 py-3 max-w-[85%] whitespace-pre-wrap">
                {m.content}
              </div>
            </div>
          ),
        )}
        {busy && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-md bg-anchor text-white text-xs font-bold flex items-center justify-center shrink-0">
              H
            </div>
            <div className="bg-linen border border-ash rounded-lg px-4 py-3 text-stone">
              <span className="animate-pulse">Typing…</span>
            </div>
          </div>
        )}
        {phase === "skipped" && (
          <div className="bg-linen border border-ash rounded-lg px-4 py-3 text-charcoal">
            No problem. You&apos;re all set for your demo, and Justin will cover
            everything live.
          </div>
        )}
      </div>

      {/* Quick replies */}
      {!finished && quickReplies.length > 0 && (
        <div className="px-5 pb-3 flex flex-wrap gap-2">
          {quickReplies.map((qr) => (
            <button
              key={qr}
              onClick={() => send(qr)}
              disabled={busy}
              className="border border-ash bg-pure hover:border-interactive hover:text-interactive text-charcoal font-medium rounded-lg px-4 py-2 text-sm transition-colors disabled:opacity-50"
            >
              {qr}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      {!finished ? (
        <form
          className="px-5 pb-4"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <div className="flex items-center gap-2 border border-ash rounded-lg bg-pure px-3 py-2 focus-within:border-interactive">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Or answer in your own words..."
              maxLength={2000}
              disabled={busy || !sessionId}
              className="flex-1 outline-none text-ink placeholder:text-fog bg-transparent py-1"
              aria-label="Your answer"
            />
            <button
              type="submit"
              disabled={busy || !sessionId || !input.trim()}
              className="w-9 h-9 rounded-md bg-copper hover:bg-bronze text-white flex items-center justify-center transition-colors disabled:opacity-40"
              aria-label="Send"
            >
              &#8593;
            </button>
          </div>
          <p className="text-[11px] text-stone mt-2">
            No client names, policy numbers, or credentials needed. High-level
            is perfect.
          </p>
        </form>
      ) : (
        <div className="px-5 pb-5">
          <a
            href={props.rescheduleUrl}
            className="text-sm text-interactive underline"
          >
            Need to reschedule?
          </a>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-ash bg-linen/60">
        <p className="text-xs text-stone">
          &#128274; Used only to prepare and improve your HarborIQ experience
        </p>
        {!finished && (
          <button
            onClick={skip}
            className="text-xs text-charcoal underline whitespace-nowrap ml-4"
          >
            Skip for now
          </button>
        )}
      </div>
    </div>
  );
}

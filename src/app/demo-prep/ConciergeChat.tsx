"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
  kind?: "ack";
};

type Props = { rescheduleUrl: string };

type ApiResponse = {
  sessionId?: string;
  messages?: string[];
  ack?: string | null;
  reply?: string;
  quickReplies?: string[];
  phase?: "intake" | "recap" | "done";
  questionNumber?: number;
  progress?: number;
  error?: string;
};

const ABOUT_TOTAL = 6;

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
    <div className="bg-paper rounded-lg border-l-4 border-interactive px-5 py-4 mb-10 flex items-center gap-4">
      <Image
        src="/newsroom/justin-mayer-portrait.jpg"
        alt="Justin Mayer"
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-anchor">
          You&apos;re meeting with Justin Mayer, HarborIQ&apos;s founder
        </p>
        <p className="text-sm text-charcoal">
          {scheduledAt ?? "Your booking is confirmed"}
          {timezone ? ` ${timezone}` : ""} · 20 minutes · Meeting details are in
          your email
        </p>
      </div>
      <span className="text-success text-sm font-medium whitespace-nowrap hidden sm:block">
        &#10003; Confirmed
      </span>
    </div>
  );
}

export function ConciergeChat(props: Props) {
  const booking = useBookingParams();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [quickReplies, setQuickReplies] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [phase, setPhase] = useState<
    "intake" | "recap" | "done" | "skipped" | "failed"
  >("intake");
  const [showWhatWeSave, setShowWhatWeSave] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const sendingRef = useRef(false);

  const scrollDown = useCallback(() => {
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
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
        setMessages(
          (data.messages ?? []).map((content) => ({
            role: "assistant",
            content,
          })),
        );
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
      if (!message || !sessionId || busy || sendingRef.current) return;
      sendingRef.current = true;
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
        const additions: ChatMessage[] = [];
        if (data.ack) {
          additions.push({ role: "assistant", content: data.ack, kind: "ack" });
        }
        additions.push({
          role: "assistant",
          content:
            data.reply ??
            "Something went wrong on my end. Your demo is booked either way, and Justin will cover this live.",
        });
        setMessages((prev) => [...prev, ...additions]);
        setQuickReplies(data.quickReplies ?? []);
        if (typeof data.progress === "number") setProgress(data.progress);
        if (typeof data.questionNumber === "number")
          setQuestionNumber(data.questionNumber);
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
        sendingRef.current = false;
        setBusy(false);
        scrollDown();
      }
    },
    [sessionId, busy, scrollDown],
  );

  const skipAll = useCallback(async () => {
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

  const progressLabel =
    phase === "recap"
      ? "Your recap"
      : phase === "done"
        ? "Complete"
        : questionNumber <= ABOUT_TOTAL
          ? `Question ${questionNumber} of about ${ABOUT_TOTAL}`
          : "Almost done";

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
      <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-ash">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-lg bg-anchor text-white flex items-center justify-center font-bold shrink-0">
            H
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-ink leading-tight">
              HarborIQ Demo Concierge
            </p>
            <p className="text-[13px] text-charcoal">
              AI assistant, not a live person · Your recap goes directly to
              Justin Mayer, founder
            </p>
          </div>
        </div>
        <div className="text-right shrink-0 hidden sm:block">
          <p className="text-[13px] font-medium text-charcoal mb-1 whitespace-nowrap">
            {progressLabel}
          </p>
          <div className="w-32 h-1.5 bg-ash rounded-full overflow-hidden ml-auto">
            <div
              className="h-full bg-interactive rounded-full transition-all duration-500"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Messages: page-level scroll, no nested scrollbar */}
      <div className="px-5 py-5 space-y-3" aria-live="polite">
        {messages.map((m, i) => {
          if (m.kind === "ack") {
            return (
              <div
                key={i}
                className="bg-linen border-l-2 border-copper rounded-r px-4 py-2.5 text-[15px] text-charcoal ml-9"
              >
                {m.content}
              </div>
            );
          }
          return m.role === "assistant" ? (
            <div key={i} className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-md bg-anchor text-white text-xs font-bold flex items-center justify-center shrink-0">
                H
              </div>
              <div className="bg-pure border border-ash rounded-lg rounded-bl-sm px-4 py-3 text-ink max-w-[85%] whitespace-pre-wrap">
                {m.content}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="bg-interactive text-white rounded-lg rounded-br-sm px-4 py-3 max-w-[85%] whitespace-pre-wrap">
                {m.content}
              </div>
            </div>
          );
        })}
        {busy && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-md bg-anchor text-white text-xs font-bold flex items-center justify-center shrink-0">
              H
            </div>
            <div className="bg-pure border border-ash rounded-lg px-4 py-3 text-stone">
              <span className="animate-pulse">Typing…</span>
            </div>
          </div>
        )}
        {phase === "skipped" && (
          <div className="bg-linen border border-ash rounded-lg px-4 py-3 text-charcoal">
            No problem. Your demo stays exactly as booked, and Justin will
            cover everything live.
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

      {/* Composer */}
      {!finished ? (
        <div className="px-5 pb-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <div className="flex items-center gap-2 border border-ash rounded-lg bg-pure px-3 py-2 focus-within:border-interactive">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Answer in your own words..."
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
          </form>
          <div className="flex items-start justify-between gap-4 mt-2">
            <p className="text-[13px] text-charcoal leading-snug">
              &#128274; Saved with your booking to prepare your demo. Don&apos;t
              include client names, policy numbers, or credentials.{" "}
              <button
                onClick={() => setShowWhatWeSave((v) => !v)}
                className="underline text-charcoal"
              >
                What we save
              </button>
            </p>
            {phase === "intake" && (
              <button
                onClick={() => send("I'd rather skip that question.")}
                disabled={busy || !sessionId}
                className="text-[13px] text-charcoal underline whitespace-nowrap disabled:opacity-50"
              >
                Skip this question
              </button>
            )}
          </div>
          {showWhatWeSave && (
            <div className="mt-2 bg-linen border border-ash rounded-lg px-4 py-3 text-[13px] text-charcoal leading-relaxed">
              We save your answers, the confirmed recap, and this conversation
              with your demo booking so Justin can prepare. Justin reads it
              before your meeting. We also look at anonymous patterns across
              conversations (like which topics come up most) to make demos
              better. We don&apos;t ask for or want client data, and this
              conversation is never used to access your systems.
            </div>
          )}
        </div>
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

      {/* Handoff control panel */}
      <div className="flex items-start justify-between gap-4 px-5 py-3.5 border-t border-ash bg-ice/50">
        <div className="flex items-start gap-2.5">
          <span className="w-5 h-5 rounded-full bg-interactive text-white text-[11px] flex items-center justify-center shrink-0 mt-0.5">
            &#10003;
          </span>
          <p className="text-[13px] text-charcoal leading-snug">
            <span className="font-semibold text-ink">
              You stay in control of the handoff.
            </span>{" "}
            At the end, you&apos;ll review exactly what Justin receives and can
            change anything before it&apos;s sent.
          </p>
        </div>
        {!finished && (
          <button
            onClick={skipAll}
            className="text-[13px] text-charcoal underline whitespace-nowrap mt-0.5"
          >
            Skip for now
          </button>
        )}
      </div>
      <div ref={bottomRef} />
    </div>
  );
}

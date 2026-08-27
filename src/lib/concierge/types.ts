import { z } from "zod";

/**
 * Qualification fields (spec section 8). "Required" fields form the minimum
 * viable profile; the rest are captured opportunistically.
 */
export const FIELD_KEYS = [
  "first_name",
  "agency_name",
  "agency_type",
  "team_size",
  "lines_of_business",
  "ams",
  "crm",
  "contract_status",
  "contract_expiration",
  "carrier_count",
  "website_satisfaction",
  "online_quote_request",
  "email_platform",
  "motivation",
  "current_process",
  "friction",
  "impact",
  "desired_outcome",
  "priority_question",
  "adoption_concern",
] as const;

export const ExtractedAnswerSchema = z.object({
  field: z.enum(FIELD_KEYS),
  value_raw: z.string(),
  value_normalized: z.string(),
  confidence: z.number().min(0).max(1),
  status: z.enum([
    "answered",
    "inferred",
    "unknown",
    "declined",
    "needs_confirmation",
  ]),
});
export type ExtractedAnswer = z.infer<typeof ExtractedAnswerSchema>;

export const TurnOutputSchema = z.object({
  /** Brief acknowledgment of what the prospect just said, shown as a quiet strip above the next question. Null when nothing needs acknowledging. */
  ack: z.string().nullable(),
  /** The concierge's next message to the prospect (the question, recap, or close). Never restates the ack. */
  reply: z.string(),
  /** Which substantive question this is, 1-based, for the "Question N of about 6" indicator. Stays at the last number during recap and close. */
  question_number: z.number().int().min(1).max(12),
  /** Optional tappable answers for the question just asked. Empty when free text fits better. */
  quick_replies: z.array(z.string()).max(4),
  /** Every fact extractable from the prospect's latest message, including ones answering earlier questions. */
  extracted: z.array(ExtractedAnswerSchema),
  /** intake: still gathering. recap: reply contains the recap and asks to confirm. done: prospect confirmed (or corrected once more); conversation is over. */
  phase: z.enum(["intake", "recap", "done"]),
  /** The recap text shown to the prospect, set when phase is recap or done. */
  recap: z.string().nullable(),
  /** Rough completion, 0 to 1, for the progress bar. */
  progress: z.number().min(0).max(1),
});
export type TurnOutput = z.infer<typeof TurnOutputSchema>;

export type TranscriptMessage = {
  role: "assistant" | "user";
  content: string;
  at: string;
};

export type SessionContext = {
  firstName?: string;
  email?: string;
  scheduledAt?: string;
  timezone?: string;
  source?: string;
};

import { redirect } from "next/navigation";
import { DEFAULT_CLIP } from "@/lib/watch/clips";

/** /watch with no clip lands on the overview, keeping any token or source. */
export default async function WatchIndex({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const qs = new URLSearchParams();
  for (const key of ["v", "s", "c"]) {
    const value = params[key];
    if (typeof value === "string" && value) qs.set(key, value);
  }
  const suffix = qs.toString();
  redirect(`/watch/${DEFAULT_CLIP}${suffix ? `?${suffix}` : ""}`);
}

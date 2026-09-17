"use client";
import { useEffect, useRef, useState } from "react";
import { ListChecks, ExternalLink, Loader2 } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";
import { TRIPETTO_URL } from "@/lib/data";

/* ------------------------------------------------------------------ */
/* EDITABLE: Tripetto embedded application form.                       */
/* Replace TOKEN with your own embed token from Tripetto Studio.       */
/* ------------------------------------------------------------------ */
const TRIPETTO_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoieE9ZbU5xTXoxL2lTVzhZS3VLSzhqZW5xUTRSN3RROFhuQWo5R2lKOXBoaz0iLCJkZWZpbml0aW9uIjoiS3U2MS9NOTlPc0lrUzVUV0thOUJMMGpFNnY4T2tadDQrUmpMb245TGxiST0iLCJ0eXBlIjoiY29sbGVjdCJ9.d0ucmSzi9upztNOZRgOn6dkPTwXXkdANGKRf7T9YiuQ";
const TRIPETTO_ELEMENT_ID = "tripetto-j1kryt";

const SCRIPTS = [
  "https://cdn.jsdelivr.net/npm/@tripetto/runner",
  "https://cdn.jsdelivr.net/npm/@tripetto/runner-classic",
  "https://cdn.jsdelivr.net/npm/@tripetto/studio",
];

declare global {
  interface Window {
    TripettoStudio?: { form: (args: { runner: unknown; token: string; element: string }) => void };
    TripettoClassic?: unknown;
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

const NEXT_STEPS = [
  "Tell us about your education, skills and availability",
  "We map the roles and industries that fit your direction",
  "Get matched with employers hiring student talent",
];

export default function ApplyForm() {
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return; // guard against StrictMode double-invoke
    started.current = true;
    (async () => {
      try {
        for (const src of SCRIPTS) await loadScript(src);
        if (!window.TripettoStudio || !window.TripettoClassic) throw new Error("Tripetto failed to initialise");
        window.TripettoStudio.form({
          runner: window.TripettoClassic,
          token: TRIPETTO_TOKEN,
          element: TRIPETTO_ELEMENT_ID,
        });
        setStatus("ready");
      } catch {
        setStatus("error");
      }
    })();
  }, []);

  return (
    <section id="apply" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <Eyebrow route="Route 11" station="Apply · takes ~4 minutes" />
        <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:col-span-7">
            One application. <span className="font-serif font-normal italic">Field-matched</span> roles.
          </h2>
          <p className="max-w-md text-[15.5px] leading-relaxed text-ink/65 lg:col-span-5">
            Complete the RAYEXPESS student application right here — no account, no cover letter,
            no experience required.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-12">
        {/* left rail */}
        <Reveal className="lg:col-span-4">
          <aside className="h-full rounded-[22px] bg-ink p-7 text-white md:p-8 lg:sticky lg:top-24">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ray">
              <ListChecks className="size-4" aria-hidden /> What happens next
            </p>
            <ol className="mt-5 space-y-4">
              {NEXT_STEPS.map((s, i) => (
                <li key={s} className="flex gap-3.5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-ray font-display text-[13px] font-bold text-ink">
                    {i + 1}
                  </span>
                  <span className="pt-1 text-[14.5px] leading-snug text-white/75">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-7 border-t border-white/12 pt-5">
              <p className="text-[13.5px] text-white/55">Form not loading?</p>
              <a
                href={TRIPETTO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 font-display text-sm font-bold text-ray hover:underline"
              >
                Open it in a new tab <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </div>
          </aside>
        </Reveal>

        {/* live form */}
        <Reveal delay={0.1} className="lg:col-span-8">
          <div className="relative overflow-hidden rounded-[22px] bg-white p-4 ring-1 ring-ink/10 shadow-[8px_8px_0_0_#0C1022] sm:p-8">
            {status === "loading" && (
              <div className="space-y-4 p-4" role="status" aria-live="polite" aria-label="Loading application form">
                <p className="flex items-center gap-2 font-display text-sm font-bold text-ink/60">
                  <Loader2 className="size-4 animate-spin" aria-hidden /> Loading your application…
                </p>
                {[92, 100, 78, 100, 60].map((w, i) => (
                  <div key={i} className="h-12 animate-pulse rounded-xl bg-paper ring-1 ring-ink/8" style={{ width: `${w}%` }} />
                ))}
              </div>
            )}
            {status === "error" && (
              <div className="p-6 text-center" role="alert">
                <p className="font-display text-xl font-bold">The form couldn&apos;t load here.</p>
                <p className="mt-2 text-[14.5px] text-ink/60">Open it directly — it takes about 4 minutes.</p>
                <a
                  href={TRIPETTO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ray px-7 py-3.5 font-display text-[15px] font-bold text-ink shadow-[4px_4px_0_0_#0C1022] transition-transform hover:-translate-y-0.5"
                >
                  Open Student Application <ExternalLink className="size-4" aria-hidden />
                </a>
              </div>
            )}
            {/* Tripetto mounts here. Skeleton shows above it while loading. */}
            <div
              id={TRIPETTO_ELEMENT_ID}
              aria-busy={status === "loading"}
              aria-label="RAYEXPESS student application form"
            />
            <noscript>
              <p className="p-4 text-center text-[14.5px]">
                JavaScript is required for the application form.{" "}
                <a href={TRIPETTO_URL} className="font-bold underline">Open it here instead.</a>
              </p>
            </noscript>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

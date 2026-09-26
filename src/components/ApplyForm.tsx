"use client";
import { useState } from "react";
import { ListChecks, ExternalLink, Loader2, ShieldCheck } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";
import { TRIPETTO_URL } from "@/lib/data";

/* ------------------------------------------------------------------ */
/* Form-first: iframe loads immediately (eager). No scroll gate — the  */
/* form is the page's primary action and must be visible on load.      */
/* `layout="hero"` renders just the form card for embedding in Hero.   */
/* `layout="full"` renders the full section with explainer rail.       */
/* ------------------------------------------------------------------ */

const NEXT_STEPS = [
  "Tell us about your education, skills and availability",
  "We map the roles and industries that fit your direction",
  "Get matched with employers hiring student talent",
];

function FormCard({ compact = false }: { compact?: boolean }) {
  const [iframeReady, setIframeReady] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[22px] bg-white p-4 ring-1 ring-ink/10 shadow-[8px_8px_0_0_#0C1022] sm:p-5">
      <div className="flex items-center justify-between gap-3 px-1 pb-3">
        <p className="flex items-center gap-2 font-display text-sm font-bold">
          <ShieldCheck className="size-4 text-moss" aria-hidden />
          Student Application
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">~4 min · Free</p>
      </div>
      {!iframeReady && (
        <div className="space-y-3 p-2" role="status" aria-live="polite" aria-label="Loading application form">
          <p className="flex items-center gap-2 font-display text-sm font-bold text-ink/60">
            <Loader2 className="size-4 animate-spin" aria-hidden /> Loading your application…
          </p>
          {[92, 100, 78, 100, 60].map((w, i) => (
            <div key={i} className="h-11 animate-pulse rounded-xl bg-paper ring-1 ring-ink/8" style={{ width: `${w}%` }} />
          ))}
        </div>
      )}
      <iframe
        src={TRIPETTO_URL}
        title="RAYEXPESS student application form"
        onLoad={() => setIframeReady(true)}
        className={iframeReady ? "h-[640px] w-full rounded-xl border-0" : compact ? "h-[300px] w-full rounded-xl border-0" : "h-[420px] w-full rounded-xl border-0"}
        allow="camera; microphone"
      />
      <noscript>
        <p className="p-4 text-center text-[14.5px]">
          JavaScript is required for the application form.{" "}
          <a href={TRIPETTO_URL} className="font-bold underline">Open it here instead.</a>
        </p>
      </noscript>
      <p className="px-1 pt-3 text-center text-[13px] text-ink/55">
        Trouble seeing the form?{" "}
        <a href={TRIPETTO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-ink underline">
          Open in a new tab <ExternalLink className="size-3.5" aria-hidden />
        </a>
      </p>
    </div>
  );
}

export default function ApplyForm({ layout = "full" }: { layout?: "full" | "hero" }) {
  if (layout === "hero") {
    return <FormCard compact />;
  }

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
              <p className="text-[13.5px] text-white/55">Prefer a new tab?</p>
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

        {/* live form — loads immediately */}
        <Reveal delay={0.1} className="lg:col-span-8">
          <FormCard />
        </Reveal>
      </div>
    </section>
  );
}

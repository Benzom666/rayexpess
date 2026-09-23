"use client";
import { useEffect, useRef, useState } from "react";
import { ListChecks, ExternalLink, Loader2 } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";
import { TRIPETTO_URL } from "@/lib/data";

/* ------------------------------------------------------------------ */
/* Performance fix: the old embed pulled the full Tripetto Studio      */
/* editor (~MBs of JS) on initial page load and blocked the main       */
/* thread — the main cause of "stuck / very slow" on PC + mobile.      */
/* Now we load an isolated iframe ONLY when the user scrolls near      */
/* the form. Zero Tripetto JS on the main page until then.             */
/* ------------------------------------------------------------------ */

const NEXT_STEPS = [
  "Tell us about your education, skills and availability",
  "We map the roles and industries that fit your direction",
  "Get matched with employers hiring student talent",
];

export default function ApplyForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Still lazy-load, just with a wider margin so it is ready.
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" } // start loading shortly before it scrolls into view
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="apply" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
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

        {/* live form — isolated iframe, lazy */}
        <Reveal delay={0.1} className="lg:col-span-8">
          <div className="relative overflow-hidden rounded-[22px] bg-white p-4 ring-1 ring-ink/10 shadow-[8px_8px_0_0_#0C1022] sm:p-8">
            {!shouldLoad ? (
              <div className="p-6 text-center" aria-label="Application form placeholder">
                <p className="font-display text-xl font-bold">Ready when you are.</p>
                <p className="mt-2 text-[14.5px] text-ink/60">The application loads as you scroll — about 4 minutes to complete.</p>
                <button
                  onClick={() => setShouldLoad(true)}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-ray px-7 py-3.5 font-display text-[15px] font-bold text-ink shadow-[4px_4px_0_0_#0C1022] transition-transform hover:-translate-y-0.5"
                >
                  Load Student Application
                </button>
                <p className="mt-4">
                  <a href={TRIPETTO_URL} target="_blank" rel="noopener noreferrer" className="font-display text-sm font-bold text-ink/60 underline">
                    Or open in a new tab
                  </a>
                </p>
              </div>
            ) : (
              <>
                {!iframeReady && (
                  <div className="space-y-4 p-4" role="status" aria-live="polite" aria-label="Loading application form">
                    <p className="flex items-center gap-2 font-display text-sm font-bold text-ink/60">
                      <Loader2 className="size-4 animate-spin" aria-hidden /> Loading your application…
                    </p>
                    {[92, 100, 78, 100, 60].map((w, i) => (
                      <div key={i} className="h-12 animate-pulse rounded-xl bg-paper ring-1 ring-ink/8" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                )}
                <iframe
                  src={TRIPETTO_URL}
                  title="RAYEXPESS student application form"
                  loading="lazy"
                  onLoad={() => setIframeReady(true)}
                  className={iframeReady ? "h-[720px] w-full rounded-xl border-0" : "h-[420px] w-full rounded-xl border-0"}
                  allow="camera; microphone"
                />
                <noscript>
                  <p className="p-4 text-center text-[14.5px]">
                    JavaScript is required for the application form.{" "}
                    <a href={TRIPETTO_URL} className="font-bold underline">Open it here instead.</a>
                  </p>
                </noscript>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

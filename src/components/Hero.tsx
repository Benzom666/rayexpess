import { BadgeCheck, Clock, ShieldCheck, MapPin, ArrowDown } from "lucide-react";
import { Eyebrow } from "./ui";
import ApplyForm from "./ApplyForm";

const TRUST = [
  { icon: BadgeCheck, text: "Free to apply — no experience needed" },
  { icon: Clock, text: "Takes ~4 minutes, right on this page" },
  { icon: ShieldCheck, text: "Reviewed by a real human, not a bot" },
  { icon: MapPin, text: "Ontario, Canada · hire@rayexpess.ca" },
];

export default function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden pb-12 pt-[96px] md:pt-[120px]">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] size-[320px] rounded-full bg-ray/25 blur-[80px] md:size-[520px] md:blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-12">
        {/* left: promise + trust */}
        <div className="pt-2 lg:sticky lg:top-24">
          <Eyebrow route="RAYEXPESS" station="Student applications · Open" />
          <h1 className="hero-anim hero-anim-1 mt-5 font-display text-[42px] font-bold leading-[1.0] tracking-[-0.03em] sm:text-[56px] lg:text-[64px]">
            Study. Work.
            <br />
            Build your{" "}
            <span className="hand-underline font-serif font-normal italic tracking-normal">
              career.
              <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden>
                <path d="M4 14 C 80 6, 200 6, 296 12" fill="none" stroke="#FFB800" strokeWidth="9" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="hero-anim hero-anim-2 mt-5 max-w-lg text-[16.5px] leading-relaxed text-ink/70">
            <strong className="font-bold text-ink">One short application.</strong> Tell us what you study,
            what you&apos;re good at, and when you&apos;re free — we match you with student-friendly
            jobs across Ontario.
          </p>

          <ul className="hero-anim hero-anim-3 mt-7 space-y-3">
            {TRUST.map((t) => (
              <li key={t.text} className="flex items-center gap-3 text-[15px] font-medium text-ink/80">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-white ring-1 ring-ink/10">
                  <t.icon className="size-4 text-moss" aria-hidden />
                </span>
                {t.text}
              </li>
            ))}
          </ul>

          <a
            href="#apply-form"
            className="hero-anim hero-anim-4 mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-display text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-line lg:hidden"
          >
            Fill the application <ArrowDown className="size-4" aria-hidden />
          </a>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
            No account · No cover letter · No fees for students
          </p>
        </div>

        {/* right: the form — visible immediately */}
        <div id="apply" className="scroll-mt-24">
          <div id="apply-form" className="hero-anim hero-anim-2 scroll-mt-28">
            <ApplyForm layout="hero" />
          </div>
          <p className="mt-4 text-center text-[13.5px] text-ink/55">
            Prefer email? Write to{" "}
            <a href="mailto:hire@rayexpess.ca" className="font-bold text-ink underline">
              hire@rayexpess.ca
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

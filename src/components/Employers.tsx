import { Check, PhoneCall } from "lucide-react";
import { Eyebrow, Reveal, ApplyButton } from "./ui";

const PERKS = [
  "Access emerging talent", "Field-specific student candidates",
  "Flexible staffing", "Part-time & full-time student workers",
  "Internship opportunities", "Entry-level talent",
  "Short-term & contract staffing", "Future full-time talent pipeline",
];

export default function Employers() {
  return (
    <section id="employers" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-8 overflow-hidden rounded-[28px] bg-white ring-1 ring-ink/10 lg:grid-cols-2">
        {/* left — ink panel */}
        <Reveal className="h-full">
          <div className="grain relative flex h-full flex-col justify-between overflow-hidden bg-ink p-8 text-white md:p-12">
            <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-line/40 blur-[90px]" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-ray/20 blur-[90px]" />
            <div className="relative">
              <Eyebrow route="Route 05" station="For employers" light />
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-5xl">
                Hire the next generation <span className="font-serif font-normal italic text-ray">of talent.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-white/65">
                Connect with motivated students actively developing the skills your business needs —
                across programs, skill sets and schedules.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ApplyButton variant="ray" href="mailto:hire@rayexpess.ca?subject=Hire%20Student%20Talent%20—%20RAYEXPESS">
                  Hire Student Talent
                </ApplyButton>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-display text-[15px] font-bold transition-colors hover:bg-white hover:text-ink">
                  <PhoneCall className="size-4" aria-hidden /> Talk to RAYEXPESS
                </a>
              </div>
            </div>
            <div className="relative mt-10 grid grid-cols-3 gap-3 border-t border-white/12 pt-6">
              {[{ v: "48h", l: "Avg. shortlist" }, { v: "12+", l: "Fields covered" }, { v: "Flexible", l: "Terms" }].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-2xl font-bold text-ray">{s.v}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* right — checklist */}
        <div className="p-8 md:p-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-line">● What you get</p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">One partner for student hiring</h3>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {PERKS.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <li className="flex items-start gap-2.5 rounded-2xl bg-paper px-4 py-3.5 ring-1 ring-ink/8 transition-all hover:ring-ink">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-moss text-white">
                    <Check className="size-3" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="font-display text-[14px] font-semibold leading-snug">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 rounded-2xl bg-ray-soft p-4 text-[13.5px] leading-relaxed text-ink/70 ring-1 ring-ray-deep/25">
            <strong className="text-ink">Student work → long-term hire.</strong> Trial emerging talent on
            real work first, then convert your best into full-time team members.
          </p>
        </div>
      </div>

      {/* talent pipeline visual */}
      <Reveal delay={0.1}>
        <div className="mt-6 rounded-[28px] border-2 border-dashed border-ink/15 bg-cream/60 p-6 md:p-10">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">The RAYEXPESS talent pipeline</p>
          <ol className="mt-6 flex flex-col items-stretch justify-between gap-3 md:flex-row md:items-center">
            {["Employer Need", "RAYEXPESS Matching", "Qualified Student", "Work Experience", "Long-Term Hire"].map((s, i, arr) => (
              <li key={s} className="flex flex-1 items-center gap-3">
                <span className={"flex-1 rounded-2xl px-4 py-3.5 text-center font-display text-[13.5px] font-bold " + (i === 1 ? "bg-line text-white shadow-[3px_3px_0_0_#0C1022]" : i === arr.length - 1 ? "bg-ray text-ink shadow-[3px_3px_0_0_#0C1022]" : "bg-white ring-1 ring-ink/12")}>
                  {s}
                </span>
                {i < arr.length - 1 && <span className="text-ink/30 md:rotate-0" aria-hidden>{i === 1 ? "⚡" : "→"}</span>}
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}

import { ClipboardList, Compass, Handshake, Rocket } from "lucide-react";
import { Eyebrow, Reveal, ApplyButton } from "./ui";

const STEPS = [
  { n: "01", icon: ClipboardList, title: "Tell us about yourself", body: "Complete the RAYEXPESS application — education, skills, experience, availability and career interests." },
  { n: "02", icon: Compass, title: "We map your direction", body: "Our team identifies the positions and industries that align with your education and goals." },
  { n: "03", icon: Handshake, title: "Get matched", body: "We connect qualified students with employers and opportunities that fit their profile." },
  { n: "04", icon: Rocket, title: "Start building", body: "Gain experience, develop skills and grow your network — while continuing your studies." },
];

const FLOW = ["Student Profile", "Matching", "Employer", "Experience", "Career"];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 border-y-2 border-ink bg-cream/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow route="Route 02" station="How it works · 4 stops" />
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
            From application to <span className="font-serif font-normal italic">paycheck</span> in four moves.
          </h2>
        </Reveal>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="absolute left-0 right-0 top-10 hidden h-[3px] rounded bg-ink/10 lg:block" />
          <div aria-hidden className="absolute left-0 right-0 top-10 hidden h-[3px] lg:block">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 800 4">
              <line x1="0" y1="2" x2="800" y2="2" stroke="#2038E6" strokeWidth="3" className="ray-flow" />
            </svg>
          </div>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <article className="relative h-full rounded-[22px] bg-white p-6 pt-5 ring-1 ring-ink/10 transition-all hover:-translate-y-1 hover:ring-ink hover:shadow-[6px_6px_0_0_#0C1022]">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-ink font-display text-sm font-bold text-ray ring-4 ring-paper">
                    <s.icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-serif text-4xl italic text-ink/15">{s.n}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/60">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* progress-style visual */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-2 rounded-2xl bg-ink px-5 py-4 md:justify-between md:px-8" aria-label="Progress: Student Profile to Career">
            {FLOW.map((f, i) => (
              <span key={f} className="flex items-center gap-2">
                <span className={"flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[12px] font-bold " + (i === 4 ? "bg-ray text-ink" : "bg-white/10 text-white")}>
                  <span className={"size-1.5 rounded-full " + (i === 4 ? "bg-ink" : "bg-ray")} aria-hidden />
                  {f}
                </span>
                {i < FLOW.length - 1 && <span className="text-white/30" aria-hidden>→</span>}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mt-8 text-center">
          <ApplyButton variant="ray" className="px-8 py-4">Get Matched — Apply Free</ApplyButton>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45">Takes ~4 minutes · No experience needed</p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";
import { Crosshair, CalendarClock, FlaskConical, Users, SlidersHorizontal, Network } from "lucide-react";
import { Eyebrow, Reveal, ApplyButton } from "./ui";

const CARDS = [
  {
    icon: Crosshair, title: "Field-Matched Jobs",
    body: "Opportunities connected to your program and career interests — not random shifts. CS students ship code; marketing students run campaigns.",
    span: "md:col-span-7", dark: true,
    extra: (
      <div className="mt-5 flex flex-wrap gap-2">
        {["CS → Web Dev", "Business → Ops", "Health → Clinic Admin"].map((t) => (
          <span key={t} className="rounded-full bg-ray px-3 py-1.5 font-mono text-[11px] font-bold text-ink">{t}</span>
        ))}
      </div>
    ),
  },
  {
    icon: CalendarClock, title: "Flexible Student Work",
    body: "Part-time, full-time, contract, internship and flexible roles that fit around lectures, labs and exams.",
    span: "md:col-span-5", dark: false, extra: null,
  },
  {
    icon: FlaskConical, title: "Real Experience",
    body: "Build practical skills and strengthen your résumé while completing your education.",
    span: "md:col-span-4", dark: false, extra: null,
  },
  {
    icon: Users, title: "Career Connections",
    body: "Get introduced to employers actively looking for emerging talent.",
    span: "md:col-span-4", dark: false, extra: null,
  },
  {
    icon: SlidersHorizontal, title: "Personalized Matching",
    body: "We weigh your education, skills, availability and goals — then match accordingly.",
    span: "md:col-span-4", dark: false, extra: null,
  },
];

export default function ForStudents() {
  return (
    <section id="students" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <Eyebrow route="Route 01" station="For students" />
        <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:col-span-8 lg:text-[56px] lg:leading-[1.02]">
            Get experience <span className="font-serif font-normal italic">before</span> you graduate.
          </h2>
          <p className="max-w-md text-[15.5px] leading-relaxed text-ink/65 lg:col-span-4">
            Your degree is more than a credential. It&apos;s the beginning of your career. We connect what
            you study with where you work.
          </p>
        </div>
      </Reveal>

      {/* bento — deliberately uneven spans */}
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12">
        {CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06} className={c.span}>
            <article
              className={
                "group h-full rounded-[22px] p-7 transition-all duration-300 hover:-translate-y-1 " +
                (c.dark
                  ? "bg-ink text-white shadow-[6px_6px_0_0_#FFB800]"
                  : "bg-white ring-1 ring-ink/10 hover:shadow-[6px_6px_0_0_#0C1022] hover:ring-ink")
              }
            >
              <span className={"inline-grid size-11 place-items-center rounded-2xl " + (c.dark ? "bg-ray text-ink" : "bg-ink text-ray")}>
                <c.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-[22px] font-bold tracking-tight">{c.title}</h3>
              <p className={"mt-2 text-[15px] leading-relaxed " + (c.dark ? "text-white/70" : "text-ink/60")}>{c.body}</p>
              {c.extra}
            </article>
          </Reveal>
        ))}

        {/* wide CTA tile breaks the grid rhythm */}
        <Reveal delay={0.3} className="md:col-span-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-[22px] bg-ray-soft p-7 ring-1 ring-ray-deep/30 sm:flex-row sm:items-center md:px-10">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-ink text-ray">
                <Network className="size-6" aria-hidden />
              </span>
              <div>
                <p className="font-display text-xl font-bold tracking-tight">Build your network early</p>
                <p className="text-[14.5px] text-ink/60">Start professional relationships before graduation day.</p>
              </div>
            </div>
            <ApplyButton variant="ink">Start Your Student Application</ApplyButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

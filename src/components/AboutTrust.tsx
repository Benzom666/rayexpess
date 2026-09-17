import { ArrowRight, BookOpenCheck, PencilLine } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const STATS = [
  { v: "1,000+", l: "Students Connected" },
  { v: "100+", l: "Employer Partners" },
  { v: "50+", l: "Career Fields" },
  { v: "95%", l: "Student Satisfaction" },
];

export default function AboutTrust() {
  return (
    <>
      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 border-y-2 border-ink bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow route="Route 08" station="About RAYEXPESS" />
            <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
              Employment built <span className="font-serif font-normal italic">around students.</span>
            </h2>
            <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-ink/70">
              <p>
                RAYEXPESS exists to bridge the gap between education and employment. Too many students
                graduate with academic knowledge but limited practical experience — and enter the job
                market from behind.
              </p>
              <p>
                We connect education with employment earlier by understanding what students study, what
                they can do, when they&apos;re available, and where they want their careers to go.
              </p>
              <p>
                <strong className="text-ink">The goal isn&apos;t simply to place someone into a job.</strong>{" "}
                It&apos;s to create a path from education to experience to opportunity to career.
              </p>
            </div>
            <div className="mt-7 flex items-center gap-3 rounded-2xl bg-paper p-5 ring-1 ring-ink/10">
              <BookOpenCheck className="size-8 shrink-0 text-line" aria-hidden />
              <p className="font-display text-[15px] font-bold tracking-tight">
                Education <ArrowRight className="inline size-4 text-ray-deep" aria-hidden /> Experience{" "}
                <ArrowRight className="inline size-4 text-ray-deep" aria-hidden /> Opportunity{" "}
                <ArrowRight className="inline size-4 text-ray-deep" aria-hidden /> Career
              </p>
            </div>
          </Reveal>

          {/* TRUST */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-[24px] bg-ink p-8 text-white md:p-9">
                <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ray">
                  <PencilLine className="size-3.5" aria-hidden /> Content placeholder — update in CMS
                </p>
                <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/12">
                  {STATS.map((s) => (
                    <div key={s.l} className="bg-ink p-6">
                      <p className="font-display text-4xl font-bold tracking-tight text-ray">{s.v}</p>
                      <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/55">{s.l}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[12.5px] leading-relaxed text-white/45">
                  Figures shown are editable targets for launch — replace with verified company data when available.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

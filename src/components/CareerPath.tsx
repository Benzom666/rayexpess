import { GraduationCap, Briefcase, TrendingUp, Users, Award, PartyPopper } from "lucide-react";
import { Eyebrow, Reveal, ApplyButton } from "./ui";

const NODES = [
  { icon: GraduationCap, label: "Student", note: "Enrolled, learning, ambitious", ray: true },
  { icon: Briefcase, label: "First Relevant Job", note: "Field-aligned, flexible hours" },
  { icon: TrendingUp, label: "Industry Experience", note: "Real projects, real references" },
  { icon: Users, label: "Skills & Network", note: "Mentors, teammates, proof of work" },
  { icon: Award, label: "Internship / Advanced Role", note: "Bigger scope before you graduate" },
  { icon: PartyPopper, label: "Graduation → Career", note: "You start ahead, not from zero", ray: true },
];

export default function CareerPath() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow route="Route 07" station="The long game" />
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-[56px] lg:leading-[1.0]">
                Start <span className="font-serif font-normal italic">before</span> graduation.
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink/65">
                Most graduates start at zero. RAYEXPESS students arrive with experience, references and a
                network — because they started while still in school.
              </p>
              <ApplyButton variant="ray" className="mt-7">Find My Opportunity</ApplyButton>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ol className="relative ml-3 space-y-2 border-l-[3px] border-ink/10 pl-0">
            {NODES.map((n, i) => (
              <Reveal key={n.label} delay={i * 0.05}>
                <li className="relative flex items-start gap-5 py-4 pl-8">
                  <span
                    aria-hidden
                    className={"absolute -left-[21px] top-4 grid size-10 place-items-center rounded-full border-[3px] border-paper text-white " + (n.ray ? "bg-ray text-ink" : "bg-ink")}
                  >
                    <n.icon className="size-4" />
                  </span>
                  <div className={"flex-1 rounded-2xl p-5 transition-all hover:-translate-y-0.5 " + (i === NODES.length - 1 ? "bg-ink text-white shadow-[5px_5px_0_0_#FFB800]" : "bg-white ring-1 ring-ink/10 hover:ring-ink")}>
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-display text-lg font-bold tracking-tight md:text-xl">{n.label}</p>
                      <span className="font-mono text-[11px] text-current opacity-40">STEP {i + 1}</span>
                    </div>
                    <p className={"mt-1 text-[14px] " + (i === NODES.length - 1 ? "text-white/65" : "text-ink/55")}>{n.note}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

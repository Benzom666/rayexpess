import { Wallet, Flag, BriefcaseBusiness, MessagesSquare, Telescope, HandCoins } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const BENEFITS = [
  { icon: Wallet, title: "Work while you study", body: "Opportunities designed to fit around your class schedule — evenings, weekends, part-time blocks.", big: true },
  { icon: Flag, title: "Gain Canadian experience", body: "Develop workplace experience and strengthen your résumé with real employer references." },
  { icon: BriefcaseBusiness, title: "Work in your field", body: "Positions connected to what you're studying, so every shift compounds." },
  { icon: MessagesSquare, title: "Build professional confidence", body: "Communication, teamwork, technical and workplace skills — learned on the job." },
  { icon: Telescope, title: "Discover your career", body: "Explore industries and roles before graduation, while switching costs are low." },
  { icon: HandCoins, title: "Create opportunities", body: "Relationships with employers who may become part of your long-term journey.", big: true },
];

export default function Benefits() {
  return (
    <section className="border-y-2 border-ink bg-ink py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow route="Route 04" station="Why students choose us" light />
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
            Why students choose <span className="text-ray">RAYEXPESS</span>
          </h2>
        </Reveal>
        <div className="mt-10">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.04}>
              <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-white/12 py-5 transition-colors last:border-b hover:bg-white/[0.03] md:gap-8 md:px-4">
                <span className="font-mono text-[12px] text-white/35">0{i + 1}</span>
                <div className="flex items-center gap-4 md:gap-6">
                  <span className="hidden size-12 shrink-0 place-items-center rounded-2xl bg-ray text-ink transition-transform group-hover:rotate-6 sm:grid">
                    <b.icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className={"font-display font-bold tracking-tight " + (b.big ? "text-2xl md:text-[28px]" : "text-xl md:text-2xl")}>{b.title}</h3>
                    <p className="mt-1 max-w-2xl text-[14.5px] text-white/60">{b.body}</p>
                  </div>
                </div>
                <span className="hidden font-serif text-2xl italic text-ray/0 transition-all group-hover:text-ray md:block" aria-hidden>→</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

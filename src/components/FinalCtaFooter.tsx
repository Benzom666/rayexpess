import { Zap, Building2 } from "lucide-react";
import { Reveal } from "./ui";

export default function FinalCtaFooter() {
  return (
    <>
      {/* FINAL CTA */}
      <section className="px-4 pb-6 pt-4 md:px-8">
        <Reveal>
          <div className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-ray px-6 py-16 text-center text-ink md:py-24">
            <div aria-hidden className="pointer-events-none absolute -left-20 -top-20 hidden size-72 rounded-full bg-white/40 blur-[80px] sm:block" />
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-16 hidden size-80 rounded-full bg-ink/15 blur-[80px] sm:block" />
            <p className="relative font-mono text-[11px] uppercase tracking-[0.24em]">◆ Last stop — your career</p>
            <h2 className="relative mx-auto mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.0] tracking-[-0.025em] sm:text-6xl">
              Don&apos;t wait until graduation to <span className="font-serif font-normal italic">start your career.</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-[16px] font-medium text-ink/70">
              Turn what you&apos;re learning today into experience that shapes your tomorrow.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-display text-base font-bold text-white shadow-[5px_5px_0_0_rgba(12,16,34,0.3)] transition-all hover:-translate-y-0.5 hover:bg-line">
                <Zap className="size-4 text-ray" aria-hidden /> Apply as a Student
              </a>
              <a href="#employers" className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-transparent px-7 py-[14px] font-display text-[15px] font-bold transition-all hover:bg-ink hover:text-white">
                <Building2 className="size-4" aria-hidden /> Hire Student Talent
              </a>
            </div>
            <p className="relative mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/55">Study · Work · Build your career</p>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="mt-6 scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="flex items-center gap-2.5">
                <span className="grid size-9 place-items-center rounded-xl bg-ray text-ink"><Zap className="size-5" strokeWidth={2.5} aria-hidden /></span>
                <span className="font-display text-xl font-bold tracking-tight">RAYEXPESS</span>
              </p>
              <p className="mt-4 max-w-xs font-serif text-lg italic leading-snug text-white/70">
                “Connecting students with opportunities. Building careers earlier.”
              </p>
              <a href="#apply" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ray px-6 py-3 font-display text-sm font-bold text-ink transition-transform hover:-translate-y-0.5">
                Apply Now ↗
              </a>
              <p className="mt-5 font-mono text-[12px] text-white/45">hire@rayexpess.ca · Ontario, Canada</p>
            </div>
            {[
              { h: "Students", links: [["Find Opportunities", "#opportunities"], ["Apply Now", "#apply"], ["How It Works", "#how"], ["Student FAQ", "#faq"]] },
              { h: "Employers", links: [["Hire Student Talent", "#employers"], ["Employer Services", "#employers"], ["Request Talent", "mailto:hire@rayexpess.ca"], ["Contact Us", "#contact"]] },
              { h: "Company", links: [["About", "#about"], ["Contact", "#contact"], ["Careers", "#contact"], ["FAQ", "#faq"]] },
              { h: "Legal", links: [["Privacy Policy", "#"], ["Terms of Use", "#"], ["Accessibility", "#"]] },
            ].map((col) => (
              <nav key={col.h} aria-label={col.h} className="lg:col-span-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ray">{col.h}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map(([label, href]) => (
                    <li key={label}>
                      <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-[14px] text-white/60 transition-colors hover:text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/12 pt-6 sm:flex-row sm:items-center">
            <p className="font-mono text-[12px] text-white/40">© 2026 RAYEXPESS. All rights reserved.</p>
            <p className="font-mono text-[12px] text-white/40">Study. Work. Build your career. · Made in Canada 🍁</p>
          </div>
        </div>
      </footer>
    </>
  );
}

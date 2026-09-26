import { Zap } from "lucide-react";

export default function FinalCtaFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-ray text-ink"><Zap className="size-5" strokeWidth={2.5} aria-hidden /></span>
              <span className="font-display text-xl font-bold tracking-tight">RAYEXPESS</span>
            </p>
            <p className="mt-4 max-w-xs font-serif text-lg italic leading-snug text-white/70">
              “Study. Work. Build your career.”
            </p>
            <a href="#apply-form" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ray px-6 py-3 font-display text-sm font-bold text-ink transition-transform hover:-translate-y-0.5">
              Apply Now ↗
            </a>
            <p className="mt-5 font-mono text-[12px] text-white/45">hire@rayexpess.ca · Ontario, Canada</p>
          </div>
          <nav aria-label="Students" className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ray">Students</p>
            <ul className="mt-4 space-y-2.5">
              <li><a href="#apply-form" className="text-[14px] text-white/60 hover:text-white">Apply Now</a></li>
              <li><a href="#how" className="text-[14px] text-white/60 hover:text-white">How It Works</a></li>
              <li><a href="#faq" className="text-[14px] text-white/60 hover:text-white">FAQ</a></li>
            </ul>
          </nav>
          <nav aria-label="Contact" className="lg:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ray">Contact</p>
            <ul className="mt-4 space-y-2.5">
              <li><a href="mailto:hire@rayexpess.ca" className="text-[14px] text-white/60 hover:text-white">hire@rayexpess.ca</a></li>
              <li><a href="#contact" className="text-[14px] text-white/60 hover:text-white">Ontario, Canada</a></li>
            </ul>
          </nav>
          <nav aria-label="Legal" className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ray">Honest note</p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-white/55">
              Applying is free for students and never guarantees a job. We match based on
              programs, skills, availability and employer needs.
            </p>
          </nav>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/12 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[12px] text-white/40">© 2026 RAYEXPESS. All rights reserved.</p>
          <p className="font-mono text-[12px] text-white/40">Study. Work. Build your career. · Made in Canada 🍁</p>
        </div>
      </div>
    </footer>
  );
}

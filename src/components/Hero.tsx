"use client";
import { motion } from "framer-motion";
import { BadgeCheck, MapPin, Clock, Sparkles, ArrowRight, Building2 } from "lucide-react";
import { Eyebrow, ApplyButton } from "./ui";

const STOPS = ["Education", "Experience", "Career"];

export default function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden pb-10 pt-[110px] md:pt-[140px]">
      {/* ambient ray glow — single warm wash, no purple */}
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] size-[560px] rounded-full bg-ray/25 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute left-[-8%] top-64 size-[380px] rounded-full bg-line/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-6">
        {/* ---- left: thesis ---- */}
        <div className="lg:col-span-7 lg:pr-6">
          <Eyebrow route="Student career express" station="Canada · Est. for students" />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-display text-[44px] font-bold leading-[0.98] tracking-[-0.03em] sm:text-[64px] lg:text-[84px]"
          >
            Your education
            <br />
            should lead{" "}
            <span className="hand-underline font-serif font-normal italic tracking-normal">
              somewhere.
              <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden>
                <path d="M4 14 C 80 6, 200 6, 296 12" fill="none" stroke="#FFB800" strokeWidth="9" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-ink/70 md:text-lg"
          >
            <strong className="font-bold text-ink">RAYEXPESS connects students</strong> with jobs that match
            their field of study, skills, schedule, and career goals — so you can gain real experience{" "}
            <em className="font-serif italic">while you&apos;re still studying.</em>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <ApplyButton variant="ray" className="px-7 py-4 text-base">
              Find Student Opportunities
            </ApplyButton>
            <a
              href="#employers"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-[14px] font-display text-[15px] font-bold transition-all hover:bg-ink hover:text-white"
            >
              <Building2 className="size-4" aria-hidden />
              Hire Student Talent
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <div className="flex -space-x-2.5" aria-hidden>
              {["AK", "JM", "PS", "+9"].map((t, i) => (
                <span
                  key={t}
                  className={
                    "grid size-9 place-items-center rounded-full border-2 border-paper font-display text-[11px] font-bold " +
                    (i === 3 ? "bg-ink text-ray" : i === 0 ? "bg-line text-white" : i === 1 ? "bg-moss text-white" : "bg-white text-ink")
                  }
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/55">
              Student-focused employment · Field-matched · Flexible schedules
            </p>
          </motion.div>
        </div>

        {/* ---- right: ticket stack + ray line ---- */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto max-w-[420px]"
          >
            {/* route rail */}
            <div className="mb-4 flex items-center justify-between rounded-2xl bg-ink px-5 py-3.5 text-white">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ray">◆ Ray Line</span>
              <span className="font-mono text-[11px] text-white/60">EDU → EXP → CAREER</span>
            </div>

            <div className="grid grid-cols-[28px_1fr] gap-3">
              {/* spine */}
              <div className="relative flex flex-col items-center" aria-hidden>
                <div className="absolute bottom-4 top-4 w-[3px] rounded bg-ink/10" />
                <div className="absolute bottom-4 top-4 w-[3px]">
                  <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 4 300">
                    <line x1="2" y1="0" x2="2" y2="300" stroke="#FFB800" strokeWidth="3" className="ray-flow" />
                  </svg>
                </div>
                {STOPS.map((_, i) => (
                  <div key={i} className={`z-10 grid size-6 shrink-0 place-items-center rounded-full border-[3px] border-paper ${i === 2 ? "bg-moss" : i === 1 ? "bg-line" : "bg-ray"}`}
                    style={{ marginTop: i === 0 ? 4 : 96 }} />
                ))}
              </div>

              <div className="space-y-3">
                {STOPS.map((stop, i) => (
                  <div
                    key={stop}
                    className={
                      "rounded-2xl border p-4 " +
                      (i === 1
                        ? "ticket-notch border-ink bg-white shadow-[6px_6px_0_0_#0C1022]"
                        : "border-ink/10 bg-white/80")
                    }
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">Stop 0{i + 1}</p>
                    <p className="font-display text-lg font-bold tracking-tight">{stop}</p>
                    {i === 1 ? (
                      <div className="mt-3 border-t border-dashed border-ink/15 pt-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-display text-[15px] font-bold">Junior Web Developer</p>
                            <p className="mt-1 flex items-center gap-2 font-mono text-[11px] text-ink/55">
                              <MapPin className="size-3" /> London, ON · <Clock className="size-3" /> 15–20h/wk
                            </p>
                          </div>
                          <span className="rounded-full bg-moss-soft px-2.5 py-1 font-mono text-[11px] font-bold text-moss">96% match</span>
                        </div>
                        <a href="#apply"
                          className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-ink py-2.5 font-display text-sm font-bold text-white transition-colors hover:bg-line">
                          Get Matched <ArrowRight className="size-4" />
                        </a>
                      </div>
                    ) : (
                      <p className="mt-1 text-[13px] text-ink/55">
                        {i === 0 ? "Computer Science · Year 2 · Available 20h/week" : "Full-time offer · $62k · Toronto"}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* floating chips */}
            <div className="absolute -left-8 top-16 hidden -rotate-6 items-center gap-1.5 rounded-full bg-white px-3.5 py-2 shadow-lg ring-1 ring-ink/10 sm:flex">
              <BadgeCheck className="size-4 text-moss" /> <span className="font-display text-xs font-bold">Field-matched</span>
            </div>
            <div className="absolute -right-4 bottom-24 hidden rotate-3 items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-white shadow-lg sm:flex">
              <Sparkles className="size-4 text-ray" /> <span className="font-display text-xs font-bold">Study. Work. Build.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

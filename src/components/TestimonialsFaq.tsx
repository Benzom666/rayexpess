"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Eyebrow, Reveal, ApplyButton } from "./ui";
import { cn } from "@/lib/utils";

const FAQS = [
  { q: "Who can apply to RAYEXPESS?", a: "Students currently enrolled in college, university, trades, certificate, diploma, or other post-secondary programs — subject to the requirements of individual opportunities." },
  { q: "Do I need previous work experience?", a: "Not necessarily. Opportunities range from entry-level roles to positions requiring previous experience. We match based on what you bring today." },
  { q: "Can I work while studying?", a: "Yes. RAYEXPESS focuses on opportunities that can potentially work alongside academic schedules — part-time, flexible, evening and weekend-friendly roles." },
  { q: "Will I only receive jobs related to my program?", a: "We prioritize field-aligned opportunities, but matching also considers transferable skills, experience, availability and career interests." },
  { q: "Does RAYEXPESS guarantee a job?", a: "No. Application and matching do not guarantee employment. Placement depends on available opportunities, qualifications, employer requirements and selection processes." },
  { q: "How do I apply?", a: "Fill the student application at the top of this page — it takes about 4 minutes. No account, no cover letter.", link: true },
];

function FaqItem({ q, a, link }: { q: string; a: string; link?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("overflow-hidden rounded-2xl ring-1 transition-all", open ? "bg-ink text-white ring-ink" : "bg-white ring-ink/10 hover:ring-ink")}>
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-display text-[16px] font-bold tracking-tight">{q}</span>
        <span className={cn("grid size-8 shrink-0 place-items-center rounded-full", open ? "bg-ray text-ink" : "bg-paper text-ink ring-1 ring-ink/10")}>
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-[14.5px] leading-relaxed text-white/70">{a}</p>
          {link && (
            <a href="#apply-form" className="mt-3 inline-flex items-center gap-2 rounded-full bg-ray px-5 py-2.5 font-display text-sm font-bold text-ink">
              Go to Student Application ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function TestimonialsFaq() {
  return (
    <section id="faq" className="scroll-mt-24 border-t-2 border-ink/10 bg-cream/60 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow route="Questions" station="Straight answers" />
              <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">Asked by students, <span className="font-serif font-normal italic">answered straight.</span></h2>
              <p className="mt-4 text-[15px] text-ink/60">Still unsure? The fastest answer is a 4-minute application — a real human reviews it.</p>
              <ApplyButton variant="line" className="mt-6" href="#apply-form">Apply in ~4 minutes</ApplyButton>
            </Reveal>
          </div>
        </div>
        <div className="space-y-3 lg:col-span-7">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}><FaqItem {...f} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

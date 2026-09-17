"use client";
import { useState } from "react";
import { Quote, Plus, Minus } from "lucide-react";
import { Eyebrow, Reveal, ApplyButton } from "./ui";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  { tag: "Student · Sample", quote: "RAYEXPESS helped me find work that actually connected with what I was studying. I was able to gain experience while continuing school.", name: "Sample Student", detail: "Computer Science · London, ON", style: "bg-ray text-ink rotate-[-1deg]" },
  { tag: "Employer · Sample", quote: "We were looking for motivated students with the right technical background, and RAYEXPESS helped us connect with the right candidates.", name: "Sample Employer", detail: "Operations Lead · Toronto, ON", style: "bg-ink text-white rotate-[0.8deg]" },
  { tag: "Graduate · Sample", quote: "The experience I gained while studying gave me a much stronger starting point after graduation.", name: "Sample Graduate", detail: "Business grad · Kitchener, ON", style: "bg-white text-ink ring-1 ring-ink/12 rotate-[-0.6deg]" },
];

const FAQS = [
  { q: "Who can apply to RAYEXPESS?", a: "Students currently enrolled in college, university, trades, certificate, diploma, or other post-secondary programs — subject to the requirements of individual opportunities." },
  { q: "Do I need previous work experience?", a: "Not necessarily. Opportunities range from entry-level roles to positions requiring previous experience. We match based on what you bring today." },
  { q: "Can I work while studying?", a: "Yes. RAYEXPESS focuses on opportunities that can potentially work alongside academic schedules — part-time, flexible, evening and weekend-friendly roles." },
  { q: "Will I only receive jobs related to my program?", a: "We prioritize field-aligned opportunities, but matching also considers transferable skills, experience, availability and career interests." },
  { q: "Does RAYEXPESS guarantee a job?", a: "No. Application and matching do not guarantee employment. Placement depends on available opportunities, qualifications, employer requirements and selection processes." },
  { q: "How do I apply?", a: "Click any “Apply Now” or “Get Matched” button and complete the RAYEXPESS student application — it takes about 4 minutes.", link: true },
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
            <a href="#apply" className="mt-3 inline-flex items-center gap-2 rounded-full bg-ray px-5 py-2.5 font-display text-sm font-bold text-ink">
              Open Student Application ↗
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function TestimonialsFaq() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <Eyebrow route="Route 09" station="Stories · editable samples" />
          <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
            Early proof, <span className="font-serif font-normal italic">honestly labelled.</span>
          </h2>
          <p className="mt-3 max-w-xl text-[14.5px] text-ink/55">Placeholder testimonials — replace with verified student & employer stories after launch.</p>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className={"flex h-full flex-col rounded-[22px] p-7 shadow-[5px_5px_0_0_rgba(12,16,34,0.12)] transition-transform hover:rotate-0 hover:-translate-y-1 " + t.style}>
                <Quote className="size-7 opacity-40" aria-hidden />
                <blockquote className="mt-4 flex-1 font-display text-[17px] font-medium leading-snug tracking-tight">“{t.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-dashed border-current/20 pt-4 opacity-80">
                  <p className="font-display text-sm font-bold">{t.name}</p>
                  <p className="font-mono text-[11px]">{t.detail}</p>
                  <p className="mt-2 inline-block rounded-full bg-black/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em]">{t.tag}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-t-2 border-ink/10 bg-cream/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Eyebrow route="Route 10" station="Questions" />
                <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">Asked by students, <span className="font-serif font-normal italic">answered straight.</span></h2>
                <p className="mt-4 text-[15px] text-ink/60">Still unsure? The fastest answer is a 4-minute application — a real human reviews it.</p>
                <ApplyButton variant="line" className="mt-6">Ask by Applying</ApplyButton>
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
    </>
  );
}

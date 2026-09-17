"use client";
import { useState } from "react";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { FIELDS } from "@/lib/data";
import { Eyebrow, Reveal, ApplyButton } from "./ui";
import { cn } from "@/lib/utils";

export default function FieldMatching() {
  const [active, setActive] = useState(FIELDS[0].slug);
  const field = FIELDS.find((f) => f.slug === active)!;

  return (
    <section id="fields" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <Eyebrow route="Route 03" station="Field matching" />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-xl font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
            Your program. Your skills. <span className="font-serif font-normal italic">Your career.</span>
          </h2>
          <p className="max-w-md text-[15.5px] leading-relaxed text-ink/65">
            We match on field of study first — then skills, availability and goals. Pick a track to see
            the kinds of roles students land.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-12">
        {/* departure-board list */}
        <Reveal className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3" role="tablist" aria-label="Fields of study">
            {FIELDS.map((f) => {
              const isActive = f.slug === active;
              return (
                <button
                  key={f.slug}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(f.slug)}
                  className={cn(
                    "group rounded-2xl border-2 p-3.5 text-left transition-all duration-200",
                    isActive
                      ? "border-ink bg-ink text-white shadow-[4px_4px_0_0_#FFB800]"
                      : "border-ink/10 bg-white hover:border-ink hover:-translate-y-0.5"
                  )}
                >
                  <span className={cn("inline-grid size-9 place-items-center rounded-xl", isActive ? "bg-ray text-ink" : f.tint)}>
                    <f.icon className="size-[18px]" aria-hidden />
                  </span>
                  <span className="mt-2.5 block font-display text-[13.5px] font-bold leading-tight tracking-tight">{f.name}</span>
                  <span className={cn("mt-1 block font-mono text-[10px] tracking-[0.14em]", isActive ? "text-ray" : "text-ink/40")}>{f.code}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* ticket detail */}
        <Reveal delay={0.1} className="lg:col-span-5">
          <div key={field.slug} className="ticket-notch sticky top-24 rounded-[22px] bg-ink p-7 text-white shadow-[8px_8px_0_0_#FFB800]">
            <p className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
              <span className="text-ray">{field.code} — Now boarding</span>
              <GraduationCap className="size-4 text-white/50" aria-hidden />
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold tracking-tight">{field.name}</h3>
            <p className="mt-1.5 font-mono text-[12px] text-white/55">{field.programs}</p>
            <ul className="mt-5 space-y-2.5 border-t border-dashed border-white/20 pt-5">
              {field.roles.map((r) => (
                <li key={r} className="flex items-center justify-between rounded-xl bg-white/[0.07] px-4 py-3 font-display text-[14.5px] font-semibold">
                  {r}
                  <ArrowUpRight className="size-4 text-ray" aria-hidden />
                </li>
              ))}
            </ul>
            <ApplyButton variant="ray" className="mt-6 w-full justify-center">
              Explore Opportunities
            </ApplyButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

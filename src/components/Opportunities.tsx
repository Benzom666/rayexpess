"use client";
import { useMemo, useState } from "react";
import { Search, MapPin, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { OPPORTUNITIES } from "@/lib/data";
import { Eyebrow, Reveal, ApplyButton } from "./ui";
import { cn } from "@/lib/utils";

const FIELD_FILTER = ["All fields", "Technology & IT", "Marketing", "Accounting & Finance", "Business", "Healthcare"];
const TYPE_FILTER = ["Any type", "Part-Time", "Full-Time", "Flexible", "Contract", "Internship"];
const PLACE_FILTER = ["Anywhere", "On-site", "Hybrid", "Remote"];

export default function Opportunities() {
  const [q, setQ] = useState("");
  const [field, setField] = useState(FIELD_FILTER[0]);
  const [type, setType] = useState(TYPE_FILTER[0]);
  const [place, setPlace] = useState(PLACE_FILTER[0]);

  const results = useMemo(() => {
    return OPPORTUNITIES.filter((j) => {
      if (field !== "All fields" && j.field !== field) return false;
      if (type !== "Any type" && j.type !== type) return false;
      if (place !== "Anywhere" && j.workplace !== place) return false;
      if (q && !(j.title + j.location + j.field + j.tags.join(" ")).toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, field, type, place]);

  return (
    <section id="opportunities" className="scroll-mt-24 border-y-2 border-ink bg-cream/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow route="Route 06" station="Live board · sample listings" />
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
              Opportunities that <span className="font-serif font-normal italic">fit your program.</span>
            </h2>
            <ApplyButton variant="ink">Get Matched First</ApplyButton>
          </div>
        </Reveal>

        {/* filter bar */}
        <Reveal delay={0.08}>
          <div className="mt-8 rounded-[20px] bg-ink p-3.5 text-white md:p-4">
            <div className="flex flex-col gap-2.5 lg:flex-row">
              <label className="flex flex-1 items-center gap-2.5 rounded-2xl bg-white/[0.08] px-4 py-3 ring-1 ring-white/10 focus-within:ring-ray">
                <Search className="size-4 shrink-0 text-white/50" aria-hidden />
                <span className="sr-only">Search opportunities</span>
                <input
                  value={q} onChange={(e) => setQ(e.target.value)}
                  placeholder="Search role, skill, city…"
                  className="w-full bg-transparent text-[14.5px] font-medium placeholder:text-white/35 focus:outline-none"
                />
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { v: field, set: setField, opts: FIELD_FILTER, label: "Field" },
                  { v: type, set: setType, opts: TYPE_FILTER, label: "Type" },
                  { v: place, set: setPlace, opts: PLACE_FILTER, label: "Workplace" },
                ].map((f) => (
                  <label key={f.label} className="flex items-center gap-1.5 rounded-2xl bg-white/[0.08] px-3 py-3 ring-1 ring-white/10">
                    <span className="sr-only">{f.label}</span>
                    <SlidersHorizontal className="size-3.5 shrink-0 text-ray" aria-hidden />
                    <select value={f.v} onChange={(e) => f.set(e.target.value)} className="w-full bg-transparent text-[12.5px] font-bold focus:outline-none [&>option]:text-ink">
                      {f.opts.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/45" role="status">
          Showing {results.length} of {OPPORTUNITIES.length} sample roles · API-ready — connect /api/jobs later
        </p>

        {/* cards — ticket style, alternating offset on desktop */}
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((j, i) => (
            <Reveal key={j.id} delay={(i % 3) * 0.06} className={cn(i % 3 === 1 && "lg:translate-y-5")}>
              <article className="group flex h-full flex-col rounded-[20px] bg-white p-6 ring-1 ring-ink/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#0C1022] hover:ring-ink">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-ink px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-ray">{j.field}</span>
                  <span className="rounded-full bg-moss-soft px-2.5 py-1 font-mono text-[11px] font-bold text-moss">{j.matchScore}%</span>
                </div>
                <h3 className="mt-4 font-display text-[22px] font-bold leading-tight tracking-tight transition-colors group-hover:text-line">{j.title}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 font-mono text-[12px] text-ink/55">
                  <MapPin className="size-3.5" aria-hidden /> {j.location}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/60">{j.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {[j.type, j.workplace, j.level, ...(j.pay ? [j.pay] : [])].map((t) => (
                    <span key={t} className="rounded-full bg-paper px-2.5 py-1 font-mono text-[11px] font-medium text-ink/65 ring-1 ring-ink/10">{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2 border-t border-dashed border-ink/12 pt-4">
                  <ApplyButton variant="ink" className="flex-1 justify-center px-4 py-2.5 text-sm">Apply <ArrowUpRight className="size-3.5" /></ApplyButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {results.length === 0 && (
          <div className="mt-6 rounded-[20px] bg-white p-10 text-center ring-1 ring-ink/10">
            <p className="font-display text-xl font-bold">No sample roles match those filters.</p>
            <p className="mt-2 text-ink/60">Try clearing a filter — or apply and we&apos;ll match you directly.</p>
            <ApplyButton variant="ray" className="mt-5">Join RAYEXPESS</ApplyButton>
          </div>
        )}
      </div>
    </section>
  );
}

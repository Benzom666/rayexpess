const ITEMS = [
  "Study.", "Work.", "Build your career.",
  "Field-matched jobs", "Flexible schedules", "Canadian experience",
  "IT · Business · Healthcare · Engineering",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative z-10 -rotate-[0.6deg] border-y-2 border-ink bg-ray py-3.5" aria-hidden>
      <div className="flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap font-display text-[15px] font-bold uppercase tracking-wide text-ink">
              {t} <span className="text-ink/50">✦</span>
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
          {row.map((t, i) => (
            <span key={"b" + i} className="flex items-center gap-8 whitespace-nowrap font-display text-[15px] font-bold uppercase tracking-wide text-ink">
              {t} <span className="text-ink/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

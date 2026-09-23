"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

/* Mono route eyebrow — encodes real info (route + station), not decoration */
export function Eyebrow({ route, station, light = false }: { route: string; station: string; light?: boolean }) {
  return (
    <p className={cn("font-mono text-[11px] tracking-[0.22em] uppercase flex items-center gap-3", light ? "text-ray" : "text-line")}>
      <span className={cn("inline-block size-2 rounded-full", light ? "bg-ray" : "bg-line")} aria-hidden />
      {route} <span className={light ? "text-white/40" : "text-ink/30"}>/</span>{" "}
      <span className={light ? "text-white/70" : "text-ink/60"}>{station}</span>
    </p>
  );
}

export function Reveal({ children, delay = 0, className, y = 28 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  // Reduced-motion users see content immediately with no observer needed.
  const [inView, setInView] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.matchMedia !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (inView) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [inView]);

  return (
    <div
      ref={ref}
      className={cn("rv", inView && "in", className)}
      style={{ transitionDelay: `${delay}s`, ["--rv-y" as string]: `${y}px` }}
    >
      {children}
    </div>
  );
}

export function ApplyButton({
  children = "Apply Now",
  variant = "ray",
  className,
  href = "#apply",
}: {
  children?: React.ReactNode;
  variant?: "ray" | "ink" | "line" | "ghost" | "white";
  className?: string;
  href?: string;
}) {
  const isAnchor = href.startsWith("#");
  const styles: Record<string, string> = {
    ray: "bg-ray text-ink hover:bg-ink hover:text-ray shadow-[4px_4px_0_0_#0C1022]",
    ink: "bg-ink text-white hover:bg-line shadow-[4px_4px_0_0_#FFB800]",
    line: "bg-line text-white hover:bg-ink shadow-[4px_4px_0_0_#0C1022]",
    white: "bg-white text-ink hover:bg-ray shadow-[4px_4px_0_0_rgba(255,255,255,0.35)]",
    ghost: "border-2 border-ink/15 bg-white/60 text-ink hover:border-ink",
  };
  return (
    <a
      href={href}
      {...(!isAnchor ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-display text-[15px] font-bold tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
        styles[variant],
        className
      )}
    >
      {children}
      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
    </a>
  );
}

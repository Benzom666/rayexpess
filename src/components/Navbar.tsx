"use client";
import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "For Students", href: "#students" },
  { label: "For Employers", href: "#employers" },
  { label: "How It Works", href: "#how" },
  { label: "Opportunities", href: "#opportunities" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-paper/90 backdrop-blur-xl shadow-[0_1px_0_0_#0C102214]" : "bg-transparent"
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="RAYEXPESS home">
          <span className="grid size-9 place-items-center rounded-xl bg-ink text-ray">
            <Zap className="size-5" strokeWidth={2.5} aria-hidden />
          </span>
          <span className="font-display text-[19px] font-bold tracking-tight">
            RAY<span className="text-line">E</span>XPESS
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative font-display text-[13.5px] font-medium tracking-tight text-ink/70 transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-ray after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-display text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-line"
          >
            Apply Now
            <span className="grid size-5 place-items-center rounded-full bg-ray text-[11px] font-black text-ink">↗</span>
          </a>
        </div>

        <button
          className="grid size-10 place-items-center rounded-full border border-ink/10 bg-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 pb-6 pt-2 lg:hidden">
          <ul className="divide-y divide-ink/8">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3.5 font-display text-lg font-semibold tracking-tight">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-ray py-4 font-display font-bold"
          >
            Apply Now ↗
          </a>
        </div>
      )}
    </header>
  );
}

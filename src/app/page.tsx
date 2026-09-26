import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsFaq from "@/components/TestimonialsFaq";
import FinalCtaFooter from "@/components/FinalCtaFooter";

// Form-first single page: Hero contains the application form above the fold.
// Only trust + how-it-works + FAQ remain below — everything else was cut
// to keep the path to "apply" instant.

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "RAYEXPESS",
    slogan: "Study. Work. Build Your Career.",
    areaServed: "Canada",
    description:
      "RAYEXPESS connects students with jobs matched to their field of study, skills, schedule and career goals.",
    url: "https://rayexpess.ca",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#apply-form" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-white">
        Skip to application form
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <HowItWorks />
        <TestimonialsFaq />
      </main>
      <FinalCtaFooter />
    </>
  );
}

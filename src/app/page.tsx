import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ForStudents from "@/components/ForStudents";
import HowItWorks from "@/components/HowItWorks";

// Below-fold sections load in separate chunks so first paint stays fast
// (per Next.js lazy-loading guide). SSR stays on — only the JS splits.
const FieldMatching = dynamic(() => import("@/components/FieldMatching"));
const Benefits = dynamic(() => import("@/components/Benefits"));
const Employers = dynamic(() => import("@/components/Employers"));
const Opportunities = dynamic(() => import("@/components/Opportunities"));
const CareerPath = dynamic(() => import("@/components/CareerPath"));
const AboutTrust = dynamic(() => import("@/components/AboutTrust"));
const TestimonialsFaq = dynamic(() => import("@/components/TestimonialsFaq"));
const ApplyForm = dynamic(() => import("@/components/ApplyForm"));
const FinalCtaFooter = dynamic(() => import("@/components/FinalCtaFooter"));

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
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-white">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <ForStudents />
        <HowItWorks />
        <FieldMatching />
        <Benefits />
        <Employers />
        <Opportunities />
        <CareerPath />
        <AboutTrust />
        <TestimonialsFaq />
        <ApplyForm />
      </main>
      <FinalCtaFooter />
    </>
  );
}

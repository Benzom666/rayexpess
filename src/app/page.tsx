import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ForStudents from "@/components/ForStudents";
import HowItWorks from "@/components/HowItWorks";
import FieldMatching from "@/components/FieldMatching";
import Benefits from "@/components/Benefits";
import Employers from "@/components/Employers";
import Opportunities from "@/components/Opportunities";
import CareerPath from "@/components/CareerPath";
import AboutTrust from "@/components/AboutTrust";
import TestimonialsFaq from "@/components/TestimonialsFaq";
import ApplyForm from "@/components/ApplyForm";
import FinalCtaFooter from "@/components/FinalCtaFooter";

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

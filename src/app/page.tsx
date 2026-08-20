import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const AudienceSplit  = dynamic(() => import("@/components/sections/AudienceSplit"));
const HowItWorks     = dynamic(() => import("@/components/sections/HowItWorks"));
const Stats          = dynamic(() => import("@/components/sections/Stats"));
const Services       = dynamic(() => import("@/components/sections/Services"));
const Process        = dynamic(() => import("@/components/sections/Process"));
const Benefits       = dynamic(() => import("@/components/sections/Benefits"));
const HomePricing    = dynamic(() => import("@/components/sections/HomePricing"));
const Press          = dynamic(() => import("@/components/sections/Press"));
const FAQ            = dynamic(() => import("@/components/sections/FAQ"));
const FinalCTA       = dynamic(() => import("@/components/sections/FinalCTA"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceSplit />
      <HowItWorks />
      <Stats />
      <Services />
      <Process />
      <Benefits />
      <HomePricing />
      <Press />
      <FAQ />
      <FinalCTA />
    </>
  );
}

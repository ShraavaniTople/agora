import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";

const IntroStatement = dynamic(() => import("@/components/sections/IntroStatement"));
const AudienceSplit  = dynamic(() => import("@/components/sections/AudienceSplit"));
const HowItWorks     = dynamic(() => import("@/components/sections/HowItWorks"));
const Stats          = dynamic(() => import("@/components/sections/Stats"));
const Services       = dynamic(() => import("@/components/sections/Services"));
const Benefits       = dynamic(() => import("@/components/sections/Benefits"));
const Press          = dynamic(() => import("@/components/sections/Press"));
const FAQ            = dynamic(() => import("@/components/sections/FAQ"));
const FinalCTA       = dynamic(() => import("@/components/sections/FinalCTA"));

export default function HomePage() {
  return (
    <>
      <Hero />
      <div style={{ background: "#f8f7f4", position: "relative" }}>
        <IntroStatement />
        <TrustMarquee />
        <AudienceSplit />
        <HowItWorks />
        <Stats />
        <Services />
        <Benefits />
        <Press />
        <FAQ />
        <FinalCTA />
      </div>
    </>
  );
}

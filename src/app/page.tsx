import Hero from "@/components/sections/Hero";
import AudienceSplit from "@/components/sections/AudienceSplit";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Integrations from "@/components/sections/Integrations";
import Process from "@/components/sections/Process";
import Benefits from "@/components/sections/Benefits";
import HomePricing from "@/components/sections/HomePricing";
import Press from "@/components/sections/Press";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AudienceSplit />
      <Stats />
      <Services />
      <Integrations />
      <Process />
      <Benefits />
      <HomePricing />
      <Press />
      <FAQ />
      <FinalCTA />
    </>
  );
}

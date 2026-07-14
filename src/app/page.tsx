import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Integrations from "@/components/sections/Integrations";
import Process from "@/components/sections/Process";
import Benefits from "@/components/sections/Benefits";
import FAQ from "@/components/sections/FAQ";
import Press from "@/components/sections/Press";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Integrations />
      <Process />
      <Benefits />
      <Press />
      <FAQ />
      <FinalCTA />
    </>
  );
}

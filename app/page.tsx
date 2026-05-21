import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import TechCapabilities from "@/components/TechCapabilities";
import { StrategicGrowthPartner } from "@/components/StrategicGrowthPartner";
import { Services, Engagements, CTASection, Footer } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Dashboard />
        <TechCapabilities />
        <StrategicGrowthPartner />
        <Services />
        <Engagements />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

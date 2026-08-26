import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ApproachSection from "@/components/ApproachSection";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection limit={6} />
      <IndustriesSection />
      <ApproachSection />
      <CtaBand />
    </>
  );
}

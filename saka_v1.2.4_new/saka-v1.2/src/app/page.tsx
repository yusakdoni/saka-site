import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection limit={4} />
      <IndustriesSection limit={3} />
      <Testimonials />
      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tujuh pilar layanan SAKA Solusindo: IT & Data Consulting, Digital Transformation, Business Intelligence, Performance Management, Process Improvement, Supply & Procurement, Data & Automation.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="border-b border-black/5 bg-white pt-16">
        <div className="container-page pb-14">
          <p className="eyebrow-lg">SERVICES</p>
          <h1 className="display-title mt-4 max-w-3xl text-4xl sm:text-6xl">
            Layanan terintegrasi dari strategi hingga eksekusi
          </h1>
        </div>
      </div>
      <ServicesSection />
      <CtaBand />
    </>
  );
}

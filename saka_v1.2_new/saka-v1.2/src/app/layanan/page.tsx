import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Layanan",
  description:
    "Tujuh pilar layanan SAKA Solusindo: IT & Data Consulting, Digital Transformation, Business Intelligence, Performance Management, Process Improvement, Supply & Procurement, Data & Automation.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="border-b border-black/5 bg-saka-bg pt-12">
        <div className="container-page pb-10">
          <p className="eyebrow">SERVICES</p>
          <h1 className="mt-3 max-w-2xl font-head text-3xl font-bold text-saka-navy sm:text-4xl">
            Layanan yang terintegrasi dari strategi hingga eksekusi
          </h1>
        </div>
      </div>
      <ServicesSection />
      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import IndustriesSection from "@/components/IndustriesSection";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Industri",
  description:
    "SAKA Solusindo memahami dinamika industri Aviation & Aerospace, Construction & Infrastructure, Healthcare & Medical Supply, Chemicals & Industrial Trading, dan Technology & Digital Services.",
};

export default function IndustriesPage() {
  return (
    <>
      <div className="border-b border-black/5 bg-white pt-12">
        <div className="container-page pb-10">
          <p className="eyebrow">INDUSTRIES</p>
          <h1 className="mt-3 max-w-2xl font-head text-3xl font-bold text-saka-navy sm:text-4xl">
            Sektor industri yang kami pahami
          </h1>
        </div>
      </div>
      <IndustriesSection />
      <CtaBand />
    </>
  );
}

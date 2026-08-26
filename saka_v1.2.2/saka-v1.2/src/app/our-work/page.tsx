import type { Metadata } from "next";
import WorkGrid from "@/components/WorkGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Area kerja SAKA Solusindo di Aviation & Aerospace, Construction & Infrastructure, Healthcare & Medical Supply, Chemicals & Industrial Trading, dan Technology & Digital Services.",
};

export default function OurWorkPage() {
  return (
    <>
      <div className="border-b border-black/5 bg-white pt-16">
        <div className="container-page pb-14">
          <p className="eyebrow-lg">OUR WORK</p>
          <h1 className="display-title mt-4 max-w-3xl text-4xl sm:text-6xl">
            Di mana kami paling sering membantu
          </h1>
          <p className="mt-6 max-w-xl text-saka-gray">
            Setiap industri punya dinamika berbeda. Berikut area kerja utama kami dan pendekatan yang biasa kami pakai.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="container-page">
          <WorkGrid />
        </div>
      </div>
      <CtaBand />
    </>
  );
}

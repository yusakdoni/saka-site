import type { Metadata } from "next";
import OurCompanyClient from "./OurCompanyClient";

export const metadata: Metadata = {
  title: "Our Company",
  description:
    "SAKA Solusindo adalah firma konsultasi independen untuk strategi bisnis & operasional di Indonesia, bekerja embedded bersama tim klien dengan pendekatan berbasis data.",
};

export default function OurCompanyPage() {
  return <OurCompanyClient />;
}

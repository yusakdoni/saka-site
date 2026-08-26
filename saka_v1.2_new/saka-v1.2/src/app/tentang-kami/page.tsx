import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "SAKA Solusindo adalah firma konsultasi independen untuk strategi bisnis & operasional di Indonesia, bekerja embedded bersama tim klien dengan pendekatan berbasis data.",
};

export default function AboutPage() {
  return <AboutClient />;
}

import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Hubungi SAKA Solusindo untuk mendiskusikan kebutuhan project Anda. Tim kami biasanya merespons dalam 1-2 hari kerja.",
};

export default function WorkWithUsPage() {
  return <ContactClient />;
}

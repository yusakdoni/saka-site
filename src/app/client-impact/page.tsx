import type { Metadata } from "next";
import ClientImpactClient from "./ClientImpactClient";

export const metadata: Metadata = {
  title: "Client Impact",
  description:
    "Kerangka kerja SAKA Solusindo untuk mendefinisikan dan mengukur dampak pada setiap engagement — berbasis bukti, dapat divalidasi bersama tim klien.",
};

export default function ClientImpactPage() {
  return <ClientImpactClient />;
}

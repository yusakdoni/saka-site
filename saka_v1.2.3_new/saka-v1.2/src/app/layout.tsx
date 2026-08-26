import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://saka-solusindo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SAKA Solusindo — Mitra Strategi Bisnis & Operasional",
    template: "%s | SAKA Solusindo",
  },
  description:
    "SAKA Solusindo membantu perusahaan di Indonesia menutup kesenjangan antara strategi dan eksekusi — diagnostik, desain, pilot, hingga scale-up yang berbasis data.",
  keywords: [
    "SAKA Solusindo",
    "konsultan strategi bisnis",
    "operational excellence",
    "business consulting Indonesia",
    "management consulting",
  ],
  icons: {
    icon: "/brand/icon-blue.png",
    apple: "/brand/icon-blue.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "SAKA Solusindo",
    title: "SAKA Solusindo — Mitra Strategi Bisnis & Operasional",
    description:
      "Firma konsultasi independen yang membantu perusahaan di Indonesia menutup kesenjangan antara strategi dan eksekusi.",
    images: [{ url: "/brand/social-avatar.png", width: 1080, height: 1080 }],
  },
  twitter: {
    card: "summary",
    title: "SAKA Solusindo",
    description: "Mitra strategi bisnis dan operasional untuk perusahaan di Indonesia.",
    images: ["/brand/social-avatar.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Jasa Website, ERP & Otomatisasi Bisnis | SAKA", template: `%s | ${site.shortName}` },
  description: site.description,
  keywords: ["jasa pembuatan website perusahaan", "jasa pembuatan ERP", "jasa dashboard perusahaan", "software custom", "jasa automation bisnis", "konsultan IT Tangerang"],
  alternates: { canonical: "/" },
  openGraph: { title: "SAKA — Website, ERP, Dashboard & Otomatisasi Bisnis", description: site.description, url: site.url, siteName: site.name, locale: "id_ID", type: "website" },
  twitter: { card: "summary_large_image", title: "SAKA — Solusi IT untuk Bisnis", description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};

const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.contact.email, telephone: site.contact.whatsapp, address: { "@type": "PostalAddress", addressLocality: "Tangerang", addressCountry: "ID" }, description: site.description };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="id" className={inter.variable}><body className="flex min-h-screen flex-col font-sans"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}/><Header/><main className="flex-1">{children}</main><Footer/></body></html>;
}

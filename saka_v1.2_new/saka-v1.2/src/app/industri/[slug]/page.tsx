import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/content/industries";
import IndustryDetailClient from "./IndustryDetailClient";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) return {};
  return {
    title: industry.name.id,
    description: industry.tagline.id,
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) return notFound();
  return <IndustryDetailClient industry={industry} />;
}

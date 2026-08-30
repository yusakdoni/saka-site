import type { Metadata } from "next";
import { articles } from "@/content/insights";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Insights",
  description: "Artikel seputar ERP, business intelligence, AI & automation, dan transformasi digital.",
};

export default function InsightsPage() {
  return (
    <div className="section-y">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Insights</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Perspektif Praktis Seputar Teknologi Bisnis
          </h1>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, getArticleBySlug } from "@/content/insights";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const date = new Date(article.publishedAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="section-y">
      <div className="container-page max-w-3xl">
        <Link href="/insights" className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          <ArrowLeft size={16} />
          Kembali ke Insights
        </Link>
        <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {article.category}
        </span>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">{article.title}</h1>
        <p className="mb-8 text-sm text-muted">{date}</p>
        <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-xl2 border border-line bg-soft">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          {article.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-ink/90">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

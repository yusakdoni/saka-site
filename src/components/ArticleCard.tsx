import Link from "next/link";
import type { Article } from "@/content/insights";

export default function ArticleCard({ article }: { article: Article }) {
  const date = new Date(article.publishedAt).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group flex flex-col rounded-xl2 border border-line bg-white p-6 transition-all hover:border-accent/40 hover:shadow-[0_8px_30px_-12px_rgba(26,86,219,0.25)]"
    >
      <span className="mb-3 w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
        {article.category}
      </span>
      <h3 className="mb-2 text-lg font-semibold leading-snug text-ink group-hover:text-accent">
        {article.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
      <span className="text-xs text-muted">{date}</span>
    </Link>
  );
}

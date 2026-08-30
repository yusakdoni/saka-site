import Image from "next/image";
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
      className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-white transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_14px_36px_-18px_rgba(26,86,219,0.28)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-soft">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
          {article.category}
        </span>
        <h3 className="mb-2 text-lg font-semibold leading-snug text-ink group-hover:text-accent">
          {article.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
        <span className="text-xs text-muted">{date}</span>
      </div>
    </Link>
  );
}

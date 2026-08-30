import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services";
import ServiceIcon from "./ServiceIcon";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-xl2 border border-line bg-white p-7 transition-all hover:border-accent/40 hover:shadow-[0_8px_30px_-12px_rgba(26,86,219,0.25)]"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <ServiceIcon icon={service.icon} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
        Pelajari lebih lanjut
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

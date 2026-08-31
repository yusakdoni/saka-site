"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Maximize2, X } from "lucide-react";
import type { PortfolioItem } from "@/content/portfolio";
import SakaSitePreview from "./SakaSitePreview";
import GcnSitePreview from "./GcnSitePreview";
import GcnErpPreview from "./GcnErpPreview";
import DbiErpPreview from "./DbiErpPreview";

type DeviceKind = "desktop" | "tablet" | "mobile";
type GalleryItem = { label: string; node: ReactNode; kind: DeviceKind };

function items(item: PortfolioItem): GalleryItem[] {
  if (item.slug === "gcn-corporate-website") return [
    { label: "Homepage / Hero", node: <GcnSitePreview screen="home" />, kind: "desktop" },
    { label: "Services", node: <GcnSitePreview screen="services" />, kind: "desktop" },
    { label: "RFQ Experience", node: <GcnSitePreview screen="rfq" />, kind: "desktop" },
    { label: "Tablet Responsive", node: <GcnSitePreview screen="tablet" />, kind: "tablet" },
    { label: "Responsive Mobile", node: <GcnSitePreview screen="mobile" />, kind: "mobile" },
  ];
  if (item.slug === "gcn-management-system-erp") return [
    { label: "Data Intelligence", node: <GcnErpPreview screen="intelligence" />, kind: "desktop" },
    { label: "Module Launcher", node: <GcnErpPreview screen="modules" />, kind: "desktop" },
    { label: "Operations & Projects", node: <GcnErpPreview screen="operations" />, kind: "desktop" },
    { label: "Finance & Accounting", node: <GcnErpPreview screen="finance" />, kind: "desktop" },
  ];
  if (item.slug === "dbi-erp-mis") return [
    { label: "Executive Business Command Center", node: <DbiErpPreview screen="intelligence" />, kind: "desktop" },
    { label: "Factory / Production", node: <DbiErpPreview screen="production" />, kind: "desktop" },
    { label: "Inventory & Supply Chain", node: <DbiErpPreview screen="inventory" />, kind: "desktop" },
    { label: "Quality Control", node: <DbiErpPreview screen="quality" />, kind: "desktop" },
  ];
  return [
    { label: "Homepage", node: <SakaSitePreview screen="home" />, kind: "desktop" },
    { label: "Services", node: <SakaSitePreview screen="services" />, kind: "desktop" },
    { label: "Lead / Contact Experience", node: <SakaSitePreview screen="contact" />, kind: "desktop" },
    { label: "Tablet Responsive", node: <SakaSitePreview screen="tablet" />, kind: "tablet" },
    { label: "Responsive Mobile", node: <SakaSitePreview screen="mobile" />, kind: "mobile" },
  ];
}

function DeviceBadge({ kind }: { kind: DeviceKind }) {
  return <span className="rounded-full border border-line bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-muted shadow-sm">{kind}</span>;
}

function PreviewViewport({ node, isErp, primary }: { node: ReactNode; isErp: boolean; primary?: boolean }) {
  const zoom = isErp ? (primary ? "max-sm:scale-[1.16]" : "max-sm:scale-[1.08]") : "";
  return <div className="relative h-full w-full overflow-hidden bg-soft">
    <div className={`h-full w-full origin-top-left transition-transform ${zoom}`}>{node}</div>
  </div>;
}

function GalleryCard({
  item,
  index,
  total,
  isErp,
  primary = false,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  total: number;
  isErp: boolean;
  primary?: boolean;
  onOpen: () => void;
}) {
  return <figure className={`overflow-hidden rounded-xl2 border border-line bg-white shadow-[0_16px_40px_-28px_rgba(7,21,46,.35)] ${primary ? "ring-1 ring-accent/10" : ""}`}>
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Buka ${item.label} dalam fullscreen preview`}
      className="group relative block w-full cursor-zoom-in text-left"
    >
      <div className={`overflow-hidden ${primary ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[16/10]"}`}>
        <PreviewViewport node={item.node} isErp={isErp} primary={primary} />
      </div>
      <span className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full border border-white/50 bg-white/90 text-ink opacity-100 shadow-sm backdrop-blur transition sm:opacity-0 sm:group-hover:opacity-100">
        <Maximize2 size={17} aria-hidden="true" />
      </span>
    </button>
    <figcaption className="flex min-h-14 items-center justify-between gap-3 border-t border-line px-4 py-3">
      <span className="text-sm font-semibold text-ink">{item.label}</span>
      <div className="flex shrink-0 items-center gap-2">
        <span className="text-[10px] font-medium text-muted">{index + 1} / {total}</span>
        <DeviceBadge kind={item.kind} />
      </div>
    </figcaption>
  </figure>;
}

export default function ProjectInterfaceGallery({ item }: { item: PortfolioItem }) {
  const gallery = items(item);
  const [active, setActive] = useState<number | null>(null);
  const isErp = item.slug === "gcn-management-system-erp" || item.slug === "dbi-erp-mis";
  const primary = gallery[0];
  const secondary = gallery.slice(1);

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => current === null ? current : (current + 1) % gallery.length);
      if (event.key === "ArrowLeft") setActive((current) => current === null ? current : (current - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, gallery.length]);

  return <>
    <div className="space-y-5 sm:space-y-6">
      <GalleryCard item={primary} index={0} total={gallery.length} isErp={isErp} primary onOpen={() => setActive(0)} />

      <div
        className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:snap-none md:grid-cols-1 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-2 xl:grid-cols-3"
        aria-label="Secondary project interfaces"
      >
        {secondary.map((entry, secondaryIndex) => {
          const index = secondaryIndex + 1;
          return <div key={entry.label} className="w-[88%] shrink-0 snap-center sm:w-[72%] md:w-auto md:shrink">
            <GalleryCard item={entry} index={index} total={gallery.length} isErp={isErp} onOpen={() => setActive(index)} />
          </div>;
        })}
      </div>

      <div className="flex items-center justify-between gap-3 text-xs text-muted md:hidden">
        <span>Swipe untuk melihat interface lainnya</span>
        <span className="shrink-0">Tap untuk fullscreen</span>
      </div>
    </div>

    {active !== null && <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#07152b]/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${gallery[active].label} fullscreen preview`}
      onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null); }}
    >
      <div className="flex min-h-16 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-white sm:px-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{gallery[active].label}</p>
          <p className="text-xs text-white/60">{active + 1} / {gallery.length} · gunakan swipe/scroll atau arrow key untuk inspeksi</p>
        </div>
        <button
          type="button"
          onClick={() => setActive(null)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Tutup fullscreen preview"
        >
          <X size={22} />
        </button>
      </div>
      <div className="flex-1 overflow-auto p-3 sm:p-6">
        <div className="mx-auto flex min-h-full min-w-[900px] items-center justify-center md:min-w-0">
          <div className="aspect-[16/10] w-[92vw] max-w-[1500px] overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl md:w-full">
            <PreviewViewport node={gallery[active].node} isErp={false} />
          </div>
        </div>
      </div>
    </div>}
  </>;
}

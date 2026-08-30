import type { ReactNode } from "react";
import type { PortfolioItem } from "@/content/portfolio";
import SakaSitePreview from "./SakaSitePreview";
import GcnSitePreview from "./GcnSitePreview";
import GcnErpPreview from "./GcnErpPreview";
import DbiErpPreview from "./DbiErpPreview";

type GalleryItem={label:string;node:ReactNode};

function items(item:PortfolioItem):GalleryItem[]{
 if(item.slug==="gcn-corporate-website") return [
  {label:"Homepage / Hero",node:<GcnSitePreview screen="home"/>},
  {label:"Services",node:<GcnSitePreview screen="services"/>},
  {label:"RFQ Experience",node:<GcnSitePreview screen="rfq"/>},
  {label:"Responsive Mobile",node:<GcnSitePreview screen="mobile"/>},
 ];
 if(item.slug==="gcn-management-system-erp") return [
  {label:"Data Intelligence",node:<GcnErpPreview screen="intelligence"/>},
  {label:"Module Launcher",node:<GcnErpPreview screen="modules"/>},
  {label:"Operations & Projects",node:<GcnErpPreview screen="operations"/>},
  {label:"Finance & Accounting",node:<GcnErpPreview screen="finance"/>},
 ];
 if(item.slug==="dbi-erp-mis") return [
  {label:"Executive Business Command Center",node:<DbiErpPreview screen="intelligence"/>},
  {label:"Factory / Production",node:<DbiErpPreview screen="production"/>},
  {label:"Inventory & Supply Chain",node:<DbiErpPreview screen="inventory"/>},
  {label:"Quality Control",node:<DbiErpPreview screen="quality"/>},
 ];
 return [
  {label:"Homepage",node:<SakaSitePreview screen="home"/>},
  {label:"Services",node:<SakaSitePreview screen="services"/>},
  {label:"Lead / Contact Experience",node:<SakaSitePreview screen="contact"/>},
  {label:"Responsive Mobile",node:<SakaSitePreview screen="mobile"/>},
 ];
}

export default function ProjectInterfaceGallery({item}:{item:PortfolioItem}){
 const gallery=items(item);
 return <div className="grid gap-6 md:grid-cols-2">
  {gallery.map((g)=><figure key={g.label} className="overflow-hidden rounded-xl2 border border-line bg-white shadow-[0_16px_40px_-28px_rgba(7,21,46,.35)]">
    <div className="aspect-[16/10] overflow-hidden bg-soft">{g.node}</div>
    <figcaption className="border-t border-line px-4 py-3 text-sm font-semibold text-ink">{g.label}</figcaption>
  </figure>)}
 </div>
}

import type { PortfolioItem } from "@/content/portfolio";
import SakaSitePreview from "./SakaSitePreview";
import GcnSitePreview from "./GcnSitePreview";
import GcnErpPreview from "./GcnErpPreview";
import DbiErpPreview from "./DbiErpPreview";

export default function ProjectPreview({item}:{item:PortfolioItem}){
  if(item.slug==="gcn-corporate-website") return <GcnSitePreview screen="home"/>;
  if(item.slug==="gcn-management-system-erp") return <GcnErpPreview screen="intelligence"/>;
  if(item.slug==="dbi-erp-mis") return <DbiErpPreview screen="intelligence"/>;
  return <SakaSitePreview screen="home"/>;
}

import type { Metadata } from "next";
import { MessageCircle, Layers, Globe, FileText, ClipboardList, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata: Metadata = { title: "SAKA Links", description: "Kontak dan solusi PT SAKA Ananta Solusindo", alternates: { canonical: "/links" } };
const links = [
 {label:"Chat WhatsApp",href:"https://wa.me/62811134377",Icon:MessageCircle},
 {label:"Explore Our Solutions",href:"/services",Icon:Layers},
 {label:"Official Website",href:"/",Icon:Globe},
 {label:"Product & Service Offering",href:"/services",Icon:FileText},
 {label:"Request a Quotation",href:"/contact",Icon:ClipboardList}
];
export default function LinksPage(){
 return <section className="bg-slate-100 px-4 py-8 sm:py-12"><div className="mx-auto max-w-lg rounded-3xl bg-[#0d2c56] p-6 text-white shadow-xl sm:p-9">
 <div className="mb-6 text-center"><div className="mx-auto mb-4 flex w-fit justify-center rounded-xl bg-white px-5 py-3"><Logo className="h-14 w-auto object-contain"/></div><h1 className="text-xl font-semibold">PT SAKA Ananta Solusindo</h1><p className="mt-2 text-sm text-blue-100">Business Technology Solutions Partner</p><p className="mt-5 text-base text-blue-100">Technology Solutions for Better Business.</p></div>
 <nav aria-label="SAKA quick links" className="space-y-3">{links.map(({label,href,Icon},i)=><a key={label} href={href} className={`flex min-h-16 items-center gap-3 rounded-2xl border px-4 py-4 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 ${i===0?"border-yellow-300 bg-[#FFCC33] text-[#0d2c56] hover:bg-yellow-200":"border-blue-300/40 bg-[#173e70] text-white hover:bg-[#245185]"}`}><Icon size={23} aria-hidden="true"/><span className="flex-1">{label}</span><ArrowUpRight size={18} aria-hidden="true"/></a>)}</nav>
 <div className="mt-7 flex justify-center gap-7"><a href="https://www.instagram.com/sakasolusindo/" aria-label="Instagram"><Instagram/></a><a href="https://www.linkedin.com/company/saka-companies/" aria-label="LinkedIn"><Linkedin/></a><a href="mailto:contact@sakasolution.com" aria-label="Email"><Mail/></a></div><p className="mt-6 text-center text-xs text-blue-100">© {new Date().getFullYear()} PT SAKA Ananta Solusindo</p></div></section>;
}

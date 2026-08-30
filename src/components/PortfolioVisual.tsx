import type { PortfolioItem } from "@/content/portfolio";

function BrowserChrome() {
  return <div className="flex h-8 items-center gap-2 border-b border-slate-200 bg-white px-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-400"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/><div className="ml-2 h-4 flex-1 rounded-full bg-slate-100"/></div>;
}

function Kpi({label,value,tone="text-blue-600"}:{label:string;value:string;tone?:string}){
  return <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm"><p className="text-[8px] uppercase tracking-wide text-slate-400">{label}</p><p className={`mt-1 text-sm font-bold ${tone}`}>{value}</p></div>;
}

function Chart({tone="bg-blue-600"}:{tone?:string}){
  return <div className="flex h-24 items-end gap-2 px-1">{[35,52,42,68,56,76,92].map((h,i)=><div key={i} className={`flex-1 rounded-t ${tone}`} style={{height:`${h}%`,opacity:.82}}/>)}</div>;
}

function GcnWebsite(){
  return <div className="h-full bg-slate-50 p-4 sm:p-6">
    <div className="relative mx-auto h-full max-w-[92%]">
      <div className="absolute left-[3%] top-[8%] h-[78%] w-[76%] overflow-hidden rounded-[24px] border-[8px] border-slate-900 bg-white shadow-[0_35px_80px_-30px_rgba(15,23,42,.65)]">
        <BrowserChrome/>
        <div className="flex h-[calc(100%-2rem)] flex-col bg-white">
          <div className="flex h-12 items-center justify-between bg-[#07192d] px-5 text-white"><div><p className="text-sm font-bold">GCN</p><p className="text-[7px] text-white/60">PT GEGA CAHAYA NUSANTARA</p></div><div className="flex gap-4 text-[8px] text-white/70"><span>Beranda</span><span>Layanan</span><span>Sektor</span><span>Kontak</span></div></div>
          <div className="relative flex flex-1 items-center overflow-hidden bg-gradient-to-br from-[#0d2944] via-[#174866] to-[#c07b42] px-6 text-white"><div className="relative z-10 max-w-[62%]"><p className="text-[8px] font-semibold text-cyan-300">TRUSTED BUSINESS PARTNER</p><h3 className="mt-2 text-xl font-bold leading-tight">Solusi Supply, Trading & Konstruksi Terpercaya</h3><p className="mt-2 text-[9px] text-white/70">Private sector, pemerintah, konstruksi, dan sparepart pesawat.</p><div className="mt-3 flex gap-2"><span className="rounded bg-blue-600 px-3 py-1.5 text-[8px] font-semibold">Lihat Layanan</span><span className="rounded border border-white/40 px-3 py-1.5 text-[8px]">Kirim RFQ</span></div></div><div className="absolute bottom-6 right-5 h-16 w-28 rounded bg-slate-800/90 shadow-xl"/><div className="absolute bottom-16 right-20 h-24 w-28 border-x-4 border-t-4 border-white/15"/></div>
        </div>
      </div>
      <div className="absolute bottom-[3%] right-[2%] h-[62%] w-[27%] rounded-[28px] border-[7px] border-slate-900 bg-white p-1 shadow-[0_28px_60px_-28px_rgba(15,23,42,.75)]"><div className="mx-auto mb-1 h-2 w-12 rounded-full bg-slate-900"/><div className="h-[92%] overflow-hidden rounded-[18px] bg-[#07192d] p-3 text-white"><p className="text-[8px] font-bold">GCN</p><p className="mt-6 text-[6px] text-cyan-300">TRUSTED BUSINESS PARTNER</p><p className="mt-1 text-sm font-bold leading-tight">Supply & Trading</p><div className="mt-4 h-16 rounded bg-white/10"/></div></div>
    </div>
  </div>;
}

function ErpShowcase({kind}:{kind:"gcn"|"saka"|"dbi"}){
  const isDbi=kind==="dbi"; const isSaka=kind==="saka";
  const bg=isDbi?"bg-[#f6eef5]":"bg-[#eef4fb]"; const side=isDbi?"bg-[#321744]":"bg-[#0b2545]"; const tone=isDbi?"bg-purple-600":"bg-blue-600"; const textTone=isDbi?"text-purple-700":"text-blue-700";
  const brand=isDbi?"DBI ERP":isSaka?"SAKA ERP":"GCN ERP";
  const title=isDbi?"Operational Dashboard":isSaka?"Business Overview":"Dashboard Executive";
  const menus=isDbi?["Dashboard","CRM & Sales","NPD / R&D","Procurement","Inventory","Production","QC","Finance"]:isSaka?["Dashboard","Leads","Projects","Tasks","Proposals","Clients","Invoices","Reports"]:["Dashboard","Leads","Quotation","Sales Order","Purchase Order","Projects","Finance","Accounting"];
  const stats=isDbi?[["Sales YTD","Rp 15,75 M"],["Production","125.430"],["Inventory","Rp 4,25 M"],["Return Rate","2,35%"]]:isSaka?[["Total Leads","128"],["Active Projects","24"],["Pipeline","Rp 1,25 M"],["Tasks Done","78%"]]:[["Total Sales","Rp 8,45 M"],["Gross Profit","Rp 1,24 M"],["Open PO","24"],["Receivable","Rp 2,35 M"]];
  return <div className={`h-full ${bg} p-4 sm:p-6`}><div className="relative mx-auto h-full max-w-[94%]">
    <div className="absolute left-[2%] top-[7%] h-[80%] w-[82%] overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-[0_35px_90px_-30px_rgba(15,23,42,.55)]"><BrowserChrome/><div className="flex h-[calc(100%-2rem)]"><aside className={`${side} w-[22%] p-4 text-white`}><p className="text-sm font-bold">{brand}</p><div className="mt-5 space-y-2">{menus.map((m,i)=><div key={m} className={`rounded-lg px-2 py-1.5 text-[7px] ${i===0?"bg-white/14":"text-white/65"}`}>{m}</div>)}</div></aside><main className="flex-1 bg-[#f8fafc] p-4"><div className="flex items-center justify-between"><div><p className="text-sm font-bold text-slate-800">{title}</p><p className="text-[8px] text-slate-400">Demo environment</p></div><span className={`rounded-full px-3 py-1 text-[8px] font-semibold text-white ${tone}`}>Live Demo</span></div><div className="mt-4 grid grid-cols-4 gap-2">{stats.map(([a,b])=><Kpi key={a} label={a} value={b} tone={textTone}/>)}</div><div className="mt-3 grid grid-cols-[1.5fr_1fr] gap-3"><div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"><p className="text-[9px] font-semibold text-slate-600">{isDbi?"Production vs Target":isSaka?"Lead Growth":"Monthly Sales"}</p><Chart tone={tone}/></div><div className="space-y-3"><div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"><p className="text-[9px] font-semibold text-slate-600">{isDbi?"QC Status":isSaka?"Project Status":"Project Status"}</p><div className="mx-auto mt-3 h-14 w-14 rounded-full border-[10px] border-blue-500 border-b-amber-400 border-r-emerald-400"/></div><div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"><p className="text-[9px] font-semibold text-slate-600">{isDbi?"Return / Replacement":"Recent Activity"}</p><div className="mt-2 space-y-1.5">{[72,55,38].map((w,i)=><div key={i} className="h-1.5 rounded bg-slate-100"><div className={`h-1.5 rounded ${tone}`} style={{width:`${w}%`}}/></div>)}</div></div></div></div></main></div></div>
    <div className={`absolute bottom-[1%] right-[1%] h-[66%] w-[27%] rotate-[2deg] rounded-[24px] border border-black/10 bg-white p-3 shadow-[0_28px_70px_-28px_rgba(15,23,42,.55)] ${bg}`}><p className={`text-[9px] font-bold ${textTone}`}>{title}</p><div className="mt-3 grid grid-cols-2 gap-2">{stats.slice(0,4).map(([a,b])=><div key={a} className="rounded-xl bg-white p-2 shadow-sm"><p className="text-[6px] text-slate-400">{a}</p><p className="text-[9px] font-bold text-slate-700">{b}</p></div>)}</div><div className="mt-3 rounded-xl bg-white p-2 shadow-sm"><p className="text-[7px] font-semibold text-slate-600">{isDbi?"Production Trend":isSaka?"Pipeline":"Sales Trend"}</p><Chart tone={tone}/></div></div>
  </div></div>;
}

export default function PortfolioVisual({item}:{item:PortfolioItem;large?:boolean}){
  if(item.slug==="gcn-corporate-website") return <GcnWebsite/>;
  if(item.slug==="dbi-erp-mis") return <ErpShowcase kind="dbi"/>;
  if(item.slug==="gcn-management-system-erp") return <ErpShowcase kind="gcn"/>;
  return <ErpShowcase kind="saka"/>;
}

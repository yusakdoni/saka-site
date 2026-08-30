import type { PortfolioItem } from "@/content/portfolio";

function MiniBar({ value, tone = "bg-blue-600" }: { value: number; tone?: string }) {
  return <div className={`${tone} rounded-t-sm`} style={{ height: `${value}%`, minHeight: 4 }} />;
}

function BrowserFrame({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-black/10 bg-white shadow-[0_24px_70px_-28px_rgba(15,23,42,.55)]">
      <div className={`flex h-7 items-center gap-1.5 px-3 ${dark ? "bg-slate-900" : "bg-slate-100"}`}>
        <span className="h-2 w-2 rounded-full bg-rose-400" /><span className="h-2 w-2 rounded-full bg-amber-400" /><span className="h-2 w-2 rounded-full bg-emerald-400" />
        <div className={`ml-2 h-3 flex-1 rounded-full ${dark ? "bg-white/10" : "bg-white"}`} />
      </div>
      {children}
    </div>
  );
}

function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[92%]">
      <div className="rounded-[18px] border-[7px] border-slate-900 bg-slate-900 shadow-[0_28px_70px_-28px_rgba(15,23,42,.75)]">
        <div className="overflow-hidden rounded-[9px] bg-white">{children}</div>
      </div>
      <div className="mx-auto h-2.5 w-[86%] rounded-b-[55%] bg-gradient-to-b from-slate-300 to-slate-400" />
    </div>
  );
}

function PhoneFrame({ children, tone = "border-slate-900" }: { children: React.ReactNode; tone?: string }) {
  return (
    <div className={`overflow-hidden rounded-[22px] border-[5px] ${tone} bg-white shadow-[0_20px_55px_-24px_rgba(15,23,42,.75)]`}>
      <div className="mx-auto mt-1 h-2 w-10 rounded-full bg-slate-900" />
      <div className="mt-1 h-full overflow-hidden">{children}</div>
    </div>
  );
}

function DashboardShell({ brand, menu, accent, sidebar = "bg-[#0d2340]", large, children }: { brand: string; menu: string[]; accent: string; sidebar?: string; large: boolean; children: React.ReactNode }) {
  return (
    <div className="flex h-full bg-[#f7f9fc]">
      <aside className={`${sidebar} w-[24%] shrink-0 p-2 text-white sm:p-3`}>
        <div className="mb-3 flex items-center gap-1.5"><div className={`h-3 w-3 rounded ${accent}`} /><p className={`${large ? "text-xs" : "text-[6px]"} font-bold`}>{brand}</p></div>
        <div className="space-y-1">{menu.map((m, i) => <div key={m} className={`${i === 0 ? "bg-white/12" : ""} rounded px-1.5 py-1 ${large ? "text-[7px] md:text-[9px]" : "text-[3.5px] sm:text-[4.5px]"} text-white/75`}>{m}</div>)}</div>
      </aside>
      <main className="flex min-w-0 flex-1 flex-col p-2 sm:p-3">{children}</main>
    </div>
  );
}

function Kpi({ label, value, large, positive, purple = false }: { label: string; value: string; large: boolean; positive?: boolean; purple?: boolean }) {
  return <div className="rounded border border-slate-100 bg-white p-1.5 sm:p-2 shadow-sm"><p className={`${large ? "text-[6px] md:text-[8px]" : "text-[3px] sm:text-[4px]"} truncate text-slate-400`}>{label}</p><p className={`${large ? "text-[10px] md:text-sm" : "text-[6px] sm:text-[8px]"} truncate font-bold text-slate-800`}>{value}</p>{positive !== undefined && <p className={`${large ? "text-[5px]" : "text-[3px]"} ${positive ? (purple ? "text-purple-600" : "text-emerald-600") : "text-rose-500"}`}>{positive ? "+8.4%" : "-0.8%"}</p>}</div>;
}

function GcnWebsiteScreen({ large }: { large: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-white">
      <div className="flex h-8 items-center justify-between bg-[#07192d] px-3 text-white sm:h-10 sm:px-4">
        <div><p className={`${large ? "text-sm" : "text-[8px]"} font-bold tracking-wide`}>GCN</p><p className={`${large ? "text-[7px]" : "text-[4px]"} text-white/60`}>PT GEGA CAHAYA NUSANTARA</p></div>
        <div className={`flex gap-3 ${large ? "text-[8px]" : "text-[4px]"} text-white/70`}><span>Beranda</span><span>Layanan</span><span>Sektor</span><span>Kontak</span></div>
      </div>
      <div className="relative flex flex-1 overflow-hidden bg-gradient-to-br from-[#102b46] via-[#123d5a] to-[#8a5b32] p-4 text-white sm:p-5">
        <div className="relative z-10 max-w-[66%] self-center">
          <p className={`${large ? "text-[9px]" : "text-[5px]"} mb-2 font-semibold text-cyan-300`}>TRUSTED BUSINESS PARTNER</p>
          <p className={`${large ? "text-xl md:text-3xl" : "text-[13px] sm:text-base"} font-bold leading-tight`}>Solusi Supply, Trading &amp; Konstruksi Terpercaya</p>
          <p className={`${large ? "text-[10px]" : "text-[5px]"} mt-2 max-w-md text-white/70`}>Private sector, pemerintah, konstruksi, dan sparepart pesawat.</p>
          <div className="mt-3 flex gap-2"><div className={`rounded bg-blue-600 px-3 py-1.5 font-semibold ${large ? "text-[8px]" : "text-[5px]"}`}>Lihat Layanan</div><div className={`rounded border border-white/50 px-3 py-1.5 ${large ? "text-[8px]" : "text-[5px]"}`}>Kirim RFQ</div></div>
        </div>
        <div className="absolute bottom-0 right-0 h-[78%] w-[42%] opacity-90"><div className="absolute bottom-4 right-4 h-12 w-24 rounded bg-slate-800 shadow-xl sm:h-16 sm:w-32" /><div className="absolute bottom-14 right-16 h-20 w-28 border-x-4 border-t-4 border-cyan-200/30 sm:h-28 sm:w-36" /><div className="absolute right-4 top-8 h-1 w-24 rotate-[-12deg] bg-orange-200/60" /></div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 bg-white p-2 sm:p-3">{["Private Sector", "Pemerintah", "Konstruksi", "Aviation"].map((x) => <div key={x} className="rounded border border-slate-100 bg-slate-50 p-1.5 text-center"><div className="mx-auto mb-1 h-2.5 w-2.5 rounded bg-blue-100" /><p className={`${large ? "text-[7px]" : "text-[4px]"} font-semibold text-slate-700`}>{x}</p></div>)}</div>
    </div>
  );
}

function GcnErpScreen({ large }: { large: boolean }) {
  const kpis = [["Total Penjualan", "Rp 8,45 M"], ["Laba Kotor", "Rp 1,24 M"], ["Open PO", "24"], ["Piutang Usaha", "Rp 2,35 M"]];
  return <DashboardShell brand="GCN ERP" large={large} menu={["Dashboard", "Leads", "Quotation", "Sales Order", "Purchase Order", "Projects", "Finance", "Accounting"]} accent="bg-blue-600">
    <div className="mb-2 flex items-center justify-between"><p className={`${large ? "text-sm" : "text-[7px]"} font-bold text-slate-800`}>Dashboard Executive</p><span className={`${large ? "text-[8px]" : "text-[4px]"} text-slate-400`}>Mei 2026</span></div>
    <div className="grid grid-cols-4 gap-1.5 sm:gap-2">{kpis.map(([k, v], i) => <Kpi key={k} label={k} value={v} large={large} positive={i < 2} />)}</div>
    <div className="mt-2 grid flex-1 grid-cols-[1.6fr_1fr] gap-2"><div className="rounded border border-slate-100 bg-white p-2 shadow-sm"><p className={`${large ? "text-[8px]" : "text-[4px]"} font-semibold text-slate-600`}>Penjualan Bulanan</p><div className="mt-2 flex h-[72%] items-end gap-1.5">{[25, 42, 55, 68, 61, 79, 93].map((h, i) => <MiniBar key={i} value={h} />)}</div></div><div className="space-y-2"><div className="rounded border border-slate-100 bg-white p-2 shadow-sm"><p className={`${large ? "text-[8px]" : "text-[4px]"} font-semibold`}>Status Project</p><div className="mt-2 flex items-center gap-2"><div className="h-9 w-9 rounded-full border-[7px] border-blue-500 border-r-emerald-400" /><div className={`${large ? "text-[7px]" : "text-[4px]"} text-slate-500`}>On Progress 12<br />Completed 8</div></div></div><div className="rounded border border-slate-100 bg-white p-2 shadow-sm"><p className={`${large ? "text-[8px]" : "text-[4px]"} font-semibold`}>Aging Piutang</p><div className="mt-2 space-y-1">{[76, 54, 31].map((w, i) => <div key={i} className="h-1 rounded bg-slate-100"><div className="h-1 rounded bg-blue-500" style={{ width: `${w}%` }} /></div>)}</div></div></div></div>
  </DashboardShell>;
}

function SakaErpScreen({ large }: { large: boolean }) {
  const kpis = [["Total Leads", "128"], ["Active Projects", "24"], ["Pipeline", "Rp 1,25 M"], ["Tasks Completed", "78%"]];
  return <DashboardShell brand="SAKA ERP" large={large} menu={["Dashboard", "Leads", "Projects", "Tasks", "Proposals", "Clients", "Invoices", "Knowledge"]} accent="bg-blue-600">
    <p className={`${large ? "text-sm" : "text-[7px]"} mb-2 font-bold text-slate-800`}>Business Overview</p>
    <div className="grid grid-cols-4 gap-1.5 sm:gap-2">{kpis.map(([k, v]) => <Kpi key={k} label={k} value={v} large={large} positive />)}</div>
    <div className="mt-2 grid flex-1 grid-cols-[1.4fr_1fr] gap-2"><div className="rounded border border-slate-100 bg-white p-2 shadow-sm"><p className={`${large ? "text-[8px]" : "text-[4px]"} font-semibold`}>Lead Growth</p><div className="mt-2 flex h-[55%] items-end gap-2">{[28, 43, 59, 66, 82, 95].map((h, i) => <MiniBar key={i} value={h} />)}</div><div className="mt-2 rounded bg-slate-50 p-1.5"><div className="flex justify-between"><span className={`${large ? "text-[7px]" : "text-[4px]"} font-medium`}>ERP Implementation - GCN</span><span className={`${large ? "text-[7px]" : "text-[4px]"} text-emerald-600`}>79%</span></div></div></div><div className="rounded border border-slate-100 bg-white p-2 shadow-sm"><p className={`${large ? "text-[8px]" : "text-[4px]"} font-semibold`}>Project Status</p><div className="mx-auto mt-3 h-12 w-12 rounded-full border-[9px] border-blue-500 border-b-amber-400 border-r-emerald-400" /><div className={`mt-2 space-y-1 ${large ? "text-[7px]" : "text-[4px]"} text-slate-500`}><p>Planning · 6</p><p>In Progress · 12</p><p>Completed · 4</p></div></div></div>
  </DashboardShell>;
}

function DbiErpScreen({ large }: { large: boolean }) {
  const kpis = [["Sales YTD", "Rp 15,75 M"], ["Production", "125.430"], ["Inventory", "Rp 4,25 M"], ["Return Rate", "2,35%"]];
  return <DashboardShell brand="DBI ERP" large={large} menu={["Dashboard", "CRM & Sales", "NPD / R&D", "Samples", "Procurement", "Inventory", "Production", "Quality Control", "Regulatory", "Finance"]} accent="bg-purple-600" sidebar="bg-[#301742]">
    <p className={`${large ? "text-sm" : "text-[7px]"} mb-2 font-bold text-slate-800`}>Operational Dashboard</p>
    <div className="grid grid-cols-4 gap-1.5 sm:gap-2">{kpis.map(([k, v], i) => <Kpi key={k} label={k} value={v} large={large} positive={i !== 3} purple />)}</div>
    <div className="mt-2 grid flex-1 grid-cols-[1.45fr_1fr] gap-2"><div className="rounded border border-purple-50 bg-white p-2 shadow-sm"><p className={`${large ? "text-[8px]" : "text-[4px]"} font-semibold`}>Production vs Target</p><div className="mt-2 flex h-[54%] items-end gap-1.5">{[31, 43, 58, 49, 67, 73, 91].map((h, i) => <MiniBar key={i} value={h} tone="bg-purple-500" />)}</div><div className="mt-2 grid grid-cols-3 gap-1">{[["NPD", "8"], ["QC Passed", "238"], ["Returns", "36"]].map(([a, b]) => <div key={a} className="rounded bg-purple-50 p-1"><p className={`${large ? "text-[6px]" : "text-[3px]"} text-slate-400`}>{a}</p><p className={`${large ? "text-[8px]" : "text-[5px]"} font-bold text-slate-700`}>{b}</p></div>)}</div></div><div className="space-y-2"><div className="rounded border border-purple-50 bg-white p-2 shadow-sm"><p className={`${large ? "text-[8px]" : "text-[4px]"} font-semibold`}>Top Products</p>{[82, 66, 48, 35].map((w, i) => <div key={i} className="mt-1 h-1.5 rounded bg-purple-50"><div className="h-1.5 rounded bg-purple-500" style={{ width: `${w}%` }} /></div>)}</div><div className="rounded border border-purple-50 bg-white p-2 shadow-sm"><p className={`${large ? "text-[8px]" : "text-[4px]"} font-semibold`}>Return / Replacement</p><div className={`${large ? "text-[7px]" : "text-[4px]"} mt-2 grid grid-cols-2 gap-1 text-slate-500`}><span>Requested</span><b>36</b><span>Approved</span><b>28</b><span>Completed</span><b>24</b></div></div></div></div>
  </DashboardShell>;
}

function WebsitePresentation({ large }: { large: boolean }) {
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#dff9f6] via-white to-[#dceaf8] p-4 sm:p-6 md:p-8">
      <div className="absolute left-5 top-4 text-slate-700/20"><p className={`${large ? "text-3xl md:text-5xl" : "text-lg"} font-black tracking-tight`}>CORPORATE WEBSITE</p></div>
      <div className="relative z-10 mt-6 grid h-[78%] grid-cols-[1.5fr_.7fr] items-end gap-4">
        <LaptopFrame><div className={`${large ? "h-[330px] md:h-[410px]" : "h-[180px]"}`}><GcnWebsiteScreen large={large} /></div></LaptopFrame>
        <div className="-translate-x-4 translate-y-3"><PhoneFrame tone="border-slate-800"><div className={`${large ? "h-[300px]" : "h-[150px]"} w-full min-w-[78px]`}><GcnWebsiteScreen large={false} /></div></PhoneFrame></div>
      </div>
    </div>
  );
}

function ErpPresentation({ kind, large }: { kind: "gcn" | "saka" | "dbi"; large: boolean }) {
  const isDbi = kind === "dbi";
  const bg = isDbi ? "from-[#efe5f1] via-[#fbf7fc] to-[#e8dff0]" : kind === "gcn" ? "from-[#d8e7f7] via-[#eef5fb] to-[#dce9f4]" : "from-[#dbe7ff] via-[#f5f8ff] to-[#e8edff]";
  const title = isDbi ? "COSMETICS ERP / MIS" : kind === "gcn" ? "ENTERPRISE RESOURCE PLANNING" : "BUSINESS MANAGEMENT SYSTEM";
  const Screen = kind === "dbi" ? DbiErpScreen : kind === "gcn" ? GcnErpScreen : SakaErpScreen;
  return (
    <div className={`relative h-full overflow-hidden bg-gradient-to-br ${bg} p-4 sm:p-6 md:p-8`}>
      <p className={`absolute left-5 top-4 ${large ? "text-3xl md:text-5xl" : "text-lg"} font-black tracking-tight text-slate-700/10`}>{title}</p>
      <div className="absolute -left-14 top-0 h-full w-[26%] rotate-3 bg-gradient-to-b from-blue-400/80 to-blue-700/90 blur-[.2px]" />
      {isDbi && <div className="absolute -left-10 top-0 h-full w-[24%] rotate-2 bg-gradient-to-b from-fuchsia-400/60 to-purple-800/80" />}
      <div className="relative z-10 mx-auto mt-7 w-[92%] rotate-[-1deg]">
        <BrowserFrame><div className={`${large ? "h-[340px] md:h-[430px]" : "h-[188px]"}`}><Screen large={large} /></div></BrowserFrame>
      </div>
      <div className="absolute bottom-4 right-5 z-20 w-[27%] rotate-[4deg] opacity-95"><BrowserFrame><div className={`${large ? "h-[128px]" : "h-[72px]"}`}><Screen large={false} /></div></BrowserFrame></div>
      <div className="absolute bottom-5 left-7 z-20 rounded-xl border border-white/50 bg-white/90 px-3 py-2 shadow-lg backdrop-blur"><p className={`${large ? "text-xs" : "text-[6px]"} font-semibold text-slate-700`}>Demo data</p><p className={`${large ? "text-[10px]" : "text-[5px]"} text-slate-400`}>Fiktif untuk presentasi</p></div>
    </div>
  );
}

export default function PortfolioVisual({ item, large = false }: { item: PortfolioItem; large?: boolean }) {
  if (item.slug === "gcn-corporate-website") return <WebsitePresentation large={large} />;
  if (item.slug === "gcn-management-system-erp") return <ErpPresentation kind="gcn" large={large} />;
  if (item.slug === "dbi-erp-mis") return <ErpPresentation kind="dbi" large={large} />;
  return <ErpPresentation kind="saka" large={large} />;
}

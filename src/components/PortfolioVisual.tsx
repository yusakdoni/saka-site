import type { PortfolioItem } from "@/content/portfolio";

function BrowserChrome() {
  return (
    <div className="flex h-[7%] min-h-5 items-center gap-[1.2%] border-b border-slate-200 bg-white px-[2%]">
      <span className="aspect-square w-[1.8%] min-w-1.5 rounded-full bg-rose-400" />
      <span className="aspect-square w-[1.8%] min-w-1.5 rounded-full bg-amber-400" />
      <span className="aspect-square w-[1.8%] min-w-1.5 rounded-full bg-emerald-400" />
      <div className="ml-[1%] h-[42%] flex-1 rounded-full bg-slate-100" />
    </div>
  );
}

function Kpi({ label, value, tone = "text-blue-600" }: { label: string; value: string; tone?: string }) {
  return (
    <div className="min-w-0 rounded-[clamp(6px,1vw,14px)] border border-slate-200 bg-white p-[clamp(5px,1vw,12px)] shadow-sm">
      <p className="truncate text-[clamp(5px,0.72vw,10px)] uppercase tracking-wide text-slate-400">{label}</p>
      <p className={`mt-[2%] truncate text-[clamp(7px,1.15vw,16px)] font-bold ${tone}`}>{value}</p>
    </div>
  );
}

function Chart({ tone = "bg-blue-600" }: { tone?: string }) {
  return (
    <div className="flex h-full items-end gap-[3%] px-[2%] pt-[6%]">
      {[35, 52, 42, 68, 56, 76, 92].map((h, i) => (
        <div key={i} className={`flex-1 rounded-t ${tone}`} style={{ height: `${h}%`, opacity: 0.82 }} />
      ))}
    </div>
  );
}

function GcnWebsite() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-[3.5%] sm:p-[3%]">
      <div className="relative mx-auto h-full w-full max-w-[1100px]">
        <div className="absolute left-[2%] top-[6%] h-[82%] w-[92%] overflow-hidden rounded-[clamp(12px,2vw,28px)] border-[clamp(4px,0.9vw,10px)] border-slate-900 bg-white shadow-[0_35px_80px_-30px_rgba(15,23,42,.65)] sm:w-[78%]">
          <BrowserChrome />
          <div className="flex h-[93%] flex-col bg-white">
            <div className="flex h-[15%] min-h-7 items-center justify-between bg-[#07192d] px-[4%] text-white">
              <div>
                <p className="text-[clamp(7px,1.25vw,16px)] font-bold">GCN</p>
                <p className="text-[clamp(4px,0.58vw,8px)] text-white/60">PT GEGA CAHAYA NUSANTARA</p>
              </div>
              <div className="hidden gap-[1.6vw] text-[clamp(5px,0.72vw,10px)] text-white/70 sm:flex">
                <span>Beranda</span><span>Layanan</span><span>Sektor</span><span>Kontak</span>
              </div>
            </div>
            <div className="relative flex flex-1 items-center overflow-hidden bg-gradient-to-br from-[#0d2944] via-[#174866] to-[#c07b42] px-[6%] text-white">
              <div className="relative z-10 max-w-[72%] sm:max-w-[62%]">
                <p className="text-[clamp(5px,0.68vw,9px)] font-semibold text-cyan-300">TRUSTED BUSINESS PARTNER</p>
                <h3 className="mt-[3%] text-[clamp(12px,2.2vw,30px)] font-bold leading-tight">Solusi Supply, Trading &amp; Konstruksi Terpercaya</h3>
                <p className="mt-[3%] hidden text-[clamp(5px,0.76vw,10px)] text-white/70 sm:block">Private sector, pemerintah, konstruksi, dan sparepart pesawat.</p>
                <div className="mt-[5%] flex gap-[3%]">
                  <span className="rounded bg-blue-600 px-[5%] py-[2.4%] text-[clamp(5px,0.65vw,9px)] font-semibold">Lihat Layanan</span>
                  <span className="rounded border border-white/40 px-[5%] py-[2.4%] text-[clamp(5px,0.65vw,9px)]">Kirim RFQ</span>
                </div>
              </div>
              <div className="absolute bottom-[8%] right-[5%] h-[20%] w-[22%] rounded bg-slate-800/90 shadow-xl" />
              <div className="absolute bottom-[18%] right-[14%] h-[32%] w-[22%] border-x-[3px] border-t-[3px] border-white/15" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[2%] right-[1%] hidden h-[66%] w-[25%] rounded-[clamp(16px,2.3vw,30px)] border-[clamp(4px,0.7vw,8px)] border-slate-900 bg-white p-[0.8%] shadow-[0_28px_60px_-28px_rgba(15,23,42,.75)] sm:block">
          <div className="mx-auto mb-[2%] h-[2.2%] w-[30%] rounded-full bg-slate-900" />
          <div className="h-[94%] overflow-hidden rounded-[clamp(10px,1.5vw,20px)] bg-[#07192d] p-[8%] text-white">
            <p className="text-[clamp(6px,0.72vw,10px)] font-bold">GCN</p>
            <p className="mt-[18%] text-[clamp(4px,0.55vw,7px)] text-cyan-300">TRUSTED BUSINESS PARTNER</p>
            <p className="mt-[4%] text-[clamp(8px,1.2vw,16px)] font-bold leading-tight">Supply &amp; Trading</p>
            <div className="mt-[12%] h-[28%] rounded bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ErpShowcase({ kind }: { kind: "gcn" | "saka" | "dbi" }) {
  const isDbi = kind === "dbi";
  const isSaka = kind === "saka";
  const bg = isDbi ? "bg-[#f6eef5]" : "bg-[#eef4fb]";
  const side = isDbi ? "bg-[#321744]" : "bg-[#0b2545]";
  const tone = isDbi ? "bg-purple-600" : "bg-blue-600";
  const textTone = isDbi ? "text-purple-700" : "text-blue-700";
  const brand = isDbi ? "DBI ERP" : isSaka ? "SAKA ERP" : "GCN ERP";
  const title = isDbi ? "Operational Dashboard" : isSaka ? "Business Overview" : "Dashboard Executive";
  const menus = isDbi
    ? ["Dashboard", "CRM & Sales", "NPD / R&D", "Procurement", "Inventory", "Production", "QC", "Finance"]
    : isSaka
      ? ["Dashboard", "Leads", "Projects", "Tasks", "Proposals", "Clients", "Invoices", "Reports"]
      : ["Dashboard", "Leads", "Quotation", "Sales Order", "Purchase Order", "Projects", "Finance", "Accounting"];
  const stats = isDbi
    ? [["Sales YTD", "Rp 15,75 M"], ["Production", "125.430"], ["Inventory", "Rp 4,25 M"], ["Return Rate", "2,35%"]]
    : isSaka
      ? [["Total Leads", "128"], ["Active Projects", "24"], ["Pipeline", "Rp 1,25 M"], ["Tasks Done", "78%"]]
      : [["Total Sales", "Rp 8,45 M"], ["Gross Profit", "Rp 1,24 M"], ["Open PO", "24"], ["Receivable", "Rp 2,35 M"]];

  return (
    <div className={`h-full w-full ${bg} p-[3.5%] sm:p-[3%]`}>
      <div className="relative mx-auto h-full w-full max-w-[1150px]">
        <div className="absolute left-[1%] top-[5%] h-[86%] w-[96%] overflow-hidden rounded-[clamp(12px,2vw,28px)] border border-black/10 bg-white shadow-[0_35px_90px_-30px_rgba(15,23,42,.55)] sm:w-[84%]">
          <BrowserChrome />
          <div className="flex h-[93%]">
            <aside className={`${side} w-[24%] shrink-0 p-[3%] text-white sm:w-[22%]`}>
              <p className="text-[clamp(6px,1vw,14px)] font-bold">{brand}</p>
              <div className="mt-[16%] space-y-[4%]">
                {menus.map((m, i) => (
                  <div key={m} className={`truncate rounded-[clamp(4px,0.7vw,10px)] px-[7%] py-[4%] text-[clamp(4px,0.64vw,9px)] ${i === 0 ? "bg-white/14" : "text-white/65"}`}>{m}</div>
                ))}
              </div>
            </aside>
            <main className="min-w-0 flex-1 bg-[#f8fafc] p-[3%]">
              <div className="flex items-center justify-between gap-[2%]">
                <div className="min-w-0">
                  <p className="truncate text-[clamp(7px,1.1vw,15px)] font-bold text-slate-800">{title}</p>
                  <p className="text-[clamp(4px,0.58vw,8px)] text-slate-400">Demo environment</p>
                </div>
                <span className={`shrink-0 rounded-full px-[3%] py-[1.4%] text-[clamp(4px,0.58vw,8px)] font-semibold text-white ${tone}`}>Live Demo</span>
              </div>
              <div className="mt-[4%] grid grid-cols-2 gap-[2%] sm:grid-cols-4">
                {stats.map(([a, b]) => <Kpi key={a} label={a} value={b} tone={textTone} />)}
              </div>
              <div className="mt-[3%] grid h-[48%] grid-cols-1 gap-[3%] sm:grid-cols-[1.55fr_1fr]">
                <div className="min-h-0 rounded-[clamp(8px,1.2vw,18px)] border border-slate-200 bg-white p-[4%] shadow-sm">
                  <p className="text-[clamp(5px,0.68vw,9px)] font-semibold text-slate-600">{isDbi ? "Production vs Target" : isSaka ? "Lead Growth" : "Monthly Sales"}</p>
                  <div className="h-[78%]"><Chart tone={tone} /></div>
                </div>
                <div className="hidden min-h-0 flex-col gap-[5%] sm:flex">
                  <div className="flex-1 rounded-[clamp(8px,1.2vw,18px)] border border-slate-200 bg-white p-[7%] shadow-sm">
                    <p className="text-[clamp(5px,0.68vw,9px)] font-semibold text-slate-600">{isDbi ? "QC Status" : "Project Status"}</p>
                    <div className="mx-auto mt-[12%] aspect-square w-[34%] rounded-full border-[clamp(5px,0.8vw,10px)] border-blue-500 border-b-amber-400 border-r-emerald-400" />
                  </div>
                  <div className="flex-1 rounded-[clamp(8px,1.2vw,18px)] border border-slate-200 bg-white p-[7%] shadow-sm">
                    <p className="text-[clamp(5px,0.68vw,9px)] font-semibold text-slate-600">{isDbi ? "Return / Replacement" : "Recent Activity"}</p>
                    <div className="mt-[10%] space-y-[8%]">{[72, 55, 38].map((w, i) => <div key={i} className="h-[5px] rounded bg-slate-100"><div className={`h-[5px] rounded ${tone}`} style={{ width: `${w}%` }} /></div>)}</div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className={`absolute bottom-[2%] right-[1%] hidden h-[68%] w-[27%] rotate-[2deg] rounded-[clamp(14px,2vw,26px)] border border-black/10 bg-white p-[2.2%] shadow-[0_28px_70px_-28px_rgba(15,23,42,.55)] ${bg} sm:block`}>
          <p className={`text-[clamp(6px,0.78vw,11px)] font-bold ${textTone}`}>{title}</p>
          <div className="mt-[8%] grid grid-cols-2 gap-[5%]">
            {stats.slice(0, 4).map(([a, b]) => (
              <div key={a} className="min-w-0 rounded-[clamp(7px,1vw,14px)] bg-white p-[8%] shadow-sm">
                <p className="truncate text-[clamp(4px,0.5vw,7px)] text-slate-400">{a}</p>
                <p className="truncate text-[clamp(6px,0.78vw,11px)] font-bold text-slate-700">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-[8%] h-[38%] rounded-[clamp(8px,1vw,14px)] bg-white p-[6%] shadow-sm">
            <p className="text-[clamp(4px,0.55vw,8px)] font-semibold text-slate-600">{isDbi ? "Production Trend" : isSaka ? "Pipeline" : "Sales Trend"}</p>
            <div className="h-[78%]"><Chart tone={tone} /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioVisual({ item }: { item: PortfolioItem; large?: boolean }) {
  if (item.slug === "gcn-corporate-website") return <GcnWebsite />;
  if (item.slug === "dbi-erp-mis") return <ErpShowcase kind="dbi" />;
  if (item.slug === "gcn-management-system-erp") return <ErpShowcase kind="gcn" />;
  return <ErpShowcase kind="saka" />;
}

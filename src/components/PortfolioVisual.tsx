import type { PortfolioItem } from "@/content/portfolio";

const themes: Record<string, { shell: string; sidebar: string; accent: string; soft: string }> = {
  "saka-digital-platform-internal-erp": { shell: "bg-[#eef4fb]", sidebar: "bg-[#0b2447]", accent: "bg-blue-600", soft: "bg-blue-50" },
  "gcn-corporate-website": { shell: "bg-[#eef5f7]", sidebar: "bg-[#0b3a4c]", accent: "bg-teal-600", soft: "bg-teal-50" },
  "gcn-management-system-erp": { shell: "bg-[#edf3f8]", sidebar: "bg-[#092744]", accent: "bg-blue-600", soft: "bg-slate-50" },
  "dbi-erp-mis": { shell: "bg-[#fbf4f7]", sidebar: "bg-[#4c1937]", accent: "bg-[#a73e77]", soft: "bg-[#fff7fa]" },
};

function labels(item: PortfolioItem) {
  if (item.slug === "gcn-corporate-website") return ["Services", "RFQ", "Projects", "Contact"];
  if (item.slug === "dbi-erp-mis") return ["CRM", "NPD / R&D", "Production", "QC"];
  if (item.slug === "gcn-management-system-erp") return ["Sales", "Projects", "AR / AP", "Approvals"];
  return ["Leads", "Projects", "Insights", "Automation"];
}

export default function PortfolioVisual({ item, large = false }: { item: PortfolioItem; large?: boolean }) {
  const t = themes[item.slug] ?? themes["saka-digital-platform-internal-erp"];
  const stats = labels(item);

  return (
    <div className={`h-full w-full ${t.shell} p-3 sm:p-4 ${large ? "md:p-8" : ""}`} aria-label={`Visual mockup ${item.title}`}>
      <div className="flex h-full overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm">
        <div className={`${t.sidebar} w-[24%] min-w-[74px] p-3 text-white ${large ? "md:p-5" : ""}`}>
          <div className={`mb-5 h-2.5 w-10 rounded-full ${t.accent}`} />
          <p className={`font-bold leading-tight ${large ? "text-sm md:text-lg" : "text-[9px] sm:text-[10px]"}`}>
            {item.slug === "dbi-erp-mis" ? "DBI ERP" : item.slug.includes("gcn") ? "GCN" : "SAKA"}
          </p>
          <div className={`mt-5 space-y-2 ${large ? "md:space-y-3" : ""}`}>
            {["Dashboard", ...stats.slice(0, 3)].map((x, i) => (
              <div key={x} className={`rounded-md ${i === 0 ? "bg-white/15" : "bg-white/5"} px-2 py-1.5 text-white/85 ${large ? "text-xs md:text-sm" : "text-[6px] sm:text-[7px]"}`}>
                {x}
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 flex-1 p-3 sm:p-4 md:p-5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <p className={`font-bold text-slate-800 ${large ? "text-base md:text-xl" : "text-[9px] sm:text-[11px]"}`}>Executive Overview</p>
              <p className={`text-slate-400 ${large ? "text-xs" : "text-[6px] sm:text-[7px]"}`}>{item.client}</p>
            </div>
            <span className={`rounded-full px-2 py-1 font-semibold text-white ${t.accent} ${large ? "text-xs" : "text-[6px]"}`}>{item.availability}</span>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s} className={`rounded-lg border border-black/5 ${t.soft} p-2 ${large ? "md:p-4" : ""}`}>
                <div className={`mb-2 h-1.5 rounded-full ${t.accent}`} style={{ width: `${45 + i * 12}%` }} />
                <p className={`font-semibold text-slate-700 ${large ? "text-xs md:text-sm" : "text-[6px] sm:text-[7px]"}`}>{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid h-[45%] grid-cols-[1.5fr_1fr] gap-2">
            <div className={`relative overflow-hidden rounded-lg border border-black/5 ${t.soft} p-2 ${large ? "md:p-4" : ""}`}>
              <p className={`font-semibold text-slate-600 ${large ? "text-xs" : "text-[6px]"}`}>{item.projectType}</p>
              <div className="absolute bottom-3 left-3 right-3 flex items-end gap-1">
                {[36, 58, 44, 72, 61, 86, 70].map((h, i) => <div key={i} className={`${t.accent} flex-1 rounded-t opacity-80`} style={{ height: `${h}%`, minHeight: 5 }} />)}
              </div>
            </div>
            <div className={`${t.sidebar} rounded-lg p-2 text-white ${large ? "md:p-4" : ""}`}>
              <p className={`font-semibold ${large ? "text-xs md:text-sm" : "text-[6px]"}`}>Integrated System</p>
              <div className="mt-3 space-y-2">
                {["Workflow", "Reporting", "Control"].map((x) => <div key={x} className={`rounded bg-white/10 px-2 py-1 text-white/80 ${large ? "text-xs" : "text-[5px]"}`}>{x}</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

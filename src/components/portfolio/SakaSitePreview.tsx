type Screen = "home" | "services" | "contact" | "tablet" | "mobile";

function Chrome() {
  return <div className="flex h-[7%] items-center gap-2 border-b border-slate-200 bg-white px-3"><i className="h-2 w-2 rounded-full bg-rose-400"/><i className="h-2 w-2 rounded-full bg-amber-400"/><i className="h-2 w-2 rounded-full bg-emerald-400"/><i className="ml-2 h-3 flex-1 rounded-full bg-slate-100"/></div>;
}

export default function SakaSitePreview({ screen = "home" }: { screen?: Screen }) {
  const mobile = screen === "mobile";
  const tablet = screen === "tablet";
  const compact = mobile || tablet;
  const deviceClass = mobile
    ? "w-[46%] rounded-[24px] border-[5px] border-slate-900"
    : tablet
      ? "w-[76%] rounded-[22px] border-[5px] border-slate-800"
      : "w-full rounded-2xl";

  return <div className="h-full w-full bg-gradient-to-br from-[#edf4ff] via-white to-[#f6f8fb] p-[4%]">
    <div className={`mx-auto h-full overflow-hidden border border-slate-200 bg-white shadow-[0_28px_80px_-35px_rgba(15,42,86,.45)] ${deviceClass}`}>
      {!compact && <Chrome/>}
      <div className="flex h-[11%] items-center justify-between border-b border-slate-100 bg-white/95 px-[5%]">
        <div className="flex items-center gap-2"><span className="grid aspect-square w-[6%] min-w-5 place-items-center rounded-md bg-[#1f5ed7] text-[clamp(5px,.7vw,10px)] font-bold text-white">S</span><b className="text-[clamp(7px,1vw,14px)] text-[#10233f]">SAKA</b></div>
        {compact ? <span className="text-[clamp(8px,1.2vw,14px)]">☰</span> : <div className="flex gap-[4%] text-[clamp(4px,.55vw,8px)] text-slate-600"><span>Beranda</span><span>Layanan</span><span>Portofolio</span><span>Insights</span><span>Tentang Kami</span><span>Kontak</span></div>}
      </div>
      {screen === "contact" ? <div className="grid h-[82%] grid-cols-2 gap-[5%] p-[6%]"><div className="self-center"><p className="text-[clamp(4px,.55vw,8px)] font-bold uppercase tracking-widest text-[#1f5ed7]">Kontak</p><h3 className="mt-[3%] text-[clamp(12px,2vw,28px)] font-bold leading-tight text-[#10233f]">Punya tantangan bisnis yang ingin diselesaikan?</h3><p className="mt-[4%] text-[clamp(5px,.65vw,9px)] text-slate-500">Ceritakan kebutuhan bisnis Anda. Kami bantu memetakan solusi teknologi yang tepat.</p></div><div className="self-center rounded-2xl border border-slate-200 p-[6%] shadow-sm"><div className="grid grid-cols-2 gap-[4%]">{["Nama","Perusahaan","Email","WhatsApp"].map(x=><div key={x} className="h-8 rounded-lg border bg-slate-50 px-2 py-1 text-[clamp(4px,.5vw,7px)] text-slate-400">{x}</div>)}</div><div className="mt-[4%] h-14 rounded-lg border bg-slate-50 px-2 py-1 text-[clamp(4px,.5vw,7px)] text-slate-400">Kebutuhan / pesan</div><div className="mt-[4%] w-1/2 rounded-full bg-[#1f5ed7] px-3 py-2 text-center text-[clamp(4px,.5vw,7px)] font-semibold text-white">Kirim Permintaan</div></div></div>
      : screen === "services" ? <div className="h-[82%] p-[6%]"><p className="text-[clamp(4px,.55vw,8px)] font-bold uppercase tracking-widest text-[#1f5ed7]">Layanan</p><h3 className="mt-[2%] max-w-[70%] text-[clamp(12px,1.9vw,26px)] font-bold leading-tight text-[#10233f]">Solusi Terintegrasi untuk Setiap Kebutuhan Bisnis</h3><div className="mt-[5%] grid grid-cols-3 gap-[3%]">{["Sistem ERP","Web Development","Business Intelligence","AI & Business Automation","System Integration","IT Consulting"].map((x)=><div key={x} className="rounded-xl border border-slate-200 p-[6%] shadow-sm"><span className="mb-[8%] block h-7 w-7 rounded-lg bg-blue-50"/><b className="text-[clamp(5px,.7vw,10px)] text-[#10233f]">{x}</b><p className="mt-[5%] text-[clamp(3px,.48vw,7px)] leading-relaxed text-slate-400">Solusi bisnis yang dirancang berdasarkan kebutuhan operasional nyata.</p></div>)}</div></div>
      : <div className={`${mobile ? "block" : "grid grid-cols-2"} h-[82%] items-center gap-[6%] p-[6%]`}><div><p className="text-[clamp(4px,.55vw,8px)] font-bold uppercase tracking-widest text-[#1f5ed7]">Smart Solutions. Real Impact.</p><h3 className="mt-[4%] text-[clamp(13px,2.3vw,32px)] font-bold leading-[1.08] text-[#10233f]">Sistem yang mendorong <span className="text-[#1f5ed7]">pertumbuhan bisnis</span> Anda.</h3><p className="mt-[5%] text-[clamp(5px,.65vw,9px)] leading-relaxed text-slate-500">SAKA membantu perusahaan membangun sistem terintegrasi, berbasis data dan teknologi.</p><div className="mt-[6%] flex gap-[3%]"><span className="rounded-full bg-[#1f5ed7] px-[5%] py-[3%] text-[clamp(4px,.5vw,7px)] font-semibold text-white">Lihat Layanan Kami</span><span className="rounded-full border border-slate-200 px-[5%] py-[3%] text-[clamp(4px,.5vw,7px)] font-semibold text-[#10233f]">Hubungi Kami</span></div></div>{!mobile&&<div className="grid aspect-[4/3] place-items-center rounded-2xl border border-slate-200 bg-gradient-to-br from-[#0c2446] via-[#1f5ed7] to-[#8bb6ff] shadow-lg"><div className="w-[76%] rounded-2xl border border-white/20 bg-white/10 p-[8%] backdrop-blur"><div className="grid grid-cols-2 gap-[6%]">{["ERP","BI","WEB","AI"].map(x=><div key={x} className="rounded-xl bg-white/90 p-[12%] text-center text-[clamp(6px,.8vw,11px)] font-bold text-[#10233f]">{x}</div>)}</div></div></div>}</div>}
    </div>
  </div>;
}

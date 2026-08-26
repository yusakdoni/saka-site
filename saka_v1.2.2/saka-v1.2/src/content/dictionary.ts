export type Lang = "id" | "en";

export interface Dictionary {
  nav: {
    home: string;
    services: string;
    ourWork: string;
    clientImpact: string;
    ourCompany: string;
    workWithUs: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
  };
  stats: {
    title: string;
    items: { n: string; l: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    sub: string;
    cta: string;
  };
  industries: {
    eyebrow: string;
    title: string;
    sub: string;
    cta: string;
    approachLabel: string;
    challengesLabel: string;
    helpLabel: string;
    diagnosticNote: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    sub: string;
    phases: { t: string; d: string }[];
  };
  impact: {
    eyebrow: string;
    title: string;
    sub: string;
    leversTitle: string;
    levers: { t: string; d: string }[];
    commitmentTitle: string;
    commitment: string;
    note: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    valuesTitle: string;
    values: { t: string; d: string }[];
    disclaimer: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    sub: string;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      industry: string;
      service: string;
      message: string;
      submit: string;
      submitting: string;
      selectPlaceholder: string;
      success: string;
      error: string;
      required: string;
      invalidEmail: string;
    };
    infoTitle: string;
    officeLabel: string;
    officeVal: string;
    hoursLabel: string;
    hoursVal: string;
    emailLabel: string;
  };
  footer: {
    tagline: string;
    desc: string;
    nav: string;
    contactTitle: string;
    rights: string;
  };
  chat: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    greeting: string;
    leadCta: string;
    unavailable: string;
    openLabel: string;
  };
  leadForm: {
    title: string;
    sub: string;
    submit: string;
    success: string;
  };
  misc: {
    readMore: string;
    backToIndustries: string;
    backToServices: string;
  };
}

export const dictionary: Record<Lang, Dictionary> = {
  id: {
    nav: {
      home: "Beranda",
      services: "Layanan",
      ourWork: "Portofolio Kerja",
      clientImpact: "Dampak untuk Klien",
      ourCompany: "Perusahaan Kami",
      workWithUs: "Kerja Sama",
      cta: "Konsultasi Gratis",
    },
    hero: {
      eyebrow: "STRATEGY & OPERATIONS CONSULTING",
      headline: "Mitra Strategi Bisnis untuk Pertumbuhan yang Terukur",
      sub: "SAKA Solusindo membantu perusahaan Indonesia menerjemahkan tantangan operasional dan bisnis menjadi rencana aksi yang jelas — dari diagnosis hingga eksekusi di lapangan.",
      ctaPrimary: "Diskusikan Kebutuhan Anda",
      ctaSecondary: "Lihat Layanan Kami",
      trust: "Dipercaya oleh tim di berbagai sektor industri di Indonesia",
    },
    stats: {
      title: "Bagaimana kami bekerja",
      items: [
        { n: "4–6 minggu", l: "Durasi diagnostik awal yang tipikal" },
        { n: "Diagnose → Design → Pilot → Scale", l: "Pendekatan bertahap, berbasis bukti" },
        { n: "Editable deliverables", l: "PowerPoint, Excel, dokumen kerja — bukan black box" },
      ],
    },
    services: {
      eyebrow: "LAYANAN",
      title: "Layanan terintegrasi dari strategi hingga eksekusi",
      sub: "Tujuh pilar layanan yang saling terhubung, dirancang untuk menutup kesenjangan antara rencana strategis dan hasil operasional di lapangan.",
      cta: "Pelajari Layanan",
    },
    industries: {
      eyebrow: "INDUSTRI",
      title: "Sektor industri yang kami pahami",
      sub: "Setiap industri punya dinamika berbeda. Berikut area fokus kami dan cara kami biasanya membantu.",
      cta: "Lihat Pendekatan Kami",
      approachLabel: "Pendekatan Kami",
      challengesLabel: "Tantangan Umum di Industri Ini",
      helpLabel: "Bagaimana Kami Dapat Membantu",
      diagnosticNote: "Durasi diagnostik awal tipikal: 4–6 minggu, sebelum business case divalidasi bersama.",
    },
    approach: {
      eyebrow: "METODOLOGI",
      title: "Pendekatan kerja kami",
      sub: "Empat fase yang sama kami gunakan di setiap engagement, disesuaikan dengan skala dan kebutuhan klien.",
      phases: [
        { t: "Diagnose", d: "Memahami kondisi saat ini melalui data dan diskusi dengan tim Anda — biasanya 4–6 minggu untuk mendapatkan hipotesis prioritas." },
        { t: "Design", d: "Merancang target operating model, business case, dan rencana implementasi yang realistis untuk organisasi Anda." },
        { t: "Pilot", d: "Menjalankan pilot pada scope terbatas untuk memvalidasi pendekatan sebelum scale-up penuh." },
        { t: "Scale", d: "Rollout bertahap dengan transfer kapabilitas ke tim internal, sehingga Anda tidak bergantung pada kami selamanya." },
      ],
    },
    impact: {
      eyebrow: "CLIENT IMPACT",
      title: "Bagaimana kami mendefinisikan dampak",
      sub: "Kami tidak mempublikasikan angka atau nama klien tanpa izin. Berikut adalah kerangka kerja yang kami pakai untuk mengukur dampak pada setiap engagement — bukan klaim hasil yang sudah tercapai.",
      leversTitle: "Kategori pengungkit nilai yang biasa kami telaah",
      levers: [
        { t: "Pertumbuhan Pendapatan", d: "Efektivitas harga, mix produk/channel, dan disiplin komersial." },
        { t: "Efisiensi Biaya", d: "Produktivitas proses, pengadaan, dan struktur biaya operasional." },
        { t: "Modal Kerja", d: "Perputaran inventori, piutang, dan siklus kas." },
        { t: "Kapabilitas Organisasi", d: "Kecepatan pengambilan keputusan dan transfer kemampuan ke tim internal." },
      ],
      commitmentTitle: "Komitmen kami",
      commitment: "Setiap angka yang kami sajikan ke klien harus bisa divalidasi bersama tim finance klien — bukan disajikan berdasarkan narasi semata. Kami membangun KPI cockpit bersama tim Anda sejak fase awal, sehingga dampak dapat dilacak secara real-time, bukan hanya dilaporkan di akhir project.",
      note: "Kami belum memiliki studi kasus publik yang dapat dibagikan saat ini. Hubungi kami untuk mendiskusikan referensi kerja sesuai konteks industri Anda.",
    },
    about: {
      eyebrow: "TENTANG SAKA",
      title: "Partner independen untuk transformasi bisnis dan operasional",
      body1: "SAKA Solusindo adalah firma konsultasi independen yang membantu perusahaan di Indonesia menutup kesenjangan antara strategi dan eksekusi — melalui pendekatan yang berbasis data, praktis, dan disesuaikan dengan realitas operasional di lapangan.",
      body2: "Kami bekerja secara embedded bersama tim klien, bukan sekadar memberi laporan dari jauh. Setiap deliverable diberikan dalam format yang dapat diedit dan digunakan sendiri oleh tim Anda setelah engagement selesai.",
      valuesTitle: "Yang kami pegang teguh",
      values: [
        { t: "Berbasis bukti", d: "Setiap rekomendasi dapat ditelusuri ke data, bukan asumsi semata." },
        { t: "Transparan", d: "Kami tidak membuat klaim atau janji yang tidak dapat kami pertanggungjawabkan." },
        { t: "Kolaboratif", d: "Kami bekerja bersama tim Anda, dan mentransfer kapabilitas — bukan menciptakan ketergantungan." },
      ],
      disclaimer:
        "SAKA Solusindo adalah firma konsultasi independen dan tidak berafiliasi dengan firma konsultansi global manapun. Seluruh metodologi dan kerangka kerja merupakan pendekatan kerja SAKA Solusindo.",
    },
    contact: {
      eyebrow: "KONTAK",
      title: "Ceritakan kebutuhan project Anda",
      sub: "Isi form berikut dan tim kami akan menghubungi Anda untuk menjadwalkan diskusi awal — biasanya dalam 1–2 hari kerja.",
      form: {
        name: "Nama Lengkap",
        company: "Perusahaan",
        email: "Email",
        phone: "No. HP / WhatsApp",
        industry: "Industri",
        service: "Layanan yang Dibutuhkan",
        message: "Ceritakan kebutuhan atau tantangan Anda",
        submit: "Kirim Pengajuan",
        submitting: "Mengirim...",
        selectPlaceholder: "Pilih salah satu",
        success: "Terima kasih! Pengajuan Anda telah kami terima. Tim kami akan menghubungi Anda segera.",
        error: "Terjadi kesalahan saat mengirim. Silakan coba lagi atau hubungi kami langsung via email.",
        required: "Wajib diisi",
        invalidEmail: "Format email tidak valid",
      },
      infoTitle: "Informasi Kontak",
      officeLabel: "Kantor",
      officeVal: "Jakarta, Indonesia",
      hoursLabel: "Jam Operasional",
      hoursVal: "Senin–Jumat, 09.00–18.00 WIB",
      emailLabel: "Email",
    },
    footer: {
      tagline: "Smart Solutions. Stronger Together.",
      desc: "Mitra strategi bisnis dan operasional untuk perusahaan di Indonesia.",
      nav: "Navigasi",
      contactTitle: "Kontak",
      rights: "Seluruh hak cipta dilindungi.",
    },
    chat: {
      title: "SAKA Assistant",
      subtitle: "Biasanya membalas dalam beberapa detik",
      placeholder: "Tulis pertanyaan Anda...",
      send: "Kirim",
      greeting:
        "Halo! Saya asisten SAKA Solusindo. Ada yang bisa saya bantu terkait kebutuhan project atau layanan Anda?",
      leadCta: "Saya Tertarik / Hubungi Saya",
      unavailable: "Maaf, assistant sedang tidak tersedia. Silakan kirim project inquiry melalui form dan kami akan menghubungi Anda.",
      openLabel: "Chat dengan SAKA Assistant",
    },
    leadForm: {
      title: "Hubungi Saya",
      sub: "Tinggalkan detail Anda, tim SAKA akan segera menghubungi.",
      submit: "Kirim",
      success: "Terima kasih! Kami akan segera menghubungi Anda.",
    },
    misc: {
      readMore: "Selengkapnya",
      backToIndustries: "Kembali ke semua industri",
      backToServices: "Kembali ke semua layanan",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      ourWork: "Our Work",
      clientImpact: "Client Impact",
      ourCompany: "Our Company",
      workWithUs: "Work With Us",
      cta: "Free Consultation",
    },
    hero: {
      eyebrow: "STRATEGY & OPERATIONS CONSULTING",
      headline: "A Business Strategy Partner for Measurable Growth",
      sub: "SAKA Solusindo helps Indonesian companies turn operational and business challenges into clear action plans — from diagnosis through on-the-ground execution.",
      ctaPrimary: "Discuss Your Needs",
      ctaSecondary: "See Our Services",
      trust: "Trusted by teams across multiple industries in Indonesia",
    },
    stats: {
      title: "How we work",
      items: [
        { n: "4–6 weeks", l: "Typical initial diagnostic duration" },
        { n: "Diagnose → Design → Pilot → Scale", l: "A phased, evidence-first approach" },
        { n: "Editable deliverables", l: "PowerPoint, Excel, working documents — not a black box" },
      ],
    },
    services: {
      eyebrow: "SERVICES",
      title: "Services integrated from strategy through execution",
      sub: "Seven interconnected service pillars, designed to close the gap between strategic plans and operational results on the ground.",
      cta: "Explore Services",
    },
    industries: {
      eyebrow: "INDUSTRIES",
      title: "Sectors we understand",
      sub: "Every industry has different dynamics. Here's where we focus and how we typically help.",
      cta: "See Our Approach",
      approachLabel: "Our Approach",
      challengesLabel: "Common Challenges in This Industry",
      helpLabel: "How We Can Help",
      diagnosticNote: "Typical initial diagnostic duration: 4–6 weeks, before a validated business case is presented.",
    },
    approach: {
      eyebrow: "METHODOLOGY",
      title: "How we work",
      sub: "The same four phases we use in every engagement, scaled to your organization's needs.",
      phases: [
        { t: "Diagnose", d: "Understanding the current state through data and discussions with your team — typically 4–6 weeks to reach a prioritized hypothesis list." },
        { t: "Design", d: "Designing the target operating model, business case, and a realistic implementation plan for your organization." },
        { t: "Pilot", d: "Running a pilot on a limited scope to validate the approach before full scale-up." },
        { t: "Scale", d: "Phased rollout with capability transfer to your internal team, so you're not dependent on us forever." },
      ],
    },
    impact: {
      eyebrow: "CLIENT IMPACT",
      title: "How we define impact",
      sub: "We don't publish figures or client names without permission. Below is the framework we use to measure impact on every engagement — not a claim of results already achieved.",
      leversTitle: "Value-creation lever categories we typically assess",
      levers: [
        { t: "Revenue Growth", d: "Pricing effectiveness, product/channel mix, and commercial discipline." },
        { t: "Cost Efficiency", d: "Process productivity, procurement, and operating cost structure." },
        { t: "Working Capital", d: "Inventory turnover, receivables, and cash cycle." },
        { t: "Organizational Capability", d: "Decision-making speed and capability transfer to your internal team." },
      ],
      commitmentTitle: "Our commitment",
      commitment: "Every figure we present to a client must be verifiable together with the client's own finance team — never presented on narrative alone. We build a KPI cockpit alongside your team from the early phase, so impact can be tracked in real time, not just reported at the end of a project.",
      note: "We don't have publishable case studies to share at this time. Get in touch to discuss reference work relevant to your industry context.",
    },
    about: {
      eyebrow: "ABOUT SAKA",
      title: "An independent partner for business and operational transformation",
      body1: "SAKA Solusindo is an independent consulting firm that helps companies in Indonesia close the gap between strategy and execution — through an approach that is data-driven, practical, and grounded in on-the-ground operational realities.",
      body2: "We work embedded alongside client teams, not just delivering reports from a distance. Every deliverable is handed over in an editable format your team can keep using after the engagement ends.",
      valuesTitle: "What we hold onto",
      values: [
        { t: "Evidence-based", d: "Every recommendation can be traced back to data, not assumption alone." },
        { t: "Transparent", d: "We don't make claims or promises we can't stand behind." },
        { t: "Collaborative", d: "We work alongside your team and transfer capability — not create dependency." },
      ],
      disclaimer:
        "SAKA Solusindo is an independent consulting firm and is not affiliated with any global consulting firm. All methodologies and frameworks are SAKA Solusindo's own working approach.",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Tell us about your project",
      sub: "Fill in the form below and our team will reach out to schedule an initial discussion — usually within 1–2 business days.",
      form: {
        name: "Full Name",
        company: "Company",
        email: "Email",
        phone: "Phone / WhatsApp",
        industry: "Industry",
        service: "Service Needed",
        message: "Tell us about your needs or challenges",
        submit: "Send Inquiry",
        submitting: "Sending...",
        selectPlaceholder: "Select one",
        success: "Thank you! We've received your inquiry and will get back to you shortly.",
        error: "Something went wrong while sending. Please try again or email us directly.",
        required: "Required",
        invalidEmail: "Invalid email format",
      },
      infoTitle: "Contact Information",
      officeLabel: "Office",
      officeVal: "Jakarta, Indonesia",
      hoursLabel: "Business Hours",
      hoursVal: "Monday–Friday, 09:00–18:00 (WIB)",
      emailLabel: "Email",
    },
    footer: {
      tagline: "Smart Solutions. Stronger Together.",
      desc: "A business and operational strategy partner for companies in Indonesia.",
      nav: "Navigation",
      contactTitle: "Contact",
      rights: "All rights reserved.",
    },
    chat: {
      title: "SAKA Assistant",
      subtitle: "Usually replies within seconds",
      placeholder: "Type your question...",
      send: "Send",
      greeting: "Hi! I'm the SAKA Solusindo assistant. Happy to help with questions about our services or your project.",
      leadCta: "I'm Interested / Contact Me",
      unavailable: "Sorry, the assistant is currently unavailable. Please send a project inquiry through the form and we'll get back to you.",
      openLabel: "Chat with SAKA Assistant",
    },
    leadForm: {
      title: "Contact Me",
      sub: "Leave your details and the SAKA team will reach out soon.",
      submit: "Send",
      success: "Thank you! We'll be in touch shortly.",
    },
    misc: {
      readMore: "Read more",
      backToIndustries: "Back to all industries",
      backToServices: "Back to all services",
    },
  },
};

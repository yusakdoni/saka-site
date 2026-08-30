import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { site } from "@/content/site";
import { generalFaq } from "@/content/faq";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Ceritakan kebutuhan bisnis Anda dan konsultasikan solusi teknologi yang tepat bersama SAKA.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-soft">
        <div className="container-page py-16 md:py-24">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-accent">Kontak</p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold tracking-tight text-ink md:text-5xl">
            Ceritakan Kebutuhan Bisnis Anda
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Isi formulir di bawah dan tim kami akan menghubungi Anda untuk menjadwalkan sesi
            konsultasi awal.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl2 border border-line bg-white p-6 md:p-8">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl2 border border-line bg-soft p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Kontak Langsung</h3>
              <ul className="space-y-4 text-sm text-ink">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
                  <a href={`mailto:${site.contact.email}`} className="hover:text-accent">
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle size={18} className="mt-0.5 shrink-0 text-accent" />
                  <a
                    href={`https://wa.me/${site.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    className="hover:text-accent"
                  >
                    {site.contact.whatsapp}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  {site.contact.address}
                </li>
              </ul>
            </div>

            <div className="rounded-xl2 border border-line p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">Pertanyaan Umum</h3>
              <div className="space-y-5">
                {generalFaq.map((f) => (
                  <div key={f.question}>
                    <p className="mb-1 text-sm font-medium text-ink">{f.question}</p>
                    <p className="text-sm leading-relaxed text-muted">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

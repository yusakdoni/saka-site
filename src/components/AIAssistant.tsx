"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Halo! Saya asisten SAKA. Ceritakan kebutuhan bisnis atau tantangan teknologi Anda, saya bantu arahkan ke solusi yang tepat.",
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || "Maaf, terjadi kendala. Silakan hubungi kami via halaman Kontak." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Maaf, terjadi kendala teknis. Silakan hubungi kami melalui halaman Kontak." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Tutup asisten" : "Buka asisten SAKA"}
        aria-expanded={open}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      >
        {open ? <X size={21} /> : <MessageCircle size={21} />}
      </button>

      {open && (
        <div className="fixed inset-0 z-[70] flex flex-col bg-white sm:inset-auto sm:bottom-24 sm:right-5 sm:h-[70vh] sm:max-h-[520px] sm:w-[92vw] sm:max-w-sm sm:overflow-hidden sm:rounded-xl2 sm:border sm:border-line sm:shadow-2xl">
          <div className="flex items-center justify-between border-b border-line bg-navy px-5 pb-4 pt-[calc(env(safe-area-inset-top)+1rem)] text-white sm:py-4">
            <div>
              <p className="text-sm font-semibold">Asisten SAKA</p>
              <p className="text-xs text-white/60">Biasanya membalas dalam hitungan detik</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Tutup asisten" className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10 sm:hidden">
              <X size={22} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "ml-auto bg-accent text-white" : "bg-soft text-ink"}`}>{m.content}</div>
            ))}
            {loading && <div className="flex w-fit items-center gap-2 rounded-lg bg-soft px-3.5 py-2.5 text-sm text-muted"><Loader2 size={14} className="animate-spin" />Mengetik...</div>}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-line px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 sm:p-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tulis pesan..." className="min-w-0 flex-1 rounded-full border border-line px-4 py-2.5 text-base focus:border-accent focus:outline-none sm:text-sm" />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Kirim" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-white disabled:opacity-50"><Send size={17} /></button>
          </form>
        </div>
      )}
    </>
  );
}

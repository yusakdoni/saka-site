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
      <button type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Tutup asisten" : "Buka asisten SAKA"} className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform hover:scale-105">
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[70vh] max-h-[520px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-xl2 border border-line bg-white shadow-2xl">
          <div className="border-b border-line bg-navy px-5 py-4 text-white">
            <p className="text-sm font-semibold">Asisten SAKA</p>
            <p className="text-xs text-white/60">Biasanya membalas dalam hitungan detik</p>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[85%] rounded-lg px-3.5 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "ml-auto bg-accent text-white" : "bg-soft text-ink"}`}>{m.content}</div>
            ))}
            {loading && <div className="flex w-fit items-center gap-2 rounded-lg bg-soft px-3.5 py-2.5 text-sm text-muted"><Loader2 size={14} className="animate-spin" />Mengetik...</div>}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-line p-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tulis pesan..." className="flex-1 rounded-full border border-line px-4 py-2 text-sm focus:border-accent focus:outline-none" />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Kirim" className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-white disabled:opacity-50"><Send size={16} /></button>
          </form>
        </div>
      )}
    </>
  );
}

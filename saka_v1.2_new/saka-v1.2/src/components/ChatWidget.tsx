"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LanguageProvider";
import LeadMiniForm from "./LeadMiniForm";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatWidget() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "assistant", content: t.chat.greeting }]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-12), lang }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply || t.chat.unavailable }]);
      setUnavailable(Boolean(data.unavailable));
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: t.chat.unavailable }]);
      setUnavailable(true);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    sendMessage(text);
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t.chat.openLabel}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-saka-blue text-white shadow-lg transition hover:bg-saka-navy"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 4l14 14M18 4 4 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.1-3.4A7.96 7.96 0 0 1 4 12Z"
              stroke="white"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[min(560px,75vh)] w-[min(380px,92vw)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
          <div className="flex items-center gap-3 bg-saka-navy px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-saka-blue text-sm font-bold text-white">
              S
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{t.chat.title}</p>
              <p className="text-xs text-white/60">{t.chat.subtitle}</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-saka-bg p-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm ${
                    m.role === "user"
                      ? "rounded-br-sm bg-saka-blue text-white"
                      : "rounded-bl-sm border border-black/5 bg-white text-saka-navy"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border border-black/5 bg-white px-3.5 py-2.5 text-sm text-saka-gray">
                  ···
                </div>
              </div>
            )}

            {messages.length > 0 && !showLeadForm && (
              <div className="flex justify-start">
                <button
                  onClick={() => setShowLeadForm(true)}
                  className="rounded-full border border-saka-blue px-3.5 py-1.5 text-xs font-semibold text-saka-blue hover:bg-saka-blue hover:text-white"
                >
                  {t.chat.leadCta}
                </button>
              </div>
            )}

            {showLeadForm && <LeadMiniForm onDone={() => {}} />}
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-black/5 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chat.placeholder}
              className="field-input flex-1 !py-2 text-sm"
              maxLength={2000}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="btn-primary !px-4 !py-2 text-sm disabled:opacity-50"
            >
              {t.chat.send}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

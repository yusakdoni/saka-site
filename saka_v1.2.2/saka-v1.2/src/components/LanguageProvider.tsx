"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { dictionary, type Lang, type Dictionary } from "@/content/dictionary";

type Ctx = {
  lang: Lang;
  t: Dictionary;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("saka_lang") : null;
    if (saved === "id" || saved === "en") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("saka_lang", l);
      document.documentElement.lang = l;
    }
  }, []);

  const toggleLang = useCallback(() => setLang(lang === "id" ? "en" : "id"), [lang, setLang]);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionary[lang], setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

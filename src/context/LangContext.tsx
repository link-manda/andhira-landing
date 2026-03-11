"use client";

import React, { createContext, useContext, useState } from "react";
import { content, type Lang } from "@/lib/i18n";

// We derive the content type loosely so both 'id' and 'en' variants are compatible
type ContentType = typeof content.id;

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: ContentType;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  const value: LangContextType = {
    lang,
    setLang,
    // Cast: both 'id' and 'en' have identical structure, just different literal values
    t: content[lang] as ContentType,
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextType {
  const context = useContext(LangContext);
  if (context === undefined) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}

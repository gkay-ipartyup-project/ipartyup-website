"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { translations, TranslationSchema } from "./translations"

export type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationSchema
  dir: "ltr" | "rtl"
  isArabic: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en,
  dir: "ltr",
  isArabic: false,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ipartyup_language") as Language | null
      if (saved === "ar" || saved === "en") {
        setLanguageState(saved)
      }
    } catch {
      // localStorage might be unavailable
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    try {
      localStorage.setItem("ipartyup_language", language)
    } catch {}

    const isAr = language === "ar"
    document.documentElement.lang = language
    document.documentElement.dir = isAr ? "rtl" : "ltr"
    if (isAr) {
      document.documentElement.classList.add("rtl")
    } else {
      document.documentElement.classList.remove("rtl")
    }
  }, [language, mounted])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const isArabic = language === "ar"
  const dir = isArabic ? "rtl" : "ltr"
  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isArabic }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}

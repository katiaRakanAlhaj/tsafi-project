import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "../locale/en.json";
import arJSON from "../locale/ar.json";

const resources = {
  en: { translation: enJSON },
  ar: { translation: arJSON },
};

/**
 * Single source of truth for the initial language:
 * 1. URL wins  (/en/... or /ar/...)
 * 2. Otherwise localStorage
 * 3. Otherwise Arabic
 *
 * This MUST match the logic in router.js (getSavedLanguage).
 */
const getInitialLanguage = () => {
  const path = window.location.pathname;
  const match = path.match(/^\/(en|ar)(\/|$)/);
  if (match) return match[1];

  const stored = localStorage.getItem("language");
  if (stored === "en" || stored === "ar") return stored;

  return "ar";
};

const language = getInitialLanguage();

i18n.use(initReactI18next).init(
  {
    resources,
    fallbackLng: "ar",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    lng: language,
  },
  (err) => {
    if (err) {
      console.log("i18next init error:", err);
      return;
    }
    console.log("i18next initialized with language:", language);

    // Set RTL/LTR immediately to avoid flash
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }
);

export default i18n;
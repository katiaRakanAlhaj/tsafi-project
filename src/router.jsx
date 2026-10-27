import {
  createBrowserRouter,
  Outlet,
  redirect,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Wrapper from "./component/wrapper/wrapper";
import Home from "./pages/Home";

const SUPPORTED_LANGS = ["en", "ar"];
const DEFAULT_LANG = "ar";

function isSupported(lang) {
  return !!lang && SUPPORTED_LANGS.includes(lang);
}

function getSavedLanguage() {
  const stored = localStorage.getItem("language");
  return isSupported(stored) ? stored : DEFAULT_LANG;
}

function resolveLanguage(paramLang) {
  return isSupported(paramLang) ? paramLang : getSavedLanguage();
}

function applyLanguage(lang, i18n) {
  const isArabic = lang === "ar";
  const html = document.documentElement;

  if (i18n && i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }
  html.lang = lang;
  html.dir = isArabic ? "rtl" : "ltr";
  html.style.fontFamily = '"Montserrat", sans-serif';
  localStorage.setItem("language", lang);
}

// ---------- Layouts ----------

function LanguageLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const activeLang = resolveLanguage(lang);

  useEffect(() => {
    applyLanguage(activeLang, i18n);
  }, [activeLang, i18n]);

  return <Outlet />;
}

// ---------- Router ----------

export const router = createBrowserRouter([
  // 1. Exact root → single redirect, nothing else.
  {
    path: "/",
    loader: () => redirect(`/${getSavedLanguage()}`),
  },

  // 2. Language-scoped routes. NOT children of "/" — this is the key fix.
  {
    path: "/:lang",
    loader: ({ params }) => {
      if (!isSupported(params.lang)) {
        throw redirect(`/${getSavedLanguage()}`);
      }
      return null;
    },
    element: <LanguageLayout />,
    children: [
      {
        // Pathless layout: Navbar + Footer + Outlet
        element: <Wrapper />,
        children: [
          { index: true, element: <Home /> },
          // Add more pages here:
          // { path: "about", element: <About /> },
        ],
      },
    ],
  },

  // 3. Catch-all unknown URL → saved lang
  {
    path: "*",
    loader: () => redirect(`/${getSavedLanguage()}`),
  },
]);

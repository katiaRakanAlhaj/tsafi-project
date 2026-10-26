import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useParams,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wrapper from "./component/wrapper/wrapper";
import Home from "./pages/Home";
import "../src/i18n/i18n"; // Ensure i18n is imported and executed
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      refetchIntervalInBackground: true,
      retry: 2,
      networkMode: "always",
    },
  },
});

function LanguageHandler() {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // Resolve language from URL parameter or fallback to localStorage / "ar"
  let languageToUse = lang;
  if (languageToUse !== "en" && languageToUse !== "ar") {
    languageToUse = localStorage.getItem("language") || "ar";
  }

  useEffect(() => {
    if (i18n && typeof i18n.changeLanguage === "function" && i18n.language !== languageToUse) {
      i18n.changeLanguage(languageToUse);
    }

    const isArabic = languageToUse === "ar";
    const html = document.documentElement;

    html.lang = languageToUse;
    html.dir = isArabic ? "rtl" : "ltr";
    html.style.fontFamily = '"Montserrat", sans-serif';

    localStorage.setItem("language", languageToUse);
  }, [languageToUse, i18n]);

  // If user visits root "/", redirect them to their active language URL
  useEffect(() => {
    if (!lang) {
      navigate(`/${languageToUse}`, { replace: true });
    }
  }, [lang, languageToUse, navigate]);

  return <Outlet />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LanguageHandler />}>
      <Route path="/:lang" element={<Wrapper />}>
        <Route index element={<Home />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
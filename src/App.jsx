import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useParams,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wrapper from "./component/wrapper/wrapper";

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

  // Resolve a valid language code from URL → localStorage → default "ar"
  let languageToUse = lang;
  if (languageToUse !== "en" && languageToUse !== "ar") {
    languageToUse = localStorage.getItem("language") || "ar";
  }

  useEffect(() => {
    // Guard — only call if i18n is a real i18next instance
    if (
      i18n &&
      typeof i18n.changeLanguage === "function" &&
      i18n.language !== languageToUse
    ) {
      i18n.changeLanguage(languageToUse);
    }

    const isArabic = languageToUse === "ar";
    const html = document.documentElement;

    html.lang = languageToUse;
    html.dir = isArabic ? "rtl" : "ltr";

    localStorage.setItem("language", languageToUse);
  }, [languageToUse, i18n]);

  // If the user hits "/" with no lang, send them to their resolved language
  useEffect(() => {
    if (!lang) {
      navigate(`/${languageToUse}`, { replace: true });
    }
  }, [lang, languageToUse, navigate]);

  return <Outlet />;
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<LanguageHandler />}>
        <Route path="/" element={<Navigate to="/ar" replace />} />

        <Route path="/:lang" element={<Wrapper />}>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Route>,
    ),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
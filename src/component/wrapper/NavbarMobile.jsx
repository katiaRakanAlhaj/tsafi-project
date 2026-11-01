import { useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/images/logo.svg";

const navLinks = [
  { key: "Business", path: "#" },
  { key: "About", path: "About" },
  { key: "sign_up", path: "#" },
  { key: "login", path: "#" },
];

const NavbarMobile = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const isAr = i18n.language.startsWith("ar");

  const toggleLanguage = async () => {
    const newLang = isAr ? "en" : "ar";
    try {
      await i18n.changeLanguage(newLang);
      localStorage.setItem("language", newLang);

      const currentPath = location.pathname;
      const updatedPath = lang
        ? currentPath.replace(/^\/[^/]+/, `/${newLang}`)
        : `/${newLang}${currentPath === "/" ? "" : currentPath}`;

      navigate(`${updatedPath}${location.search}${location.hash}`);
      window.location.assign(`${updatedPath}${location.search}${location.hash}`);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <div className="relative z-10 w-full lg:hidden">
      <div className="w-full bg-primary">
        <div className="flex justify-between items-center h-[5rem] px-4 w-full">
          {/* Logo */}
          <Link to={`/${isAr ? "ar" : "en"}`} className="flex items-center">
            <img
              className="h-[2.5rem] w-auto object-contain"
              src={logo}
              alt="TSAFI Logo"
            />
          </Link>

          {/* Right side: Language + Hamburger */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={toggleLanguage}
              className="text-white font-bold text-[1rem] hover:text-white/80 transition-colors cursor-pointer"
              aria-label="Change language"
            >
              {isAr ? "EN" : "AR"}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-white cursor-pointer p-1"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                // Close (X) icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="bg-primary border-t border-white/10 px-4 pb-4">
            <nav className="flex flex-col gap-3 text-white text-[1.1rem]">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-white/80 transition-colors py-2"
                >
                  {t(`menu.${link.key}`)}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="mt-3 w-full bg-white text-primary font-bold px-[1.6rem] py-[0.8rem] rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap text-[1rem] cursor-pointer"
            >
              {t("download_app")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarMobile;
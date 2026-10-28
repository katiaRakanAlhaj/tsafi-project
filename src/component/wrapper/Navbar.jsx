
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/images/logo.svg";

const navLinks = [
  { key: "Business", path: "#" },
  { key: "About", path: "About" },
  { key: "sign_up", path: "#" },
  { key: "login", path: "#" },
];

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();

  const isAr = i18n.language.startsWith("ar");

  const toggleLanguage = async () => {
    const newLang = isAr ? "en" : "ar";

    try {
      await i18n.changeLanguage(newLang);

      localStorage.setItem("language", newLang);

      // Replace the current language in the URL.
      const currentPath = location.pathname;
      const updatedPath = lang
        ? currentPath.replace(/^\/[^/]+/, `/${newLang}`)
        : `/${newLang}${currentPath === "/" ? "" : currentPath}`;

      navigate(`${updatedPath}${location.search}${location.hash}`);

      // Reload after the URL has been updated.
      window.location.assign(
        `${updatedPath}${location.search}${location.hash}`
      );
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <div className="relative z-10 w-full">
      <div className="w-full bg-primary">
        <div className="container5 mx-auto flex justify-between items-center h-[7rem] px-4 w-full">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to={`/${isAr ? "ar" : "en"}`}>
              <img
                className="w-[13rem] object-contain"
                src={logo}
                alt="TSAFI Logo"
              />
            </Link>
          </div>

          {/* Navigation links and language controls */}
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-5 text-white text-[1.2rem] font-normal">
              {navLinks.map((link, index) => (
                <div
                  key={link.key}
                  className="flex items-center gap-4"
                >
                  <Link
                    to={link.path}
                    className="hover:text-white/80 transition-colors"
                  >
                    {t(`menu.${link.key}`)}
                  </Link>

                  {index !== navLinks.length - 1 && (
                    <span className="text-white/40">|</span>
                  )}
                </div>
              ))}
            </nav>

            {/* Download button */}
            <button
              type="button"
              className="bg-white text-primary font-bold px-[1.6rem] py-[1rem] rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap text-[1.1rem] cursor-pointer"
            >
              {t("download_app")}
            </button>

            {/* Language toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="text-white font-bold hover:text-white/80 transition-colors cursor-pointer"
              aria-label="Change language"
            >
              {isAr ? "EN" : "AR"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

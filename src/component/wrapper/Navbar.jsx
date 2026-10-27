import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.svg";

// ✅ 1. Move the array OUTSIDE the component (just like your second file)
// We only store the `key` here, NOT the translated text.
const navLinks = [
  { key: "Business", path: "#" },
  { key: "About", path: "#" },
  { key: "sign_up", path: "#" },
  { key: "login", path: "#" },
];

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const isAr = i18n.language === "ar";

  // Function to toggle language
  const toggleLanguage = () => {
    i18n.changeLanguage(isAr ? "en" : "ar");
  };

  return (
    <div className="relative z-10 w-full">
      <div className="w-full bg-primary">
        <div className="container5 mx-auto flex justify-between items-center h-[7rem] px-4 w-full">
          {/* LEFT SIDE: Logo */}
          <div className="flex items-center gap-6">
            <Link to="/">
              <img
                className="w-[13rem] object-contain"
                src={logo}
                alt="TSAFI Logo"
              />
            </Link>
          </div>

          {/* RIGHT SIDE: Links, Button, EN/AR toggle */}
          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 text-white text-[1.2rem] font-normal">
              {navLinks.map((link, index) => (
                <div key={link.key} className="flex items-center gap-4">
                  <Link
                    to={link.path}
                    className="hover:text-white/80 transition-colors"
                  >
                    {/* ✅ 2. Use the key to translate here */}
                    {t(`menu.${link.key}`)} 
                  </Link>
                  {/* Divider Pipe (not shown on last item) */}
                  {index !== navLinks.length - 1 && (
                    <span className="text-white/40">|</span>
                  )}
                </div>
              ))}
            </nav>

            {/* Call to Action Button */}
            <button className="bg-white text-primary font-bold px-[1.6rem] py-[1rem] rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap text-[1.1rem] cursor-pointer">
              {t("download_app")}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="text-white font-bold hover:text-white/80 transition-colors cursor-pointer"
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
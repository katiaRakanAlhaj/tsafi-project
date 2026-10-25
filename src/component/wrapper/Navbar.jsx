import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // Navigation Links based on your image
  const navLinks = [
    { title: "تسجيل الدخول إلى متجري", path: "#" },
    { title: "سجّل كصاحب عمل", path: "#" },
    { title: "عن التطبيق", path: "#" },
    { title: "الأعمال", path: "#" },
  ];

  return (
    <div className="relative z-10 w-full">
      <div className="w-full bg-primary">
        {/* Container flexes in reverse if RTL, normal if LTR */}
        <div className="container1 mx-auto flex justify-between items-center h-[6.5rem] px-4">
          
        

          {/* RIGHT SIDE: Links, Button, EN toggle */}
          <div className="flex items-center gap-6">
            <p className="text-white">EN</p>
            {/* Call to Action Button */}
            <button className="bg-white text-primary font-bold px-[2.8rem] py-[0.8rem] rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap text-[1.3rem]">
              تحميل التطبيق
            </button>
            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 text-white text-[1.3rem] font-normal">
              {navLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Link to={link.path} className="hover:text-white/80 transition-colors">
                    {link.title}
                  </Link>
                  {/* Divider Pipe (not shown on last item) */}
                  {index !== navLinks.length - 1 && (
                    <span className="text-white/40">|</span>
                  )}
                </div>
              ))}
            </nav>


          </div>
            {/* LEFT SIDE: Logo */}
          <div className="flex items-center gap-6">
            <Link to="/">
              <img 
                className="w-[14rem] object-contain" 
                src={logo} 
                alt="TSAFI Logo" 
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
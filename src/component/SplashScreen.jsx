import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoMark from "@/assets/images/logo.svg";

const SPLASH_KEY = "hasSeenSplash";
const SPLASH_DURATION = 3500; // ms

const SplashScreen = () => {
  // Read sessionStorage synchronously so there is no flash on reload
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem(SPLASH_KEY);
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) return;

    // Prevent scrolling while the splash is visible
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem(SPLASH_KEY, "true");
      } catch {}
    }, SPLASH_DURATION);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center">
            {/* Logo */}
        {/* Logo */}
<motion.div
  role="img"
  aria-label="Tsafi"
  className="w-[10rem] h-[10rem] md:w-[13rem] md:h-[13rem]"
  style={{
    backgroundColor: "#0c6766",
    WebkitMaskImage: `url(${logoMark})`,
    maskImage: `url(${logoMark})`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  }}
  initial={{ scale: 1.2, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
/>

            {/* TSAFI word */}
            <motion.h1
              dir="ltr"
              lang="en"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              className="mt-6 text-[#0c6766] font-bold text-[2.5rem] md:text-[3.5rem] tracking-[1rem] md:tracking-[1.5rem] pl-[1rem] md:pl-[1.5rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              TSAFI
            </motion.h1>

            {/* Line animation */}
            <motion.div
              className="mt-6 h-[2px] bg-[#0c6766] w-24 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.6, duration: 1.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
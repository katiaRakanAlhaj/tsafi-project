import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import i18next from "i18next";
import bagImage from "@/assets/images/notFound.png"; // same bag image used in the error page

const PageNotFound = () => {
  const lang = i18next.language === "en" ? "en" : "ar";
  const isEnglish = lang === "en";

  return (
    <section
      className="w-full bg-[#F8F3EF] flex flex-col items-center text-center px-[1rem] pt-[3rem] pb-[3rem] md:pt-[7rem]"
      style={isEnglish ? { fontFamily: "'Montserrat', sans-serif" } : undefined}
    >
      {/* 404 number (always Montserrat, always LTR) */}
      <motion.h1
        dir="ltr"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="text-[#0f5c54] font-extrabold leading-none text-[6rem] lg:text-[11rem] md:text-[9rem]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Title */}
      <h2 className="mt-[0.5rem] text-[#0f5c54] font-extrabold text-[1.3rem] lg:text-[2.5rem] md:text-[2rem]">
        {i18next.t("notFound.title")}
      </h2>

      {/* Subtitle */}
      <p className="mt-[0.4rem] font-semibold text-[#0A5C58CC] text-[0.8rem] md:text-[1.1rem]">
        {i18next.t("notFound.message")}
      </p>

      {/* Bag + leaves */}
      <div className="relative mt-[2rem] flex items-center justify-center">
        {/* Left leaf */}

        <motion.img
          src={bagImage}
          alt="Tsafi"
          className="w-[20rem] md:w-[33rem] object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        {/* Right leaf */}
      </div>

      {/* Back to Home */}
      <Link
        to={`/${lang}`}
        className="mt-[2rem] w-[14rem] inline-flex items-center gap-x-[0.5rem] flex justify-center items-center h-[3rem] rounded-full bg-[#0f5c54] text-white text-lg font-bold font-semibold hover:opacity-90 transition-opacity"
      >
        <FaHome />
        {i18next.t("notFound.backHome")}
      </Link>
    </section>
  );
};

export default PageNotFound;

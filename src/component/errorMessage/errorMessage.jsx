import i18next from "i18next";
import { motion } from "framer-motion";
import bagImage from "@/assets/images/Bag Image 2.png"; // put your bag image here

const dots = [6, 8, 10, 12, 14]; // dot sizes in px, small to large

const ErrorMessageNetwork = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div
      className="inset-0 z-[9999] mt-[5rem] pb-[3rem] flex items-center justify-center bg-[#F8F3EF] px-[1.5rem] text-center"
      style={{ fontFamily: "'Montserrat', ShamelSansOne, sans-serif" }}
    >
      <div className="flex flex-col items-center max-w-[24rem]">
        {/* Bag image */}
        <img
          src={bagImage}
          alt="Tsafi"
          className="w-[11rem] md:w-[15rem] object-contain"
        />

        {/* Loading dots */}
        <div
          className="flex items-end gap-x-[0.2rem] mt-[2rem] h-[1.5rem]"
          dir="ltr"
        >
          {dots.map((size, i) => (
            <motion.span
              key={i}
              className="rounded-full bg-[#0c6766]"
              style={{ width: size, height: size }}
              animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Title */}
        <h2 className="mt-[3rem] text-[2rem] md:text-[2.5rem] font-extrabold text-[#0f5c54]">
          {i18next.t("errorMessage.errorOops")}
        </h2>

        {/* Message */}
        <p className="mt-[0.8rem] md:text-[1.2rem] text-[1rem] leading-relaxed text-[#0f5c54]">
          {i18next.t("errorMessage.errorMessage")}
        </p>

        {/* Retry button */}
        <button
          onClick={handleRetry}
          className="mt-[2rem] px-[2rem] h-[3rem] rounded-full border-2 border-[#0f5c54] bg-transparent text-[#0f5c54] text-[0.95rem] font-semibold transition-colors hover:bg-[#0f5c54] hover:text-white"
        >
          {i18next.t("errorMessage.errorRetryButton")}
        </button>
      </div>
    </div>
  );
};

export default ErrorMessageNetwork;

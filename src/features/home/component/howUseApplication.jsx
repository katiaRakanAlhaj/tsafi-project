import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const navButtonStyles =
  "w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-[#67D695] hover:bg-[#2ab59b] hover:text-white transition-all cursor-pointer";

// Left → right slide only (no vertical movement)
const textVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction === "forward" ? -80 : 80,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction === "forward" ? 80 : -80,
    transition: { duration: 0.15, ease: "easeIn" },
  }),
};

const HowUseApplication = ({ homePageData }) => {
  const { i18n } = useTranslation();
  const isEn = i18n.language?.startsWith("en");

  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  // Works whether the parent passes the full response, `data`, or the `sections` array
  const sections =
    homePageData?.data?.sections ??
    homePageData?.sections ??
    (Array.isArray(homePageData) ? homePageData : []);

  const howToUse = sections.find((s) => s.key === "how_to_use");

  const sectionTitle = howToUse?.title?.trim();
  const steps = (howToUse?.steps ?? []).map((step) => ({
    step: step?.title?.trim(),
    description: step?.description?.trim(),
    image: step?.image?.original,
  }));

  if (!steps.length) return null;

  const currentStep = steps[activeIndex] ?? steps[0];

  const handleNext = () => {
    setDirection("forward");
    swiperInstance?.slideNext();
  };

  const handlePrev = () => {
    setDirection("backward");
    swiperInstance?.slidePrev();
  };

  const handleGoTo = (index) => {
    setDirection(index > activeIndex ? "forward" : "backward");
    swiperInstance?.slideTo(index);
  };

  return (
    <div className="bg-primary w-full mt-[3rem] px-6 md:px-10 lg:px-24 py-[2.5rem] md:py-[4rem]">
      <div className="container4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-12 gap-[2rem] lg:gap-[4rem] items-center">
          {/* Phone: sm = middle, md/lg = left column */}
          <div className="order-2 md:order-none lg:col-span-5 flex justify-center md:justify-start">
            <div className="relative w-[16rem] h-[30rem] lg:w-[18.5rem] lg:h-[35rem] bg-black rounded-[3.125rem] p-[0.75rem] shadow-2xl border-4 border-[#222]">
              <div className="w-full h-full bg-white rounded-[2.375rem] overflow-hidden relative">
                <Swiper
                  modules={[Navigation, Pagination]}
                  onSwiper={setSwiperInstance}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  slidesPerView={1}
                  allowTouchMove={false}
                  className="w-full h-full"
                >
                  {steps.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.step}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Right column: "contents" on sm so text & nav become separate grid items */}
          <div className="contents md:flex md:flex-col md:justify-center min-w-0 lg:col-span-7 text-white lg:ml-[-8rem]">
            {/* Text: sm = top */}
            <div className="order-1 md:order-none relative min-h-[11rem] md:min-h-[16rem] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col"
                >
                  {sectionTitle && (
                    <div className="text-[#FFFB9B] font-bold text-lg md:text-xl lg:text-2xl uppercase">
                      {sectionTitle}
                    </div>
                  )}

                  {currentStep.step && (
                    <h2 className="text-2xl md:text-3xl font-extrabold mt-[1rem] md:mt-[2rem] tracking-wide">
                      {currentStep.step}
                    </h2>
                  )}

                  {currentStep.description && (
                    <p className="text-gray-200 mt-[1rem] md:mt-[2rem] w-full md:w-[90%] lg:w-[50%] text-base md:text-lg lg:text-xl max-w-xl mb-6 md:mb-10 leading-relaxed">
                      {currentStep.description}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation: sm = bottom */}
            <div className="order-3 md:order-none flex items-center gap-6">
              <button
                onClick={handlePrev}
                className={navButtonStyles}
                aria-label="Previous Slide"
              >
                <FiArrowLeft
                  className={isEn ? "" : "rotate-180"}
                  size={32}
                  strokeWidth={2.5}
                />
              </button>

              <div className="flex gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleGoTo(index)}
                    className={`h-3 w-3 rounded-full transition-all cursor-pointer ${
                      activeIndex === index ? "bg-[#67D695]" : "bg-[#0A4746]"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className={navButtonStyles}
                aria-label="Next Slide"
              >
                <FiArrowRight
                  className={isEn ? "" : "rotate-180"}
                  size={32}
                  strokeWidth={2.5}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowUseApplication;
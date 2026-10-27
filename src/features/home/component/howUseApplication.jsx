import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

import mob1 from "../../../assets/images/mob1.png";
import mob2 from "../../../assets/images/mob2.png";
import mob3 from "../../../assets/images/mob3.png";

const stepsData = [
  {
    step: "STEP ONE",
    title: "HOW TO USE THE APP",
    description:
      "Browse nearby stores, discover daily surprises, and choose your favorite items.",
    image: mob1,
  },
  {
    step: "STEP TWO",
    title: "HOW TO USE THE APP",
    description:
      "Confirm your choice, reserve your food, and pay through the app.",
    image: mob2,
  },
  {
    step: "STEP THREE",
    title: "HOW TO USE THE APP",
    description:
      "Pick up your order from the store at the scheduled time and enjoy your meal.",
    image: mob3,
  },
];

const navButtonStyles =
  "w-14 h-14 rounded-full flex items-center justify-center text-[#67D695] hover:bg-[#2ab59b] hover:text-white transition-all cursor-pointer";

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

const HowUseApplication = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("forward");

  const currentStep = stepsData[activeIndex];

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
    <div className="bg-primary w-full mt-[3rem] px-6 lg:px-24 py-[4rem]">
      <div className="container4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2rem] lg:gap-[4rem] items-center">
          {/* Left Column: Phone Frame with Swiper Inside */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-[18.5rem] h-[35rem] bg-black rounded-[3.125rem] p-[0.75rem] shadow-2xl border-4 border-[#222]">
              <div className="absolute top-[1.125rem] left-1/2 transform -translate-x-1/2 w-32 h-5 bg-black rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-[#222] rounded-full"></div>
              </div>

              <div className="w-full h-full bg-white rounded-[2.375rem] overflow-hidden relative">
                <Swiper
                  modules={[Navigation, Pagination]}
                  onSwiper={setSwiperInstance}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  slidesPerView={1}
                  allowTouchMove={false}
                  className="w-full h-full"
                >
                  {stepsData.map((item, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                      <img
                        src={item.image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Text & Custom Navigation */}
          <div className="lg:col-span-7 text-white flex flex-col justify-center lg:ml-[-8rem]">
            {/* Framer Motion animated text — left to right only */}
            <div className="relative min-h-[16rem] overflow-hidden">
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
                  <div className="text-[#FFFB9B] font-bold text-2xl uppercase">
                    {currentStep.title}
                  </div>

                  <h2 className="lg:text-3xl font-extrabold mt-[2rem] tracking-wide">
                    {currentStep.step}
                  </h2>

                  <p className="text-gray-200 mt-[2rem] w-[90%] md:w-[70%] lg:w-[50%] lg:text-xl max-w-xl mb-10 leading-relaxed">
                    {currentStep.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-6">
              <button
                onClick={handlePrev}
                className={navButtonStyles}
                aria-label="Previous Slide"
              >
                <FiArrowLeft size={32} strokeWidth={2.5} />
              </button>

              <div className="flex gap-2">
                {stepsData.map((_, index) => (
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
                <FiArrowRight size={32} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowUseApplication;

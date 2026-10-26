import i18next from "i18next";
import MarqueeModule from "react-fast-marquee";
const Marquee = MarqueeModule.default || MarqueeModule;
const HowUseApplication = () => {
  const isArabic = i18next.language == "ar";
  const categories = isArabic
    ? ["زهور", "بقالة", "بوريتو", "سلطات", "خبز", "سوشي", "برجر", "معجنات"]
    : [
        "FLOWERS",
        "GROCERIES",
        "BURRITO",
        "SALADS",
        "BREADS",
        "SUSHI",
        "BURGERS",
        "PASTRIES",
      ];

  return (
    <div className="w-full bg-[#004d40] py-4 overflow-hidden mt-[3rem]">
      <Marquee
        speed={100}
        gradient={false}
        pauseOnHover={false}
        autoFill={true}
        direction={isArabic ? "left" : "right"}
      >
        {categories.map((item, index) => (
          <span
            key={index}
            dir={isArabic ? "rtl" : "ltr"}
            className="text-white text-[1.5rem] font-bold mx-8 uppercase tracking-wider"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default HowUseApplication;

import { useTranslation } from "react-i18next";
import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default || MarqueeModule;

const Bar = ({ homePageData }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");
console.log("Bar homePageData:", homePageData);
  // Works whether the parent passes the full response, `data`, or the `sections` array
  const sections =
    homePageData?.data?.sections ??
    homePageData?.sections ??
    (Array.isArray(homePageData) ? homePageData : []);

  const ticker = sections.find((s) => s.key === "ticker");

  // API values contain stray spaces (e.g. "SALADS ", " PASTRIES"), so trim and drop empties
  const categories = (ticker?.items ?? [])
    .map((item) => item?.trim())
    .filter(Boolean);

  if (!categories.length) return null;

  return (
    <div
      dir="ltr"
      className="w-full bg-[#004d40] py-4 overflow-hidden md:mt-[3rem] mt-[2rem]"
    >
      <Marquee
        key={isArabic ? "ar" : "en"}
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
            className="text-white md:text-[1.5rem] text-[1.2rem] font-bold mx-8 uppercase tracking-wider"
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default Bar;
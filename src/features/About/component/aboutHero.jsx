import { useTranslation } from "react-i18next";

const AboutHero = ({ aboutPageData }) => {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language?.startsWith("ar");
  const isEn = i18n.language?.startsWith("en");

  // Works whether the parent passes the full response, `data`, or the `sections` array
  const sections =
    aboutPageData?.data?.sections ??
    aboutPageData?.sections ??
    (Array.isArray(aboutPageData) ? aboutPageData : []);

  const hero = sections.find((s) => s.key === "hero");

  const title = hero?.title?.trim();
  const description = hero?.description?.trim();
  const imageSrc = hero?.image?.original;

  if (!hero) return null;

  return (
    <div
      dir={"ltr"}
      className="relative w-full bg-primary lg:pb-[8rem] md:pb-[5rem] pb-[4rem]"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${isEn ? "gap-8" : ""} container6 mx-auto px-4 md:px-0`}
      >
        {/* Text column: right side in RTL, left side in LTR */}
        <div
          className={`flex flex-col justify-center items-start text-start ${isEn ? "lg:mt-[6rem]" : "lg:mt-[5rem]"} md:mt-[3rem] mt-[3rem]`}
        >
          {title && (
            <h1
              dir={isRTL ? "rtl" : "ltr"}
              className="font-bold lg:leading-[4.5rem] md:leading-[4rem] leading-[3.5rem] lg:text-[4.8rem] md:text-[2.5rem] text-[2rem] lg:w-[85%] md:w-[90%] w-full text-white"
            >
              {title}
            </h1>
          )}

          {description && (
            <p
              dir={isRTL ? "rtl" : "ltr"}
              className={`text-lg leading-[2rem] text-white lg:w-[85%] md:w-[90%] w-full ${isEn ? "mt-[1.5rem]" : "lg:mt-[4rem]"}`}
            >
              {description}
            </p>
          )}

          {/* Mobile image */}
          {imageSrc && (
            <div className="block md:hidden w-full mt-[2rem]">
              <img
                className="w-full h-[20rem] object-cover rounded-3xl"
                src={imageSrc}
                alt={title}
              />
            </div>
          )}

          <button
            className={`w-full md:w-[14rem] lg:w-[17rem] lg:h-[3.3rem] md:h-[3rem] h-[3.3rem] text-lg font-[600] text-black cursor-pointer rounded-full bg-[#F5F5F5] ${isEn ? "mt-[1.5rem]" : "lg:mt-[2.5rem] mt-[1.5rem]"}`}
          >
            {t("download_app")}
          </button>
        </div>

        {/* Image column: left side in RTL, right side in LTR */}
        {imageSrc && (
          <div className="hidden md:block">
            <img
              className="w-full lg:h-[35rem] md:h-[22rem] object-cover lg:mt-0 md:mt-[5rem] md:rounded-3xl lg:rounded-none ltr:lg:pr-[4rem] rtl:lg:pl-[4rem]"
              src={imageSrc}
              alt={title}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutHero;

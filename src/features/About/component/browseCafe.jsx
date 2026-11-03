import { useTranslation } from "react-i18next";

const BrowseCafe = ({ aboutPageData }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith("ar");
  const isEn = i18n.language?.startsWith("en");

  // Works whether the parent passes the full response, `data`, or the `sections` array
  const sections =
    aboutPageData?.data?.sections ??
    aboutPageData?.sections ??
    (Array.isArray(aboutPageData) ? aboutPageData : []);

  const content = sections.find((s) => s.key === "content_2");

  const title = content?.title?.trim();
  const description = content?.description?.trim();
  const imageSrc = content?.image?.original;

  if (!content) return null;

  return (
    <section dir="ltr" className="w-full lg:py-[1rem] md:mt-0 mt-[4rem]">
      <div className="lg:max-w-[70%] md:max-w-[95%] px-4 mx-auto grid grid-cols-1 md:grid-cols-12 md:gap-10 items-center">
        {/* Text column: left side, content flows right-to-left */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className="order-2 md:order-none flex flex-col md:gap-4 gap-[0.5rem] justify-center text-start md:mt-[4rem] h-full lg:col-span-7 md:col-span-5"
        >
          {title && (
            <h2
              className={`lg:text-[2rem] text-[1.5rem] font-bold leading-[2.75rem] text-primary ${isEn ? "lg:w-[90%]" : "lg:w-[100%]"}`}
            >
              {title}
            </h2>
          )}

          {description && (
            <p className="text-[#1F5852E5] w-full text-lg leading-[2rem]">
              {description}
            </p>
          )}
        </div>

        {/* Image column: right side */}
        {imageSrc && (
          <div className="order-1 md:order-none relative flex justify-center items-center w-full lg:col-span-5 md:col-span-7 lg:ml-[4rem]">
            <div className="relative w-[30rem] h-[20rem] object-contain">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-auto object-contain mx-auto drop-shadow-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrowseCafe;
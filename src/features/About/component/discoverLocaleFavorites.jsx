import { useTranslation } from "react-i18next";

const DiscoverLocaleFavorites = ({ aboutPageData }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language?.startsWith("ar");

  // Works whether the parent passes the full response, `data`, or the `sections` array
  const sections =
    aboutPageData?.data?.sections ??
    aboutPageData?.sections ??
    (Array.isArray(aboutPageData) ? aboutPageData : []);

  const content = sections.find((s) => s.key === "content_1");

  const title = content?.title?.trim();
  const description = content?.description?.trim();
  const imageSrc = content?.image?.original;

  if (!content) return null;

  return (
    <div
      dir="ltr"
      className="lg:max-w-[80%] md:max-w-[95%] mx-auto lg:mt-[6rem] mt-[3rem]"
    >
      <div className="grid md:grid-cols-12 items-center">
        {/* Image: always on the left */}
        {imageSrc && (
          <div className="md:col-span-5">
            <img
              className="w-full lg:h-[35rem] object-contain"
              src={imageSrc}
              alt={title}
            />
          </div>
        )}

        {/* Text: direction applied to the whole column */}
        <div
          dir={isRTL ? "rtl" : "ltr"}
          className={`md:col-span-7 flex flex-col justify-center text-start px-4 md:px-0 ${isRTL ? "md:ps-[5rem]" : "md:ps-[1rem]"}`}
        >
          {title && (
            <h1 className="lg:text-[2rem] text-[1.5rem] font-bold leading-[2.5rem] text-primary">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-[#1F5852E5] md:mt-[1.5rem] mt-[0.5rem] w-full md:w-[90%] lg:text-xl md:text-lg text-lg leading-[2rem]">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscoverLocaleFavorites;
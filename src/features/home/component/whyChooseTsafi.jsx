import { useTranslation } from "react-i18next";

/* Layout config per index (position only, no data) */
const layout = [
  { side: "left", order: "order-1 md:order-1" },
  { side: "left", order: "order-4 md:order-3" },
  { side: "right", order: "order-2 md:order-2" },
  { side: "right", order: "order-3 md:order-4" },
];

/* "WHY USE T S A F I" -> { title: "WHY USE", brand: "TSAFI" } */
const splitTitle = (fullTitle) => {
  if (!fullTitle) return { title: "", brand: "" };
  const words = fullTitle.trim().split(/\s+/);

  // collect trailing single-character tokens (spaced letters like "T S A F I")
  let i = words.length;
  while (i > 0 && words[i - 1].length === 1) i--;

  if (i < words.length - 1) {
    return { title: words.slice(0, i).join(" "), brand: words.slice(i).join("") };
  }
  // otherwise the brand is simply the last word
  return {
    title: words.slice(0, -1).join(" "),
    brand: words[words.length - 1],
  };
};

/* Card for large screens (lg and up) */
const PointCard = ({ image, text, align, textAlign }) => (
  <div className={`flex flex-col ${align} gap-3`}>
    {image && <img src={image} alt={text} className="object-contain w-[3rem]" />}
    <p
      className={`text-[#0C6766] font-bold text-lg leading-relaxed max-w-[70%] ${textAlign}`}
    >
      {text}
    </p>
  </div>
);

/* Card for small and medium screens (below lg) */
const CompactPointCard = ({ image, text, order }) => (
  <div className={`flex items-center gap-3 ${order}`}>
    {image && (
      <img
        src={image}
        alt={text}
        className="object-contain w-10 md:w-12 shrink-0"
      />
    )}
    <p className="text-[#0C6766] font-bold text-sm md:text-base leading-snug text-start">
      {text}
    </p>
  </div>
);

const WhyChooseTsafi = ({ homePageData }) => {
  const { i18n } = useTranslation();
  const isAr = i18n.language?.startsWith("ar");

  // Works whether the parent passes the full response, `data`, or the `sections` array
  const sections =
    homePageData?.data?.sections ??
    homePageData?.sections ??
    (Array.isArray(homePageData) ? homePageData : []);

  const introduction = sections.find((s) => s.key === "introduction");
  const benefits = sections.find((s) => s.key === "benefits");

  const mission = introduction?.title;
  const description = introduction?.description;
  const { title, brand } = splitTitle(benefits?.title);
  const bagSrc = benefits?.image?.original;

  const points = layout
    .map((cfg, index) => {
      const item = benefits?.items?.[index];
      return {
        id: index,
        ...cfg,
        text: item?.text?.trim(),
        image: item?.image?.original,
      };
    })
    .filter((p) => p.text);

  const leftPoints = points.filter((p) => p.side === "left");
  const rightPoints = points.filter((p) => p.side === "right");

  return (
    <div dir={isAr ? "rtl" : "ltr"} className="px-4 lg:px-0 pb-10 lg:pb-0">
      {/* Titles and intro text */}
      <div className="flex justify-center items-center">
        <div className="w-full lg:w-[55%]">
          <div className="flex flex-col justify-center items-center text-center">
            {mission && (
              <p
                className={`text-[#13615C] text-center text-xl md:text-2xl lg:text-3xl mt-[2rem] ${
                  isAr ? "font-[500] leading-relaxed" : ""
                }`}
              >
                {mission}
              </p>
            )}
            {description && (
              <p
                className={`text-sm lg:text-base text-[#000000] mt-2 max-w-[90%] lg:max-w-[85%] ${
                  isAr ? "leading-loose" : ""
                }`}
              >
                {description}
              </p>
            )}
            {title && (
              <h1 className="text-[#036664] mt-10 md:mt-12 font-bold text-3xl md:text-4xl lg:text-5xl">
                {title}
              </h1>
            )}
            {brand && (
              <h1
                className={`font-bold text-3xl md:text-4xl lg:text-5xl mt-[1rem] text-[#FF914D] ${
                  isAr ? "" : "tracking-[0.6rem] md:tracking-[1rem]"
                }`}
              >
                {brand}
              </h1>
            )}
          </div>
        </div>
      </div>

      {/* ===== Large screens: 3 columns ===== */}
      <div className="hidden lg:grid grid-cols-3 gap-4 items-center mt-[3rem]">
        <div className="flex flex-col gap-16 md:gap-28 items-end">
          {leftPoints.map((point) => (
            <PointCard
              key={point.id}
              image={point.image}
              text={point.text}
              align="items-end"
              textAlign="text-end"
            />
          ))}
        </div>

        <div className="flex justify-center items-center relative">
          {bagSrc && (
            <img
              src={bagSrc}
              alt={brand}
              className="w-[26rem] object-contain drop-shadow-2xl z-10"
            />
          )}
        </div>

        <div className="flex flex-col gap-16 md:gap-28 items-start">
          {rightPoints.map((point) => (
            <PointCard
              key={point.id}
              image={point.image}
              text={point.text}
              align="items-start"
              textAlign="text-start"
            />
          ))}
        </div>
      </div>

      {/* ===== Screens smaller than lg ===== */}
      <div className="lg:hidden">
        {bagSrc && (
          <div className="flex justify-center mt-6">
            <img
              src={bagSrc}
              alt={brand}
              className="w-56 md:w-72 object-contain drop-shadow-2xl"
            />
          </div>
        )}

        <div className="mx-auto mt-8 w-full max-w-[22rem] md:max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-8">
          {points.map((point) => (
            <CompactPointCard
              key={point.id}
              image={point.image}
              text={point.text}
              order={point.order}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseTsafi;
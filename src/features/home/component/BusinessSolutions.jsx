import { useTranslation } from "react-i18next";

/* Layout only (no content): second card is offset and has a narrower text column */
const layout = [
  { offset: false, textWidth: "" },
  { offset: true, textWidth: "lg:w-[80%]" },
];

const BusinessSolutions = ({ homePageData }) => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language?.startsWith("ar");

  // Works whether the parent passes the full response, `data`, or the `sections` array
  const sections =
    homePageData?.data?.sections ??
    homePageData?.sections ??
    (Array.isArray(homePageData) ? homePageData : []);

  const business = sections.find((s) => s.key === "business_solutions");

  const title = business?.title?.trim();
  const subtitle = business?.subtitle?.trim();

  const solutions = (business?.solutions ?? []).map((item, index) => ({
    id: index,
    title: item?.title?.trim(),
    description: item?.description?.trim(),
    image: item?.image?.original,
    ...(layout[index] ?? { offset: false, textWidth: "" }),
  }));

  if (!title && !subtitle && !solutions.length) return null;

  return (
    <div>
      {/* Header */}
      <div className="flex justify-center flex-col items-center mt-[4rem]">
        {title && (
          <h1 className="font-bold lg:w-[100%] w-[70%] flex justify-center text-center text-2xl md:text-4xl lg:text-5xl text-primary">
            {title}
          </h1>
        )}
        {subtitle && (
          <div className="lg:w-[55%] w-[90%]">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-primary md:text-xl text-lg mt-[1rem] leading-relaxed">
                {subtitle}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Solutions list */}
      <div className="lg:max-w-[66%] max-w-[90%] mx-auto md:mt-[4rem] mt-[2rem]">
        {solutions.map((item) => (
          <div
            key={item.id}
            className={`
        ${item.offset ? "mt-[3rem]" : ""}
        ${item.offset && !isArabic ? "lg:ml-[16rem]" : ""}
        ${item.offset && isArabic ? "lg:mr-[16rem]" : ""}
      `.trim()}
          >
            <div className="md:flex gap-x-[2rem]">
              {item.image && (
                <div className="relative md:w-[20rem] lg:w-[24rem] h-[15rem] shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-[#00000040]" />
                </div>
              )}

              <div className="flex flex-col space-y-2 lg:mt-0 md:mt-[2rem] mt-[1rem]">
                {item.title && (
                  <h1 className="font-semibold md:text-2xl text-xl text-primary">
                    {item.title}
                  </h1>
                )}
                {item.description && (
                  <p className={`text-primary ${item.textWidth} text-lg`}>
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessSolutions;

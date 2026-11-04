const ChooseSurpriseBags = ({ aboutPageData }) => {
  // Works whether the parent passes the full response, `data`, or the `sections` array
  const sections =
    aboutPageData?.data?.sections ??
    aboutPageData?.sections ??
    (Array.isArray(aboutPageData) ? aboutPageData : []);

  const content = sections.find((s) => s.key === "content_3");

  const title = content?.title?.trim();
  const description = content?.description?.trim();
  const imageSrc = content?.image?.original;

  if (!content) return null;

  return (
    <div className="bg-primary h-auto lg:py-[6rem] py-[3rem] lg:mt-[7rem] mt-[3rem] border-b-[0.01rem] border-b-[#67D695]">
      <div className="container9 mx-auto">
        <div className="grid md:grid-cols-12">
          {imageSrc && (
            <div className="md:col-span-6">
              <img
                className="w-full md:h-[32rem] object-contain"
                src={imageSrc}
                alt={title}
              />
            </div>
          )}
          <div className="md:col-span-6 flex flex-col justify-center ml-[1rem]">
            {title && (
              <h1 className="lg:text-[2rem] text-[1.5rem] font-bold text-white uppercase md:w-[80%] w-[100%]">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-white md:mt-[1rem] mt-[0.5rem] md:w-[85%] text-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseSurpriseBags;

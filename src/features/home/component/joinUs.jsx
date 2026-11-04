import { useTranslation } from "react-i18next";
import { scrollToDownload } from "@/utils/scrollToDownload";

const JoinUs = ({ homePageData }) => {
  const { t } = useTranslation();

  // Works whether the parent passes the full response, `data`, or the `sections` array
  const sections =
    homePageData?.data?.sections ??
    homePageData?.sections ??
    (Array.isArray(homePageData) ? homePageData : []);

  const closingCta = sections.find((s) => s.key === "closing_cta");
  const title = closingCta?.title?.trim();

  const buttonClasses =
    "lg:w-[16rem] md:w-[14rem] w-full lg:h-[3.3rem] h-[3rem] flex justify-center items-center rounded-full bg-[#024D48] text-white lg:text-lg text-md font-semibold cursor-pointer";

  return (
    <div>
      {title && (
        <div className="flex justify-center items-center lg:mt-[8rem] md:mt-[6rem] mt-[2rem]">
          <h1 className="lg:font-bold font-semibold lg:text-[2rem] md:text-[1.5rem] text-xl text-center lg:w-[55%] w-[85%] text-primary uppercase">
            {title}
          </h1>
        </div>
      )}
      <div className="md:flex md:space-y-0 space-y-[1rem] justify-center items-center lg:gap-x-[3rem] md:gap-x-[1rem] lg:mt-[3rem] md:mt-[2rem] lg:px-0 md:px-0 px-[1.5rem] md:mt-0 mt-[1rem]">
        <button onClick={scrollToDownload} className={buttonClasses}>
          {t("download_app")}
        </button>
        <button className={buttonClasses}>{t("sign_up")}</button>
      </div>
    </div>
  );
};

export default JoinUs;

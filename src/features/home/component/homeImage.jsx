import i18next from "i18next";
import heroImage from "@/assets/images/heroImage.png";

const HomeImage = () => {
  const features = ["LOWER PRICES", "EXCELLENT QUALITY", "ZERO WASTE"];
  const buttonClasses =
    "lg:w-[17rem] md:w-[14rem] lg:h-[3.3rem] md:h-[3rem] font-bold text-[#000000] cursor-pointer rounded-full bg-[#F5F5F5] max-md:w-full max-md:h-[3.5rem] md:text-[1rem] text-sm";

  const renderButtons = () => (
    <>
      <button
        style={{ boxShadow: "0px 4px 6px -4px #0000001A" }}
        className={buttonClasses}
      >
        <p>{i18next.t("download_app")}</p>
      </button>
      <button
        style={{ boxShadow: "0px 4px 6px -4px #0000001A" }}
        className={buttonClasses}
      >
        <p>{i18next.t("sign_up")}</p>
      </button>
    </>
  );

  return (
    <section className="relative w-full bg-primary lg:h-[42rem]">
      <div className="md:max-w-[82%] max-w-[90%] mx-auto h-full max-md:px-4 max-md:py-10">
        <div className="grid md:grid-cols-2 gap-x-[2rem] w-full h-full items-center max-md:flex max-md:flex-col max-md:gap-y-8">
          {/* Left Side: Text List */}
          <div className="flex flex-col justify-center w-full max-md:order-1">
            <ul className="space-y-6 lg:mt-[6.5rem] mt-[1rem] max-md:space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 text-white font-bold text-md max-md:gap-4"
                >
                  <span className="h-3 w-3 bg-white rounded-full flex-shrink-0 max-md:h-2.5 max-md:w-2.5"></span>
                  <h2 className="font-extrabold text-nowrap lg:text-5xl md:text-3xl text-2xl uppercase">
                    {feature}
                  </h2>
                </li>
              ))}
            </ul>

            <p className="text-white md:text-lg text-md mt-[2.5rem] lg:px-[2rem] max-md:mt-6 max-md:text-sm">
              Because preserving blessings is everyone's responsibility.
            </p>

            {/* Desktop buttons (inside container) */}
            <div className="lg:flex space-y-[1rem] gap-x-[3rem] mt-[3rem] max-md:hidden">
              {renderButtons()}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center items-center h-full max-md:order-2 max-md:w-full max-md:mt-4">
            <img
              className="w-full h-[37rem] object-contain max-md:h-auto "
              src={heroImage}
              alt="Hero"
            />
          </div>
        </div>
      </div>

      {/* Mobile-only buttons: OUTSIDE the container */}
      <div className="hidden max-md:flex flex-col items-center gap-4 px-4 pb-10 w-full">
        {renderButtons()}
      </div>
    </section>
  );
};

export default HomeImage;

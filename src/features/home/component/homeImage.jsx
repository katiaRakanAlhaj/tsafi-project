import i18next from "i18next";
import heroImage from "@/assets/images/heroImage.png";
// Note: If you have a phone image, import it here:
// import phoneImage from "../../../assets/images/phoneImage.png";

const HomeImage = () => {
  const features = ["LOWER PRICES", "EXCELLENT QUALITY", "ZERO WASTE"];
  const buttonClasses =
    "w-[17rem] h-[3.3rem] font-bold text-[#000000] cursor-pointer rounded-full bg-[#F5F5F5]";
  return (
    <section className="relative w-full bg-primary h-[42rem]">
      <div className="container2 mx-auto h-full">
        <div className="grid grid-cols-2 gap-x-[2rem] w-full h-full items-center">
          {/* Left Side: Text List */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-6 mt-[6.5rem]">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 text-white text-[#000000] font-bold text-md"
                >
                  {/* Custom Bullet Point */}
                  <span className="h-3 w-3 bg-white rounded-full flex-shrink-0"></span>

                  {/* Text */}
                  <h2 className="font-extrabold text-5xl uppercase">
                    {feature}
                  </h2>
                </li>
              ))}
            </ul>
            <p className="text-white text-lg mt-[2.5rem] px-[2rem]">
              Because preserving blessings is everyone's responsibility.
            </p>
            <div className="flex gap-x-[3rem] mt-[3rem]">
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
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center items-center h-full">
            <img
              className="w-full h-[37rem] object-contain"
              src={heroImage}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeImage;

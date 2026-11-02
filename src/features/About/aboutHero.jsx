import aboutImage from "@/assets/images/aboutHero.jpg";
import i18next from "i18next";

const AboutHero = () => {
  return (
    <div className="relative w-full bg-primary lg:h-auto lg:pb-[8rem] md:pb-[5rem] pb-[4rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 container6 mx-auto px-4 md:px-0">
        {/* first column */}
        <div className="flex flex-col justify-center lg:mt-[6rem] md:mt-[3rem] mt-[3rem]">
          <h1 className="font-bold lg:leading-[4.5rem] leading-[3rem] lg:text-[4.8rem] md:text-[2.5rem] text-[2rem] lg:w-[75%] md:w-[85%] w-full text-white">
            HOW DOES THE TSAFI APP WORK?
          </h1>
          <p className="text-lg text-[#FFFFFF] lg:w-[80%] md:w-[90%] w-full mt-[1rem]">
            With the Tsafi app you can easily see which cafes, restaurants,
            bakeries and/or stores in your local area have perfectly good food
            left over for you to save and enjoy at half of the price or less.
          </p>

          {/* Image shown here only on mobile (hidden on md and up) */}
          <div className="block md:hidden mt-[2rem]">
            <img
              className="w-full h-[20rem] object-cover rounded-3xl"
              src={aboutImage}
              alt="About Hero"
            />
          </div>

          <button className="w-full md:w-[14rem] lg:w-[17rem] h-[3.3rem] lg:h-[3.3rem] md:h-[3rem] text-lg font-[600] text-[#000000] cursor-pointer rounded-full bg-[#F5F5F5] mt-[1.5rem]">
            {i18next.t("download_app")}
          </button>
        </div>

        {/* second column (hidden on mobile, visible on md and up) */}
        <div className="hidden md:block">
          <img
            className="w-full lg:h-[35rem] md:h-[22rem] object-cover lg:pr-[4rem] lg:mt-0 md:mt-[5rem] md:rounded-3xl lg:rounded-none"
            src={aboutImage}
            alt="About Hero"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

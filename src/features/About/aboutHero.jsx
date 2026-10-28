import aboutImage from "@/assets/images/aboutHero.jpg";
import i18next from "i18next";
const AboutHero = () => {
  return (
    <div className="relative  w-full bg-primary h-[43rem]">
      <div className="grid grid-cols-2 container6 mx-auto">
        {/* first column */}
        <div className="flex flex-col  justify-center mt-[6rem]">
          <h1 className="font-bold leading-[4.5rem] text-[4.8rem] w-[75%] text-white">
            HOW DOES THE TSAFI APP WORK?
          </h1>
          <p className="text-lg text-[#FFFFFF] w-[80%] mt-[1rem]">
            With the Tsafi app you can easily see which cafes, restaurants,
            bakeries and/or stores in your local area have perfectly good food
            left over for you to save and enjoy at half of the price or less.
          </p>
          <button className="w-[17rem] h-[3.3rem] text-lg font-[600] text-[#000000] cursor-pointer rounded-full bg-[#F5F5F5] mt-[1.5rem]">
            {i18next.t("download_app")}
          </button>
        </div>
        <div>
          {/* second column */}
          <img
            className="w-full h-[35rem] object-cover pr-[4rem]"
            src={aboutImage}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutHero;

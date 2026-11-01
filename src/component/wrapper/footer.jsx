import { useLocation } from "react-router-dom";
import facebook from "@/assets/images/facebook.svg";
import linkedIn from "@/assets/images/linkedIn.svg";
import tiktok from "@/assets/images/tiktok.svg";
import instgram from "@/assets/images/instgram.svg";
import twitter from "@/assets/images/twitter.svg";
import googleplay from "@/assets/images/googleplay.png";
import AppStore from "@/assets/images/AppStore.png";

const Footer = () => {
  const location = useLocation();

  // Check if "about" is anywhere in the URL path (ignores case and language prefixes)
  const isAbout = location.pathname.toLowerCase().includes("about");

  const icons = [
    { id: "instagram", icon: instgram, alt: "Instagram", link: "#" },
    { id: "facebook", icon: facebook, alt: "Facebook", link: "#" },
    { id: "linkedin", icon: linkedIn, alt: "LinkedIn", link: "#" },
    { id: "twitter", icon: twitter, alt: "Twitter", link: "#" },
    { id: "tiktok", icon: tiktok, alt: "TikTok", link: "#" },
  ];

  const footerItems = [
    "Legal",
    "Privacy Policy",
    "Cookie Policy",
    "Terms & Conditions",
    "Food Waste Sources",
  ];

  return (
    <div
      className={`w-full md:h-[28rem] bg-[#136766] py-[2rem] ${
        isAbout ? "mt-0" : "mt-[5rem]"
      }`}
    >
      <div className="flex justify-center items-center flex-col space-y-[1.5rem]">
        <div className="flex items-center gap-x-[1rem]">
          {icons.map((item) => (
            <a
              key={item.id}
              href={item.link}
              aria-label={item.alt}
              className="md:w-[1.8rem] w-[1.5rem] flex items-center justify-center"
            >
              <img
                src={item.icon}
                alt={item.alt}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
        <div className="flex gap-x-3">
          <img
            className="w-[8.5rem] cursor-pointer"
            src={googleplay}
            alt="Google Play"
          />
          <img
            className="w-[8.5rem] cursor-pointer"
            src={AppStore}
            alt="App Store"
          />
        </div>
        <h1 className="text-white font-bold lg:tracking-[7rem] tracking-[2rem] md:tracking-[3rem] lg:text-[6.7rem] md:text-[3.5rem] text-[3rem] lg:ml-[3.5rem]">
          TSAFI
        </h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 px-[1rem] lg:gap-x-[8rem] md:gap-x-[2rem] md:px-0">
          {footerItems.map((item) => (
            <div
              key={item}
              className="text-white lg:text-lg text-sm cursor-pointer whitespace-nowrap"
            >
              {item}
            </div>
          ))}
        </div>
        <p className="text-[#F2F2F2CF] lg:text-lg md:text-md text-sm">
          Copyright © Tsafi . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

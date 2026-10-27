import facebook from "../../assets/images/facebook.svg";
import linkedIn from "../../assets/images/linkedIn.svg";
import tiktok from "../../assets/images/tiktok.svg";
import instgram from "../../assets/images/instgram.svg";
import twitter from "../../assets/images/twitter.svg";
import googleplay from "../../assets/images/googleplay.png";
import AppStore from "../../assets/images/AppStore.png";

const Footer = () => {
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
    <div className="w-full h-[28rem] bg-[#136766] py-[2rem] mt-[5rem]">
      <div className="flex justify-center items-center flex-col space-y-[1.5rem]">
        <div className="flex items-center gap-x-[1rem]">
          {icons.map((item) => (
            <a
              key={item.id}
              href={item.link}
              aria-label={item.alt}
              className="w-[1.8rem] flex items-center justify-center"
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
          <img className="w-[8.5rem] cursor-pointer" src={googleplay} />
          <img className="w-[8.5rem] cursor-pointer" src={AppStore} />
        </div>
        <h1 className=" text-white font-bold tracking-[7rem] text-[6.7rem] ml-[3.5rem]">
          TSAFI
        </h1>
        <div className="flex gap-x-[8rem]">
          {footerItems?.map((footerItems) => (
            <div className="text-white text-lg cursor-pointer">{footerItems}</div>
          ))}
        </div>
        <p className=" text-[#F2F2F2CF] text-md">
          Copyright © Tsafi . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

import { useLocation } from "react-router-dom";
import facebook from "@/assets/images/facebook.svg";
import linkedIn from "@/assets/images/linkedIn.svg";
import tiktok from "@/assets/images/tiktok.svg";
import instgram from "@/assets/images/instgram.svg";
import twitter from "@/assets/images/twitter.svg";
import googleplay from "@/assets/images/googleplay.png";
import AppStore from "@/assets/images/AppStore.png";
import i18next from "i18next";

// Maps the API "key" to a local icon
const socialIcons = {
  instagram: instgram,
  facebook: facebook,
  linkedin: linkedIn,
  x: twitter,
  tiktok: tiktok,
};

const Footer = ({ footerData }) => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();
  const isAbout = path.includes("about");
  const isSignUp = path.includes("signup");
  const noTopMargin = isAbout || isSignUp;

  const links = footerData?.links;
  const googlePlayLink = links?.google_play;
  const appStoreLink = links?.app_store;

  // Keep only social items that have both an icon and a url
  const socials = (links?.social || []).filter(
    (item) => socialIcons[item.key] && item.url,
  );

  const footerItems = [
    { key: "legal", path: "#" },
    { key: "privacy_policy", path: "#" },
    { key: "cookie_policy", path: "#" },
    { key: "terms_and_conditions", path: "#" },
    { key: "food_waste_sources", path: "#" },
  ];

  return (
    <div
      className={`w-full md:h-[28rem] bg-[#136766] py-[2rem] ${
        noTopMargin ? "mt-0" : "mt-[5rem]"
      }`}
    >
      <div className="flex justify-center items-center flex-col space-y-[1.5rem]">
        {/* Social icons */}
        <div className="flex items-center gap-x-[1rem]">
          {socials.map((item) => (
            <a
              key={item.key}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="md:w-[1.8rem] w-[1.5rem] flex items-center justify-center"
            >
              <img
                src={socialIcons[item.key]}
                alt={item.label}
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>

        {/* Store buttons */}
        <div id="download-app" className="flex gap-x-3 scroll-mt-24">
          {googlePlayLink && (
            <a
              id="google-play-link"
              href={googlePlayLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Play"
            >
              <img
                id="google-play-btn"
                className="w-[8.5rem] cursor-pointer transition-transform"
                src={googleplay}
                alt="Google Play"
              />
            </a>
          )}

          <a
            id="app-store-link"
            href={appStoreLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="App Store"
          >
            <img
              className="w-[8.5rem] cursor-pointer"
              src={AppStore}
              alt="App Store"
            />
          </a>
        </div>

        <h1
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          className="text-white font-bold lg:tracking-[7rem] tracking-[2rem] md:tracking-[3rem] lg:text-[6.7rem] md:text-[3.5rem] text-[3rem] lg:ml-[3.5rem]"
        >
          TSAFI
        </h1>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 px-[1rem] lg:gap-x-[8rem] md:gap-x-[2rem] md:px-0">
          {footerItems.map((item) => (
            <div
              key={item}
              className="text-white lg:text-lg text-sm cursor-pointer whitespace-nowrap"
            >
              {i18next.t(`footer.${item.key}`)}
            </div>
          ))}
        </div>

        <p className="text-[#F2F2F2CF] lg:text-lg md:text-md text-sm">
          {footerData?.copyright}
        </p>
      </div>
    </div>
  );
};

export default Footer;
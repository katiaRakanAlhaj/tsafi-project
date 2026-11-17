import BackButton from "@/component/ux/backButton";
import { MdOutlineMailOutline } from "react-icons/md";

const CheckInbox = ({ onBack }) => {
  return (
    <div className="w-full max-w-[26.5rem] mx-auto lg:max-w-none lg:mx-0 lg:mt-[-10rem] lg:px-[2rem]">
      <BackButton onClick={onBack} />

      {/* Centered on mobile/tablet, original offsets on desktop */}
      <div className="flex justify-center lg:justify-start mt-6 md:mt-[2rem] lg:px-[8rem]">
        <MdOutlineMailOutline className="text-[#66E2B3] w-14 h-16 md:w-[4.5rem] md:h-[5rem] rotate-[20deg]" />
      </div>

      <h1 className="text-2xl md:text-3xl text-center lg:text-start lg:px-[2rem] mt-5 md:mt-[2rem] font-bold text-white">
        Check your inbox.
      </h1>

      <div className="w-full lg:w-[60%]">
        <p className="text-[#D2EAE4] text-sm md:text-[1rem] mt-4 md:mt-[2rem] flex justify-center items-center text-center">
          Click the link we sent to masterxxxxxxx@gmail.com to confirm that it
          is really you. If you don't see the email, please check your spam
          folder as well.
        </p>
      </div>
    </div>
  );
};
export default CheckInbox;
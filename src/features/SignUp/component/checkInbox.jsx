import BackButton from "@/component/ux/backButton";
import { MdOutlineMailOutline } from "react-icons/md";

const CheckInbox = ({ onBack }) => {
  return (
    <div className="mt-[-10rem] px-[2rem]">
      <BackButton onClick={onBack} />
      <div className="px-[8rem] mt-[2rem]">
        <MdOutlineMailOutline className="text-[#66E2B3] w-[4.5rem] h-[5rem] rotate-[20deg]" />
      </div>
      <h1 className="text-3xl px-[2rem] mt-[2rem] font-bold text-white">
        Check your inbox.
      </h1>
      <div className="w-[60%]">
        <p className="text-[#D2EAE4] text-md mt-[2rem] flex justify-center items-center text-center">
          Click the link we sent to masterxxxxxxx@gmail.com to confirm that it
          is really you. If you don't see the email, please check your spam
          folder as well.
        </p>
      </div>
    </div>
  );
};
export default CheckInbox;

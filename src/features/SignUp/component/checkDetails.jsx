import { FaArrowLeft } from "react-icons/fa";
import i18next from "i18next";
import SignUpTitle from "../../../component/ux/signUpTitle";

const CheckDetails = ({ onBack, onConfirm }) => {
  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        aria-label="Back"
        className="w-[3rem] h-[3rem] rounded-full bg-[#52D1A1] cursor-pointer flex justify-center items-center text-white text-2xl"
      >
        <FaArrowLeft className="rtl:rotate-180" />
      </button>

      <div className="mt-[1.5rem]">
        <SignUpTitle title={i18next.t("signUp.check_details")} />
      </div>

      <div className="w-[26rem] rounded-xl p-[1rem] mt-[1.5rem] bg-[#F9F3F0] shadow-[0px_2px_4px_-2px_#0000001A,0px_4px_6px_-1px_#0000001A]">
        <iframe
          title="Store location"
          src="https://www.google.com/maps?q=Bucharest&output=embed"
          loading="lazy"
          className="w-full h-[10rem] rounded-md border-0"
        ></iframe>
        <h1 className="font-bold text-[#111827] text-xl mt-4">
          Yasmin Al cham
        </h1>
        <p className="text-sm font-semibold mt-1 text-[#6B7280]">
          804 Bd Curé-Labelle, Laval, QC H7V 2V8, Canada
        </p>
        <p className="text-sm font-semibold text-[#6B7280] mt-2">
          +1 450-233-0181
        </p>
      </div>

      
    </div>
  );
};

export default CheckDetails;
import i18next from "i18next";
import SignUpTitle from "@/component/ux/signUpTitle";
import PrimaryButton from "@/component/ux/primaryButton";
import BackButton from "@/component/ux/backButton";

const CheckDetails = ({ onBack, onConfirm }) => {
  return (
    <div>
      <BackButton onClick={onBack} />
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
      <PrimaryButton onClick={onConfirm} className="mt-[1.1rem]  w-[26.5rem]">
        {i18next.t("signUp.next")}
      </PrimaryButton>
    </div>
  );
};

export default CheckDetails;

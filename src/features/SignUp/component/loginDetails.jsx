import { useState } from "react";
import { Check } from "lucide-react";
import BackButton from "@/component/ux/backButton";
import SignUpTitle from "@/component/ux/signUpTitle";
import PrimaryButton from "@/component/ux/primaryButton";
import i18next from "i18next";

const LoginDetails = ({ onBack, onNext }) => {
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);

  const inputClasses =
    "w-[29rem] px-6 h-[3.5rem] focus:outline-0 placeholder-[#B6B6B6] bg-white rounded-full";

  return (
    <div>
      <BackButton onClick={onBack} />
      <div className="mt-[2rem]">
        <SignUpTitle title={"Add your login details."} />
        <div className="text-[#19776E] w-[55%] mt-2">
          <p className="text-md font-[500] text-center">
            You need your number or email address to log in to your account.
          </p>
        </div>

        <div className="flex flex-col space-y-[1rem] mt-[2rem]">
          <input
            className={inputClasses}
            style={{ boxShadow: "0px 1px 2px 0px #0000000D" }}
            placeholder="Number"
          />
          <input
            style={{ boxShadow: "0px 1px 2px 0px #0000000D" }}
            className={inputClasses}
            placeholder="Email"
          />
        </div>

        <button
          type="button"
          role="checkbox"
          aria-checked={agreeNewsletter}
          onClick={() => setAgreeNewsletter((prev) => !prev)}
          className="mt-[1.5rem] w-[29rem] flex items-start gap-[1rem] text-start cursor-pointer"
        >
          <span
            className={`shrink-0 w-[1.4rem] h-[1.4rem] rounded-[3px] flex items-center justify-center text-white border-2 transition-colors ${
              agreeNewsletter
                ? "bg-[#0E5C54] border-[#0E5C54]"
                : "bg-white border-[#0E5C54]"
            }`}
          >
            {agreeNewsletter && <Check size={16} strokeWidth={3} />}
          </span>

          <span className="text-[#0E5C54] text-base leading-snug">
            I agree to receive newsletters and information from Tsafi via email,
            SMS, and push notifications. I can unsubscribe at any time.
          </span>
        </button>
      </div>
      <PrimaryButton onClick={onNext} className="w-[29rem] mt-[1.5rem]">
        {i18next.t("signUp.next")}
      </PrimaryButton>
    </div>
  );
};

export default LoginDetails;

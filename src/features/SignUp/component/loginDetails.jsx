import { useState } from "react";
import { Check } from "lucide-react";
import BackButton from "@/component/ux/backButton";
import SignUpTitle from "@/component/ux/signUpTitle";
import PrimaryButton from "@/component/ux/primaryButton";
import i18next from "i18next";

const LoginDetails = ({ onBack, onNext }) => {
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);

  const inputClasses =
    "w-full px-5 md:px-6 h-[3.25rem] md:h-[3.5rem] focus:outline-0 placeholder-[#B6B6B6] bg-white rounded-full";

  return (
    <div className="w-full max-w-[29rem] mx-auto lg:mx-0">
      <BackButton onClick={onBack} />
      <div className="mt-4 md:mt-[2rem]">
        <SignUpTitle title={"Add your login details."} />
        <div className="text-[#19776E] w-full lg:w-[75%] mt-2">
          <p className="text-sm md:text-[1rem] font-[500] text-center">
            You need your number or email address to log in to your account.
          </p>
        </div>

        <div className="flex flex-col space-y-[1rem] mt-5 md:mt-[2rem]">
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
          className="mt-5 md:mt-[1.5rem] w-full flex items-start gap-3 md:gap-[1rem] text-start cursor-pointer"
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

          <span className="text-[#0E5C54] text-sm md:text-base leading-snug">
            I agree to receive newsletters and information from Tsafi via email,
            SMS, and push notifications. I can unsubscribe at any time.
          </span>
        </button>
      </div>

      <PrimaryButton onClick={onNext} className="w-full mt-5 md:mt-[1.5rem]">
        {i18next.t("signUp.next")}
      </PrimaryButton>
    </div>
  );
};

export default LoginDetails;
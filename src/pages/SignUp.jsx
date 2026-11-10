import { useState } from "react";
import { Search, X } from "lucide-react";
import signUpImage from "@/assets/images/signUpImage.jpg";
import i18next from "i18next";
import CheckDetails from "@/features/SignUp/component/checkDetails";
import OpeningDays from "@/features/SignUp/component/openingDays";
import LoginDetails from "@/features/SignUp/component/loginDetails";
import SignUpTitle from "@/component/ux/signUpTitle";
import PrimaryButton from "@/component/ux/primaryButton";
import CheckInbox from "@/features/SignUp/component/checkInbox";

const SignUp = () => {
  const [query, setQuery] = useState("");
  // 1 = search store, 2 = check details, 3 = opening days, 4 = login details
  const [step, setStep] = useState(1);

  return (
    <div className="grid lg:grid-cols-12 grid-cols-1">
      {/* Image stays the same for every step */}
      <div className="lg:col-span-5 col-span-1">
        <img
          className="w-full h-[47rem] object-cover"
          src={signUpImage}
          alt="signUpImage"
        />
      </div>

      {/* Same column and same padding for every step */}
      <div
        className={`lg:col-span-7 col-span-1 flex flex-col justify-center px-[9rem] ${
          step === 5 ? "bg-[#105D55]" : ""
        }`}
      >
   
        {step === 1 && (
          <>
            <SignUpTitle title={i18next.t("signUp.register_buisness")} />

            <p className="text-[#157368] text-md">
              {i18next.t("signUp.add_store")}
            </p>

            <div className="group relative mt-4 w-[26.5rem]">
              <Search
                size={14}
                className="absolute start-4 top-1/2 -translate-y-1/2 text-[#1F2A37] pointer-events-none group-focus-within:hidden"
              />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-[3rem] bg-white text-[#374151] border border-[#000000] rounded-md ps-11 pe-11 group-focus-within:ps-4 focus:outline-0"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear"
                  className="absolute end-4 top-1/2 -translate-y-1/2 text-[#374151] hover:text-black cursor-pointer"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <PrimaryButton
              onClick={() => setStep(2)}
              className="w-[26.5rem] mt-[1.1rem]"
            >
              {i18next.t("signUp.next")}
            </PrimaryButton>

            <p className="mt-[1.5rem] text-[#0E5C54] text-lg">
              {i18next.t("signUp.have_account")}
              <span className="font-bold text-xl underline cursor-pointer">
                {i18next.t("signUp.Login")}
              </span>
            </p>
          </>
        )}
        {step === 2 && (
          <CheckDetails
            onBack={() => setStep(1)}
            onConfirm={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <OpeningDays onBack={() => setStep(2)} onNext={() => setStep(4)} />
        )}
        {step === 4 && (
          <LoginDetails onBack={() => setStep(3)} onNext={() => setStep(5)} />
        )}
        {step === 5 && <CheckInbox onBack={() => setStep(4)} />}
      </div>
    </div>
  );
};

export default SignUp;

import { useState } from "react";
import { Search, X } from "lucide-react";
import signUpImage from "@/assets/images/signUpImage.jpg";
import i18next from "i18next";
import CheckDetails from "@/features/SignUp/component/checkDetails";
import OpeningDays from "@/features/SignUp/component/openingDays";
import LoginDetails from "@/features/SignUp/component/loginDetails";
import CheckInbox from "@/features/SignUp/component/checkInbox";
import SignUpTitle from "@/component/ux/signUpTitle";
import PrimaryButton from "@/component/ux/primaryButton";
import BusinessDetails from "./BusinessDetails";

const SignUp = () => {
  const [query, setQuery] = useState("");
  // 1 = search, "manual" = business details form, 2 = check details,
  // 3 = opening days, 4 = login details, 5 = check inbox
  const [step, setStep] = useState(1);
  // where the user came from, so Back works correctly
  const [source, setSource] = useState("search"); // "search" | "manual"
  // data entered in the manual form
  const [businessData, setBusinessData] = useState(null);

  const darkBg = step === 5 || step === "manual";

  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-0 min-h-screen">
      <div className="lg:col-span-5 col-span-1">
        <img
          className="w-full h-[24rem] md:h-[30rem] lg:h-[47rem] object-cover"
          src={signUpImage}
          alt="signUpImage"
        />
      </div>

      <div
        className={`lg:col-span-7 col-span-1 flex flex-col justify-center
          px-5 sm:px-10 md:px-24 lg:px-[9rem]
          py-8 md:py-12 lg:py-0
          ${darkBg ? "bg-[#105D55]" : ""}`}
      >
        {step === 1 && (
          <div className="w-full max-w-[26.5rem] mx-auto lg:mx-0">
            <SignUpTitle title={i18next.t("signUp.register_buisness")} />

            <p className="text-[#157368] text-sm md:text-[1rem]">
              {i18next.t("signUp.add_store")}
            </p>

            <div className="group relative mt-4 w-full">
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

            <p className="text-red-500 text-sm md:text-[1rem] mt-2">
              No stores match your search criteria
            </p>

            <button
              type="button"
              onClick={() => {
                setSource("manual");
                setStep("manual");
              }}
              className="text-[#157368] px-[2rem] font-bold text-sm md:text-lg mt-3 underline cursor-pointer"
            >
              Manually add store details
            </button>

            <PrimaryButton
              onClick={() => {
                setSource("search");
                setStep(2);
              }}
              className="w-full mt-[1.1rem]"
            >
              {i18next.t("signUp.next")}
            </PrimaryButton>

            <p className="mt-6 text-[#0E5C54] text-base md:text-lg">
              {i18next.t("signUp.have_account")}
              <span className="font-bold text-lg md:text-xl underline cursor-pointer">
                {i18next.t("signUp.Login")}
              </span>
            </p>
          </div>
        )}

        {step === "manual" && (
          <BusinessDetails
            initialData={businessData}
            onBack={() => setStep(1)}
            onNext={(data) => {
              setBusinessData(data);
              setStep(2);
            }}
          />
        )}

        {step === 2 && (
          <CheckDetails
            data={businessData} // used only for the manual path
            onBack={() => setStep(source === "manual" ? "manual" : 1)}
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
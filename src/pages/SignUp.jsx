import { useState } from "react";
import { Search, X } from "lucide-react";
import signUpImage from "../assets/images/signUpImage.jpg";
import i18next from "i18next";
import CheckDetails from "../features/SignUp/component/checkDetails";
import SignUpTitle from "../component/ux/signUpTitle";
import PrimaryButton from "../component/ux/primaryButton";

const SignUp = () => {
  const [query, setQuery] = useState("");
  const [step, setStep] = useState(1); // 1 = search store, 2 = check details

  return (
    <div className="grid grid-cols-12">
      {/* Image stays the same for every step */}
      <div className="col-span-5">
        <img
          className="w-full h-[45rem] object-cover"
          src={signUpImage}
          alt=""
        />
      </div>

      {/* Same column and same padding for every step */}
      <div className="col-span-7 flex flex-col justify-center px-[9rem]">
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

        {step === 2 && <CheckDetails onBack={() => setStep(1)} />}
      </div>
    </div>
  );
};

export default SignUp;

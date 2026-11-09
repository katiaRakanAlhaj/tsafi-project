import { useState } from "react";
import { Check } from "lucide-react";
import i18next from "i18next";
import BackButton from "@/component/ux/backButton";
import SignUpTitle from "@/component/ux/signUpTitle";
import PrimaryButton from "@/component/ux/primaryButton";

const DAYS = [
  { key: "monday", label: "Monday" },
  { key: "tuesday", label: "Tuesday" },
  { key: "wednesday", label: "Wednesday" },
  { key: "thursday", label: "Thursday" },
  { key: "friday", label: "Friday" },
  { key: "saturday", label: "Saturday" },
  { key: "sunday", label: "Sunday" },
];

const OpeningDays = ({ onBack, onNext }) => {
  // Days that are selected (dark checkbox). Monday is selected by default, like the design.
  const [selectedDays, setSelectedDays] = useState(["monday"]);

  const toggleDay = (key) => {
    setSelectedDays((prev) =>
      prev.includes(key) ? prev.filter((d) => d !== key) : [...prev, key],
    );
  };

  return (
    <div>
      <BackButton onClick={onBack} />

      <div className="mt-[1.5rem] px-6">
        <SignUpTitle title={"Confirm your opening days"} />
        <div className="text-[#19776E] w-[72%] mt-2">
          <p className="text-md font-[500] text-center px-4">
            We found your operating days in your Google Business Profile.
            <br /> Tap any day to make changes.
          </p>
        </div>
      </div>

      {/* List and button share the same width, so the button centers under the list */}
      <div className="w-[72%]">
        <ul className="mt-[2rem]">
          {DAYS.map(({ key, label }) => {
            const isSelected = selectedDays.includes(key);

            return (
              <li key={key} className="border-b border-[#6B7280]">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={isSelected}
                  onClick={() => toggleDay(key)}
                  className="w-full flex items-center justify-between py-[0.5rem] cursor-pointer"
                >
                  <span className="text-[#0E5C54] text-lg font-bold">
                    {label}
                  </span>

                  <span
                    className={`w-[1.3rem] h-[1.3rem] rounded-[3px] flex items-center justify-center text-white transition-colors ${
                      isSelected ? "bg-[#156B66]" : "bg-[#96B5B3]"
                    }`}
                  >
                    <Check size={12} strokeWidth={3} />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center mt-[1.1rem]">
          <PrimaryButton onClick={onNext} className="w-[17rem]">
            {i18next.t("signUp.next")}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default OpeningDays;

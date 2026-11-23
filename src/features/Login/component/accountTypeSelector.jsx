import { Store, UserRound } from "lucide-react";
import i18next from "i18next";

// value sent to the API as `type`
const TYPES = [
  // { value: "client", icon: UserRound, title: "login.type_client", desc: "login.type_client_desc" },
  { value: "restaurant", icon: Store, title: "login.type_store", desc: "login.type_store_desc" },
];

const AccountTypeSelector = ({ value, onChange }) => {
  return (
    <div className="mt-6">
      <p className="text-[#0E5C54] font-bold text-base md:text-lg mb-3">
        {i18next.t("login.login_as")}
      </p>

      <div role="radiogroup" className="grid grid-cols-2 gap-3 md:gap-4">
        {TYPES.map(({ value: v, icon: Icon, title, desc }) => {
          const active = value === v;
          return (
            <button
              key={v}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(v)}
              className={`flex flex-col items-center justify-center text-center rounded-xl px-3 py-5 cursor-pointer transition-colors border-2 ${
                active
                  ? "bg-[#E4EEED] border-[#0E5C54]"
                  : "bg-white border-[#E5E7EB] hover:border-[#0E5C54]/40"
              }`}
            >
              <span
                className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${
                  active ? "bg-[#0E5C54] text-white" : "bg-[#F3F4F6] text-[#4B5563]"
                }`}
              >
                <Icon size={24} />
              </span>
              <span
                className={`mt-3 font-bold text-base md:text-lg ${
                  active ? "text-[#0E5C54]" : "text-[#1F2A37]"
                }`}
              >
                {i18next.t(title)}
              </span>
              <span className="mt-1 text-xs md:text-sm text-[#6B7280]">
                {i18next.t(desc)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AccountTypeSelector;

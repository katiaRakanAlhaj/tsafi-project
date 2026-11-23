import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const inputClasses =
  "w-full h-[3rem] bg-white text-[#374151] rounded-md px-4 focus:outline-0 focus:ring-1 focus:ring-[#0E5C54] placeholder-[#B6B6B6]";

// Label + field + error message
export const FormField = ({ id, label, error, children, className = "" }) => (
  <div className={className}>
    <label htmlFor={id} className="block text-[#0E5C54] text-sm md:text-base mb-2">
      {label} *
    </label>
    {children}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// Password input with show/hide eye. Spread react-hook-form's register() into it.
export const PasswordInput = ({ hasError, ...props }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        className={`${inputClasses} pe-12 ${hasError ? "ring-1 ring-red-500" : ""}`}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShow((p) => !p)}
        aria-label={show ? "Hide password" : "Show password"}
        className="absolute end-4 top-1/2 -translate-y-1/2 text-[#0E5C54] cursor-pointer"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
};

// Mobile input that only keeps digits. Spread register() into it.
export const MobileInput = ({ hasError, onChange, ...props }) => (
  <input
    type="tel"
    dir="ltr"
    inputMode="numeric"
    autoComplete="username"
    placeholder="963xxxxxxxxx"
    className={`${inputClasses} ${hasError ? "ring-1 ring-red-500" : ""}`}
    onChange={(e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
      onChange?.(e);
    }}
    {...props}
  />
);

export const Spinner = () => (
  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
);

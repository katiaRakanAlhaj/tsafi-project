import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({ onClick, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Back"
      className={`w-[2.8rem] h-[2.8rem] rounded-full bg-[#52D1A1] cursor-pointer flex justify-center items-center text-white text-xl ${className}`}
    >
      <FaArrowLeft className="rtl:rotate-180" />
    </button>
  );
};

export default BackButton;

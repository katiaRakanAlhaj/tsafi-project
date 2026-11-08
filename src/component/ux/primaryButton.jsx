const PrimaryButton = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`h-[3.5rem] rounded-md bg-[#0E5C54] shadow-[0px_1px_2px_0px_#0000000D] flex justify-center items-center text-white font-bold text-[1.2rem] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
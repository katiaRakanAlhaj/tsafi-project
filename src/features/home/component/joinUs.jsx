import i18next from "i18next";

const JoinUs = () => {
  const buttonClasses =
    "w-[16rem] h-[3.3rem] flex justify-center items-center rounded-full bg-[#024D48] text-white text-lg font-semibold cursor-pointer";
  return (
    <div>
      <div className="flex justify-center items-center mt-[8rem]">
        <h1 className="font-bold text-[2rem] text-center w-[50%] text-primary">
          JOIN OVER 85000 USER FIGHTING FOOD WASTE WITH US{" "}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-x-[3rem] mt-[3rem]">
        <button className={buttonClasses}>{i18next.t("download_app")}</button>
        <button className={buttonClasses}>{i18next.t("sign_up")}</button>
      </div>
    </div>
  );
};
export default JoinUs;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import i18next from "i18next";
import signUpImage from "@/assets/images/signUpImage.jpg";
import SignUpTitle from "@/component/ux/signUpTitle";
import PrimaryButton from "@/component/ux/primaryButton";
import BackButton from "@/component/ux/backButton";
import {
  FormField,
  MobileInput,
  PasswordInput,
  Spinner,
} from "@/component/ux/formField";
import OtpInput from "@/features/ForgotPassword/component/otpInput";
import {
  useSendOtp,
  useVerifyOtp,
  useResetPassword,
} from "@/features/ForgotPassword/hook/useForgotPassword";
import { getLoginErrorMessage } from "@/features/Login/hook/useLogin";
import {
  mobileSchema,
  otpSchema,
  newPasswordSchema,
} from "@/features/Login/schema/authSchemas";

const OTP_LENGTH = 4;
const RESEND_SECONDS = 60;

const t = (key, opts) => i18next.t(`forgot.${key}`, opts);

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const prefix = `/${lang || "ar"}`;

  // 1 = mobile, 2 = otp, 3 = new password
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [resetToken, setResetToken] = useState(null);
  const [seconds, setSeconds] = useState(0);

  // one form per step
  const mobileForm = useForm({
    resolver: zodResolver(mobileSchema()),
    defaultValues: { mobile: "" },
  });
  const otpForm = useForm({
    resolver: zodResolver(otpSchema(OTP_LENGTH)),
    defaultValues: { otp: "" },
  });
  const passwordForm = useForm({
    resolver: zodResolver(newPasswordSchema()),
    defaultValues: { password: "", password_confirmation: "" },
  });

  // resend countdown
  useEffect(() => {
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  const onError = (error) =>
    toast.error(getLoginErrorMessage(error, t("failed")));

  const sendOtp = useSendOtp({
    onSuccess: (res, variables) => {
      toast.success(res?.message || t("otp_sent"));
      setMobile(variables.mobile);
      otpForm.reset({ otp: "" });
      setSeconds(RESEND_SECONDS);
      setStep(2);
    },
    onError,
  });

  const verifyOtp = useVerifyOtp({
    onSuccess: (res) => {
      toast.success(res?.message || t("otp_verified"));
      setResetToken(
        res?.token ||
          res?.reset_token ||
          res?.data?.token ||
          res?.data?.reset_token ||
          null,
      );
      setStep(3);
    },
    onError,
  });

  const resetPassword = useResetPassword({
    onSuccess: (res) => {
      toast.success(res?.message || t("reset_success"));
      navigate(`${prefix}/Login`);
    },
    onError,
  });

  const goBack = () => {
    if (step === 1) navigate(`${prefix}/Login`);
    else setStep(step - 1);
  };

  const submitClass = "w-full mt-6 !h-[3rem] !rounded-lg";

  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-0 min-h-screen">
      <div className="lg:col-span-5 col-span-1">
        <img
          className="w-full h-[24rem] md:h-[30rem] lg:h-[47rem] object-cover"
          src={signUpImage}
          alt="forgot password"
        />
      </div>

      <div className="lg:col-span-7 col-span-1 flex flex-col justify-center bg-[#F8F3EF] px-5 sm:px-10 md:px-24 lg:px-[9rem] py-8 md:py-12 lg:py-0">
        <div className="w-full max-w-[26.5rem] mx-auto lg:mx-0">
          <BackButton onClick={goBack} />

          {/* step indicator */}
          <div className="flex gap-2 mt-6" dir="ltr">
            {[1, 2, 3].map((s) => (
              <span
                key={s}
                className={`h-1.5 flex-1 rounded-full ${
                  s <= step ? "bg-[#0E5C54]" : "bg-[#D9E5E3]"
                }`}
              />
            ))}
          </div>

          {/* ---------- Step 1: mobile ---------- */}
          {step === 1 && (
            <form
              onSubmit={mobileForm.handleSubmit((v) => sendOtp.mutate(v))}
              noValidate
              className="mt-6"
            >
              <SignUpTitle title={t("title")} />
              <p className="text-[#157368] text-sm md:text-base mt-2">
                {t("subtitle")}
              </p>

              <FormField
                id="fp-mobile"
                label={i18next.t("login.mobile")}
                error={mobileForm.formState.errors.mobile?.message}
                className="mt-6"
              >
                <MobileInput
                  id="fp-mobile"
                  hasError={!!mobileForm.formState.errors.mobile}
                  {...mobileForm.register("mobile")}
                />
              </FormField>

              <PrimaryButton
                type="submit"
                disabled={sendOtp.isPending}
                className={submitClass}
              >
                {sendOtp.isPending ? <Spinner /> : t("send_code")}
              </PrimaryButton>
            </form>
          )}

          {/* ---------- Step 2: OTP ---------- */}
          {step === 2 && (
            <form
              onSubmit={otpForm.handleSubmit(({ otp }) =>
                verifyOtp.mutate({ mobile, otp }),
              )}
              noValidate
              className="mt-6"
            >
              <SignUpTitle title={t("otp_title")} />
              <p className="text-[#157368] text-sm md:text-base mt-2">
                {t("otp_subtitle")}{" "}
                <span dir="ltr" className="font-bold">
                  {mobile}
                </span>
              </p>

              <div className="mt-6">
                <Controller
                  name="otp"
                  control={otpForm.control}
                  render={({ field, fieldState }) => (
                    <>
                      <OtpInput
                        length={OTP_LENGTH}
                        value={field.value}
                        onChange={field.onChange}
                        hasError={!!fieldState.error}
                      />
                      {fieldState.error && (
                        <p className="text-red-500 text-xs mt-1">
                          {fieldState.error.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <PrimaryButton
                type="submit"
                disabled={verifyOtp.isPending}
                className={submitClass}
              >
                {verifyOtp.isPending ? <Spinner /> : t("verify")}
              </PrimaryButton>

              <p className="mt-4 text-center text-[#0E5C54] text-sm md:text-base">
                {t("no_code")}{" "}
                {seconds > 0 ? (
                  <span className="text-[#6B7280]">
                    {t("resend_in", { seconds })}
                  </span>
                ) : (
                  <button
                    type="button"
                    disabled={sendOtp.isPending}
                    onClick={() => sendOtp.mutate({ mobile })}
                    className="font-bold underline cursor-pointer disabled:opacity-50"
                  >
                    {t("resend")}
                  </button>
                )}
              </p>
            </form>
          )}

          {/* ---------- Step 3: new password ---------- */}
          {step === 3 && (
            <form
              onSubmit={passwordForm.handleSubmit((v) =>
                resetPassword.mutate({ ...v, mobile, token: resetToken }),
              )}
              noValidate
              className="mt-6"
            >
              <SignUpTitle title={t("new_password_title")} />
              <p className="text-[#157368] text-sm md:text-base mt-2">
                {t("new_password_subtitle")}
              </p>

              <FormField
                id="fp-password"
                label={t("new_password")}
                error={passwordForm.formState.errors.password?.message}
                className="mt-6"
              >
                <PasswordInput
                  id="fp-password"
                  autoComplete="new-password"
                  hasError={!!passwordForm.formState.errors.password}
                  {...passwordForm.register("password")}
                />
              </FormField>

              <FormField
                id="fp-confirm"
                label={t("confirm_password")}
                error={
                  passwordForm.formState.errors.password_confirmation?.message
                }
                className="mt-5"
              >
                <PasswordInput
                  id="fp-confirm"
                  autoComplete="new-password"
                  hasError={!!passwordForm.formState.errors.password_confirmation}
                  {...passwordForm.register("password_confirmation")}
                />
              </FormField>

              <PrimaryButton
                type="submit"
                disabled={resetPassword.isPending}
                className={submitClass}
              >
                {resetPassword.isPending ? <Spinner /> : t("save")}
              </PrimaryButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

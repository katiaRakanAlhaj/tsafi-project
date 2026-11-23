import { useNavigate, useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import i18next from "i18next";
import signUpImage from "@/assets/images/signUpImage.jpg";
import SignUpTitle from "@/component/ux/signUpTitle";
import PrimaryButton from "@/component/ux/primaryButton";
import {
  FormField,
  MobileInput,
  PasswordInput,
  Spinner,
} from "@/component/ux/formField";
import { useLogin, getLoginErrorMessage } from "@/features/Login/hook/useLogin";
import AccountTypeSelector from "@/features/Login/component/accountTypeSelector";
import { loginSchema } from "@/features/Login/schema/authSchemas";

const Login = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const prefix = `/${lang || "ar"}`;

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema()),
    defaultValues: { type: "restaurant", mobile: "", password: "" },
  });

  const { mutate: login, isPending } = useLogin({
    onSuccess: (res) => {
      toast.success(res?.message || i18next.t("login.success"));
      navigate(prefix);
    },
    onError: (error) => {
      toast.error(getLoginErrorMessage(error, i18next.t("login.failed")));
    },
  });

  const onSubmit = (values) => login(values);

  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 gap-y-0 min-h-screen">
      <div className="lg:col-span-5 col-span-1">
        <img
          className="w-full h-[24rem] md:h-[30rem] lg:h-[47rem] object-cover"
          src={signUpImage}
          alt="login"
        />
      </div>

      <div className="lg:col-span-7 col-span-1 flex flex-col justify-center bg-[#F8F3EF] px-5 sm:px-10 md:px-24 lg:px-[9rem] py-8 md:py-12 lg:py-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="w-full max-w-[26.5rem] mx-auto lg:mx-0"
        >
          <SignUpTitle title={i18next.t("login.title")} />

          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <AccountTypeSelector value={field.value} onChange={field.onChange} />
            )}
          />

          <FormField
            id="mobile"
            label={i18next.t("login.mobile")}
            error={errors.mobile?.message}
            className="mt-6"
          >
            <MobileInput
              id="mobile"
              hasError={!!errors.mobile}
              {...register("mobile")}
            />
          </FormField>

          <FormField
            id="password"
            label={i18next.t("login.password")}
            error={errors.password?.message}
            className="mt-5"
          >
            <PasswordInput
              id="password"
              autoComplete="current-password"
              hasError={!!errors.password}
              {...register("password")}
            />
          </FormField>

          <button
            type="button"
            onClick={() => navigate(`${prefix}/ForgotPassword`)}
            className="mt-3 text-[#0E5C54] text-xs md:text-sm cursor-pointer hover:underline"
          >
            {i18next.t("login.forgot_password")}
          </button>

          <PrimaryButton
            type="submit"
            disabled={isPending}
            className="w-full mt-5 !h-[3rem] !rounded-lg"
          >
            {isPending ? <Spinner /> : i18next.t("login.submit")}
          </PrimaryButton>

          <p className="mt-5 text-center text-[#0E5C54] text-sm md:text-base">
            {i18next.t("login.no_account")}{" "}
            <button
              type="button"
              onClick={() => navigate(`${prefix}/SignUp`)}
              className="font-bold underline cursor-pointer"
            >
              {i18next.t("login.create_account")}
            </button>
          </p>

          {/* <button
            type="button"
            className="mt-4 text-[#0E5C54] text-xs md:text-sm cursor-pointer hover:underline"
          >
            {i18next.t("login.sso")}
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;

import { z } from "zod";
import i18next from "i18next";

// Schemas are built inside functions so error messages use the current language.

const mobileField = () =>
  z
    .string()
    .trim()
    .min(1, i18next.t("login.mobile_required"))
    .regex(/^\d{9,15}$/, i18next.t("login.mobile_invalid"));

export const loginSchema = () =>
  z.object({
    type: z.enum(["restaurant", "client"]),
    mobile: mobileField(),
    password: z.string().min(1, i18next.t("login.password_required")),
  });

export const mobileSchema = () => z.object({ mobile: mobileField() });

export const otpSchema = (length) =>
  z.object({
    otp: z
      .string()
      .regex(new RegExp(`^\\d{${length}}$`), i18next.t("forgot.otp_required")),
  });

export const newPasswordSchema = () =>
  z
    .object({
      password: z
        .string()
        .min(1, i18next.t("login.password_required"))
        .min(8, i18next.t("forgot.password_min")),
      password_confirmation: z.string(),
    })
    .refine((d) => d.password === d.password_confirmation, {
      message: i18next.t("forgot.password_mismatch"),
      path: ["password_confirmation"],
    });

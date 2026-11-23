import { useMutation } from "@tanstack/react-query";
import { sendOtp, verifyOtp, resetPassword } from "../api/forgotPassword";

export const useSendOtp = (options = {}) =>
  useMutation({ mutationFn: sendOtp, ...options });

export const useVerifyOtp = (options = {}) =>
  useMutation({ mutationFn: verifyOtp, ...options });

export const useResetPassword = (options = {}) =>
  useMutation({ mutationFn: resetPassword, ...options });

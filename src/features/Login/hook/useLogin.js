import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api/login";

// Pull the token out of the response, whatever shape the backend uses
const extractToken = (res) =>
  res?.data?.token ||
  res?.data?.access_token ||
  res?.token ||
  res?.access_token ||
  null;

export const useLogin = (options = {}) => {
  return useMutation({
    mutationFn: loginRequest,
    ...options,
    onSuccess: (res, variables, context) => {
      const token = extractToken(res);
      if (token) localStorage.setItem("token", token);
      const user = res?.user || res?.data?.user;
      if (user) localStorage.setItem("user", JSON.stringify(user));
      options.onSuccess?.(res, variables, context);
    },
  });
};

// Readable error message from an axios error
export const getLoginErrorMessage = (error, fallback) =>
  error?.response?.data?.message ||
  error?.response?.data?.error ||
  (error?.response?.data?.errors &&
    Object.values(error.response.data.errors).flat()[0]) ||
  fallback;

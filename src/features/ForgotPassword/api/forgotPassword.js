import client from "@/api/client";

const PURPOSE = "forgot_password";

// Step 1: POST /send-otp  { mobile, purpose }
export const sendOtp = async ({ mobile }) => {
  const response = await client.post(`/send-otp`, { mobile, purpose: PURPOSE });
  return response.data;
};

// Step 2: POST /verify-otp  { mobile, otp, purpose }
export const verifyOtp = async ({ mobile, otp }) => {
  const response = await client.post(`/verify-otp`, {
    mobile,
    otp,
    purpose: PURPOSE,
  });
  return response.data;
};

// Step 3: POST /reset-password  { mobile, password, password_confirmation }
export const resetPassword = async ({
  mobile,
  password,
  password_confirmation,
  token,
}) => {
  const body = { mobile, password, password_confirmation };
  // if verify-otp returned a reset token, send it along
  if (token) body.token = token;
  const response = await client.post(`/reset-password`, body);
  return response.data;
};

import client from "@/api/client";

// POST /login
// body: { mobile, password, type: "restaurant" | "client", fcm_token? }
export const loginRequest = async ({
  mobile,
  password,
  type = "restaurant",
  fcm_token,
}) => {
  const body = { mobile, password, type };
  if (fcm_token) body.fcm_token = fcm_token;

  const response = await client.post(`/login`, body);
  return response.data;
};

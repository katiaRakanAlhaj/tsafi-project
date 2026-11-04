import client from "../../../../src/api/client";
import { useQuery } from "@tanstack/react-query";

export const fetchFooter = async () => {
  const response = await client.get(`/v2/website/settings`);
  return response.data;
};
export const useFetchFooter = () => {
  return useQuery({
    queryKey: ["footer"],
    queryFn: fetchFooter,
  });
};

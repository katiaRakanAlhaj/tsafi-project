import { useQuery } from "@tanstack/react-query"
import { fetchAboutPage } from "../api/fetchAbout";
export const useFetchAboutPage = () => {
    return useQuery({
        queryKey: ["about-page"],
        queryFn: fetchAboutPage,
    });
}
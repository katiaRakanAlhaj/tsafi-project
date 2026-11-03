import client from "../../../../src/api/client";
export const fetchAboutPage = async() => {
    const response = await client.get(`/v2/website/about`);
    return response.data;
};
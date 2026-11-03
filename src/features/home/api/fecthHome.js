import client from "../../../../src/api/client";
export const fetchHomePage = async() => {
    const response = await client.get(`/v2/website/homepage`);
    return response.data;
};
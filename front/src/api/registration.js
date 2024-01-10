import axios from "axios";

export const registration = (values) => {
    const apiUrl = "";
    return axios.post(apiUrl, values).then((resp) => {
        return resp.data;
    });
};

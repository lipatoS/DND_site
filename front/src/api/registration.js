import axios from "axios";

export const registration = (values) => {
    const apiUrl = "http://127.0.0.1:8000/api/registration";
    return axios.post(apiUrl, values).then((resp) => {
        return resp.data;
    });
};

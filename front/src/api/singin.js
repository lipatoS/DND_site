import axios from "axios";

export const singin = (values) => {
    const apiUrl = "http://127.0.0.1:8000/api/login";
    return axios.get(apiUrl, values).then((resp) => {
        return resp.data;
    });
};

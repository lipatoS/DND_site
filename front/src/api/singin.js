import axios from "axios";

export const singin = (values) => {
    const apiUrl = "";
    return axios.get(apiUrl, values).then((resp) => {
        return resp.data;
    });
};

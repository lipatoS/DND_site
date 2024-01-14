import axios from "axios";

export const registration = (values) => {
    const apiUrl = "http://127.0.0.1:8000/api/registration";
    return axios
        .post(apiUrl, values)
        .then((resp) => {
            return resp.data;
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                return error.response.data;
            }
        });
};

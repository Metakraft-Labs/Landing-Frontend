import Axios from "axios";

export const nonAuth = Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export const auth = () => {
    const token = localStorage.getItem('token');
    return Axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
};
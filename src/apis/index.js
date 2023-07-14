import Axios from "axios";
import { Config } from "../config";

export const nonAuth = Axios.create({
    baseURL: Config.API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export const auth = () => {
    const token = localStorage.getItem('token');
    return Axios.create({
        baseURL: Config.API_URL,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
};
import { toast } from "react-toastify";
import { auth, nonAuth } from "../index";

export const login = async ({ wallet }) => {
    try {
        const res = await nonAuth.post("/auth/login", { wallet });

        return res.data;
    }
    catch (err) {
        toast.error(err.response.data.message);
    }
};

export const register = async ({ email, wallet, ref_code }) => {
    try {
        const res = await nonAuth.post("/auth/register", { email, ...(wallet ? { wallet } : {}), ...(ref_code ? { ref_code } : {}) });

        return res.data;
    }
    catch (err) {
        toast.error(err.response.data.message);
    }
};

export const status = async () => {
    try {
        const res = await auth().get("/auth/status");

        return res.data;
    }
    catch (err) {
        toast.error(err.response.data.message);
    }
};
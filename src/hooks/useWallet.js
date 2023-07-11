import { useConnectWallet } from '@web3-onboard/react';
import { ethers } from 'ethers';
import { useContext } from 'react';
import { toast } from "react-toastify";
import AppStore from "../contexts/AppStore";

export const useWallet = () => {
    const [{ wallet }, connect, disconnect] = useConnectWallet();
    const { setDefaultAccount, setUser, setToken } = useContext(AppStore);
    let ethersProvider;
    if (wallet) {
        // eslint-disable-next-line unused-imports/no-unused-vars
        ethersProvider = new ethers.BrowserProvider(wallet.provider, "any");
    }

    const connectWalletHandler = async (connectionRequired = false) => {
        if (!wallet) {
            const [wallets] = await connect();
            const { accounts } = wallets || {};

            if (!accounts?.[0]) {
                if (connectionRequired) toast.error("Wallet account not found. Please check your wallet and try again.");
                return;
            }
            setDefaultAccount(accounts[0]);
        }
    };

    const disconnectWalletHandler = async () => {
        if (wallet) {
            await disconnect({ label: wallet.provider });

            setDefaultAccount(null);
            setToken(null);
            setUser(null);
            localStorage.removeItem("token");
        }
    };

    return {
        connectWalletHandler,
        disconnectWalletHandler
    }
}

import coinbaseWalletModule from "@web3-onboard/coinbase";
import injectedModule from "@web3-onboard/injected-wallets";
import { Web3OnboardProvider, init } from "@web3-onboard/react";
import React, { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { status } from "./apis/auth";
import Explore from "./components/explore";
import Feature from "./components/feature.jsx";
import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import AppStore from "./contexts/AppStore";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const coinbaseWalletSdk = coinbaseWalletModule({ darkMode: true });
const INFURA_KEY = "";
const ethereumRopsten = {
    id: "0x3",
    token: "rETH",
    label: "Ethereum Ropsten",
    rpcUrl: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
};

const chains = [ethereumRopsten];
const wallets = [injectedModule(), coinbaseWalletSdk];
const web3Onboard = init({
    wallets,
    chains,
    appMetadata: {
        name: "Lemon",
        icon: "<svg>App Icon</svg>",
        description: "Choose a wallet to connect",
    },
});

function App() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    // const [smallScreen, setSmallScreen] = useState(false);

    const getStatus = useCallback(async () => {
        if (localStorage.getItem("token") && !user) {
            const res = await status();
            setUser(res.data);
        }
    }, [token]);

    // const resize = () => {
    //     setSmallScreen(window.innerWidth / window.innerHeight < 1);
    // };

    // useState(() => {
    //     window.addEventListener("resize", resize);
    //     resize();
    // }, []);

    useState(() => {
        getStatus();
    }, [getStatus]);

    useState(() => {
        const params = new URLSearchParams(window.location.search);
        const ref_code = params.get("ref");
        if (ref_code) localStorage.setItem("ref_code", ref_code);
    }, []);

    return (
        <>
            <Web3OnboardProvider web3Onboard={web3Onboard}>
                <AppStore.Provider
                    value={{ user, setUser, token, setToken, defaultAccount, setDefaultAccount }}
                >
                    <div className={`App`}>
                        <BrowserRouter>
                            <Routes>
                                <Route
                                    exact
                                    path="/explore"
                                    element={
                                        <>
                                            <Explore />
                                        </>
                                    }
                                />
                                <Route
                                    exact
                                    path="/feature"
                                    element={
                                        <>
                                            <Header />
                                            <Feature />
                                            <Footer />
                                        </>
                                    }
                                />
                                <Route
                                    exact
                                    path="/"
                                    element={
                                        <>
                                            <Header />
                                            <Home />
                                            <Footer />
                                        </>
                                    }
                                />
                                {/* <Route
                                exact
                                path="/about"
                                element={
                                    <>
                                        <Header />
                                        <About />
                                        <Footer />
                                    </>
                                }
                            /> */}
                                <Route
                                    exact
                                    path="/contact"
                                    element={
                                        <>
                                            <Header />
                                            <Contact />
                                            <Footer />
                                        </>
                                    }
                                />
                            </Routes>
                            <ToastContainer
                                style={{ zIndex: 99 }}
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                        </BrowserRouter>
                    </div>
                </AppStore.Provider>
            </Web3OnboardProvider>
        </>
    );
}

export default App;

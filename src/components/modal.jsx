import React, { useCallback, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "../Style/modal.css";
import { login, register, status } from "../apis/auth";
import { update } from "../apis/user";
import AppStore from "../contexts/AppStore";

export function Modal1({ show, close }) {
    const location = useLocation();
    const [mail, setMail] = useState("");
    const { setToken, defaultAccount } = useContext(AppStore);

    const handleReferal = async event => {
        event.target.classList.add("home-head-3-11");
        event.target.classList.remove("home-head-3-12");

        const params = new URLSearchParams(location.search);
        const ref_code = params.get("ref") || localStorage.getItem("ref_code");

        let data = { email: mail, wallet: defaultAccount?.address };
        if (ref_code && ref_code.length > 0) data.ref_code = ref_code;

        const resp = await register(data);
        if (resp?.success && resp?.data) {
            toast.success("Registered successfully");
            setToken(resp.data);
            localStorage.setItem("token", resp.data);
            event.target.classList.add("home-head-3-12");
            event.target.classList.remove("home-head-3-11");
            close();
            setMail("");
        }
    };
    return (
        <>
            {show ? (
                <div className="modalContainer" onClick={() => close()}>
                    <div className="modale" onClick={e => e.stopPropagation()}>
                        <header className="modal_header">
                            <h2 className="modal_header-title">Signup</h2>
                            <svg
                                className="close"
                                onClick={() => close()}
                                xmlns="http://www.w3.org/2000/svg"
                                width="3vw"
                                height="3vw"
                                style={{ cursor: "pointer", fill: "#01C5BA" }}
                                viewBox="0 0 384 512"
                            >
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </header>
                        <main className="modal_content">
                            <div className="modal_content-1">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <div className="modal-content-2">
                                <input
                                    type="text"
                                    value={mail}
                                    onChange={event => {
                                        setMail(event.target.value);
                                    }}
                                    placeholder="Enter Your Email"
                                />
                            </div>
                        </main>
                        <footer className="modal_footer">
                            <button className="submit home-head-3-12" onClick={handleReferal}>
                                Submit
                            </button>
                        </footer>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export function Modal2({ show, close }) {
    const { setToken, token, user, setUser, defaultAccount } = useContext(AppStore);
    const lockIcon = (
        <svg
            width="1.389vw"
            height="1.38vw"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="0.5" y="0.5" width="21" height="21" rx="10.5" fill="white" />
            <g clipPath="url(#clip0_598_112)">
                <path
                    d="M14 9H13.5V8C13.5 6.62 12.38 5.5 11 5.5C9.62 5.5 8.5 6.62 8.5 8V9H8C7.45 9 7 9.45 7 10V15C7 15.55 7.45 16 8 16H14C14.55 16 15 15.55 15 15V10C15 9.45 14.55 9 14 9ZM11 13.5C10.45 13.5 10 13.05 10 12.5C10 11.95 10.45 11.5 11 11.5C11.55 11.5 12 11.95 12 12.5C12 13.05 11.55 13.5 11 13.5ZM9.5 9V8C9.5 7.17 10.17 6.5 11 6.5C11.83 6.5 12.5 7.17 12.5 8V9H9.5Z"
                    fill="black"
                />
            </g>
            <rect x="0.5" y="0.5" width="21" height="21" rx="10.5" stroke="black" />
            <defs>
                <clipPath id="clip0_598_112">
                    <rect width="12" height="12" fill="white" transform="translate(5 5)" />
                </clipPath>
            </defs>
        </svg>
    );

    const getUser = useCallback(async () => {
        if (token) {
            const res = await status();

            const userResp = res?.data;

            setUser(userResp);
        }
    }, [token]);

    useEffect(() => {
        getUser();
    }, []);

    const handleReferal = async event => {
        event.target.classList.add("home-head-3-11");
        event.target.classList.remove("home-head-3-12");

        let ref_code;

        if (!user) {
            let userResp;
            if (!token) {
                const resp = await login({ wallet: defaultAccount?.address });
                const resp1 = resp.data;
                event.target.classList.add("home-head-3-12");
                event.target.classList.remove("home-head-3-11");
                close();
                if (resp1 == null) {
                    toast.warn("Signup First");
                    return;
                } else {
                    setToken(resp1);
                    localStorage.setItem("token", resp1);
                    const res2 = await status();
                    userResp = res2.data;
                    setUser(userResp);
                }
            } else {
                const res2 = await status();
                userResp = res2.data;
                setUser(userResp);
            }

            ref_code = userResp.referrer_code;
        } else {
            ref_code = user.referrer_code;
        }

        if (!user?.wallet && defaultAccount?.address && defaultAccount?.address?.length > 0) {
            const res = await update({ wallet: defaultAccount?.address });

            if (res?.success && res?.data) {
                setUser(res.data);
            }
        }

        if (ref_code) {
            navigator.clipboard.writeText(window.location.origin + "?ref=" + ref_code);
            toast.success("Referral link copied!");
        } else {
            toast.error(
                "Something went wrong while getting referral code. Please trying again in some time or contact support.",
            );
        }
    };
    return (
        <>
            {show ? (
                <div className="modalContainer" style={{ zIndex: 10 }} onClick={() => close()}>
                    <div className="modale" onClick={e => e.stopPropagation()}>
                        <header className="modal_header">
                            <h2 className="modal_header-title">Referral Rewards</h2>
                            <svg
                                className="close"
                                onClick={() => close()}
                                xmlns="http://www.w3.org/2000/svg"
                                width="3vw"
                                height="3vw"
                                style={{ cursor: "pointer", fill: "#01C5BA" }}
                                viewBox="0 0 384 512"
                            >
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                            </svg>
                        </header>
                        <main className="modal_content">
                            <div style={{ width: "100%", padding: "0 11vw" }}>
                                <div style={{ display: "flex" }}>
                                    <div
                                        style={{
                                            fontSize: "1.1vw",
                                            color: "white",
                                            fontWeight: "700",
                                        }}
                                    >
                                        Levels
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "0.6vw",
                                            paddingLeft: "4vw",
                                        }}
                                    >
                                        {user?.referrals?.length < 10 ? lockIcon : ""}
                                        <div
                                            style={{
                                                fontSize: "0.97vw",
                                                color: "white",
                                                fontWeight: "500",
                                            }}
                                        >
                                            BRONZE
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "0.6vw",
                                            paddingLeft: "7vw",
                                        }}
                                    >
                                        {user?.referrals?.length < 70 ? lockIcon : ""}
                                        <div
                                            style={{
                                                fontSize: "0.97vw",
                                                color: "white",
                                                fontWeight: "500",
                                            }}
                                        >
                                            SILVER
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: "0.6vw",
                                            paddingLeft: "8vw",
                                        }}
                                    >
                                        {user?.referrals?.length < 200 ? lockIcon : ""}
                                        <div
                                            style={{
                                                fontSize: "0.97vw",
                                                color: "white",
                                                fontWeight: "500",
                                            }}
                                        >
                                            GOLD
                                        </div>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        paddingTop: "1.04vw",
                                        display: "flex",
                                        fontSize: "0.83vw",
                                        color: "white",
                                        fontWegiht: "500",
                                    }}
                                >
                                    <div>0</div>
                                    <div style={{ paddingLeft: "8vw" }}>10</div>
                                    <div style={{ paddingLeft: "13.1vw" }}>70</div>
                                    <div style={{ paddingLeft: "12.7vw" }}>200</div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        padding: "0 2vw",
                                        width: "36.94vw",
                                        height: "0.69vw",
                                        borderRadius: "0.35vw",
                                        background: `linear-gradient(to right, #FEC0CB 0% ${
                                            ((user?.referrals?.length || 0) * 100) / 200
                                        }%, #D5D9E7 ${
                                            ((user?.referrals?.length || 0) * 100) / 200
                                        }% ${100 - ((user?.referrals?.length || 0) * 100) / 200}%)`,
                                    }}
                                >
                                    <div style={{ width: "0.27vw", background: "white" }}></div>
                                    <div style={{ width: "0.27vw", background: "white" }}></div>
                                    <div style={{ width: "0.27vw", background: "white" }}></div>
                                    <div style={{ width: "0.27vw", background: "white" }}></div>
                                    <div style={{ width: "0.27vw", background: "white" }}></div>
                                    <div style={{ width: "0.27vw", background: "white" }}></div>
                                    <div style={{ width: "0.27vw", background: "white" }}></div>
                                </div>
                                <div
                                    style={{
                                        paddingTop: "1.04vw",
                                        display: "flex",
                                        fontSize: "0.97vw",
                                        color: "white",
                                        fontWeight: "500",
                                        gap: "0.25vw",
                                    }}
                                >
                                    <span>
                                        You have {user?.referrals?.length || "0"} point
                                        {user?.referrals?.length === 1 ? "" : "s"}{" "}
                                    </span>
                                    {user?.referrals?.length >= 200 ? (
                                        <></>
                                    ) : (
                                        <>
                                            <span style={{ fontWeight: "700" }}>
                                                Get{" "}
                                                {user?.referrals?.length < 10
                                                    ? "10"
                                                    : user?.referrals?.length < 70
                                                    ? "70"
                                                    : "200"}
                                            </span>
                                            <span>
                                                successfull referral points to become a{" "}
                                                {user?.referrals?.length < 10
                                                    ? "Bronze"
                                                    : user?.referrals?.length < 70
                                                    ? "Silver"
                                                    : "Gold"}{" "}
                                                member
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div style={{ paddingLeft: "9vw", paddingTop: "5vw" }}>
                                <div style={{ display: "flex", gap: "1vw", padding: "0.3vw" }}>
                                    <svg
                                        width="2.6vw"
                                        height="2.6vw"
                                        viewBox="0 0 38 38"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="37"
                                            height="37"
                                            rx="18.5"
                                            fill="white"
                                        />
                                        <g clipPath="url(#clip0_598_49)">
                                            <path
                                                d="M25 14.5H23.365C23.4475 14.2675 23.5 14.0125 23.5 13.75C23.5 12.505 22.495 11.5 21.25 11.5C20.4625 11.5 19.78 11.905 19.375 12.5125L19 13.015L18.625 12.505C18.22 11.905 17.5375 11.5 16.75 11.5C15.505 11.5 14.5 12.505 14.5 13.75C14.5 14.0125 14.5525 14.2675 14.635 14.5H13C12.1675 14.5 11.5075 15.1675 11.5075 16L11.5 24.25C11.5 25.0825 12.1675 25.75 13 25.75H25C25.8325 25.75 26.5 25.0825 26.5 24.25V16C26.5 15.1675 25.8325 14.5 25 14.5ZM21.25 13C21.6625 13 22 13.3375 22 13.75C22 14.1625 21.6625 14.5 21.25 14.5C20.8375 14.5 20.5 14.1625 20.5 13.75C20.5 13.3375 20.8375 13 21.25 13ZM16.75 13C17.1625 13 17.5 13.3375 17.5 13.75C17.5 14.1625 17.1625 14.5 16.75 14.5C16.3375 14.5 16 14.1625 16 13.75C16 13.3375 16.3375 13 16.75 13ZM25 24.25H13V22.75H25V24.25ZM25 20.5H13V16.75C13 16.3375 13.3375 16 13.75 16H16.81L15.7 17.515C15.4525 17.8525 15.5275 18.325 15.865 18.565C16.195 18.805 16.6675 18.73 16.9075 18.4L19 15.55L21.0925 18.4C21.3325 18.73 21.805 18.805 22.135 18.565C22.4725 18.325 22.5475 17.8525 22.3 17.515L21.19 16H24.25C24.6625 16 25 16.3375 25 16.75V20.5Z"
                                                fill="#323232"
                                            />
                                        </g>
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="37"
                                            height="37"
                                            rx="18.5"
                                            stroke="black"
                                        />
                                        <defs>
                                            <clipPath id="clip0_598_49">
                                                <rect
                                                    width="18"
                                                    height="18"
                                                    fill="white"
                                                    transform="translate(10 10)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div
                                        style={{
                                            fontSize: "1.38vw",
                                            color: "white",
                                            fontWeight: "500",
                                            padding: "0.2vw",
                                        }}
                                    >
                                        Win Stickers & Badge
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "1vw", padding: "0.3vw" }}>
                                    <svg
                                        width="2.6vw"
                                        height="2.6vw"
                                        viewBox="0 0 38 38"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="37"
                                            height="37"
                                            rx="18.5"
                                            fill="white"
                                        />
                                        <g clipPath="url(#clip0_598_54)">
                                            <path
                                                d="M27.25 19L25.42 16.915L25.675 14.155L22.9675 13.54L21.55 11.155L19 12.25L16.45 11.155L15.0325 13.54L12.325 14.1475L12.58 16.9075L10.75 19L12.58 21.085L12.325 23.8525L15.0325 24.4675L16.45 26.8525L19 25.75L21.55 26.845L22.9675 24.46L25.675 23.845L25.42 21.085L27.25 19ZM23.8675 20.5825L24.0625 22.675L22.0075 23.14L20.935 24.9475L19 24.115L17.065 24.9475L15.9925 23.14L13.9375 22.675L14.1325 20.575L12.745 19L14.1325 17.41L13.9375 15.325L15.9925 14.8675L17.065 13.06L19 13.885L20.935 13.0525L22.0075 14.86L24.0625 15.325L23.8675 17.4175L25.255 19L23.8675 20.5825V20.5825ZM18.25 21.25H19.75V22.75H18.25V21.25ZM18.25 15.25H19.75V19.75H18.25V15.25Z"
                                                fill="#323232"
                                            />
                                        </g>
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="37"
                                            height="37"
                                            rx="18.5"
                                            stroke="black"
                                        />
                                        <defs>
                                            <clipPath id="clip0_598_54">
                                                <rect
                                                    width="18"
                                                    height="18"
                                                    fill="white"
                                                    transform="translate(10 10)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div
                                        style={{
                                            fontSize: "1.38vw",
                                            color: "white",
                                            fontWeight: "500",
                                            padding: "0.2vw",
                                        }}
                                    >
                                        Win a Swag & Accessories
                                    </div>
                                </div>
                                <div style={{ display: "flex", gap: "1vw", padding: "0.3vw" }}>
                                    <svg
                                        width="2.6vw"
                                        height="2.6vw"
                                        viewBox="0 0 38 38"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="37"
                                            height="37"
                                            rx="18.5"
                                            fill="white"
                                        />
                                        <g clipPath="url(#clip0_598_60)">
                                            <path
                                                d="M24.625 16H22.75V14.5C22.75 13.675 22.075 13 21.25 13H12.25C11.425 13 10.75 13.675 10.75 14.5V21.25C10.75 22.075 11.425 22.75 12.25 22.75C12.25 23.995 13.255 25 14.5 25C15.745 25 16.75 23.995 16.75 22.75H21.25C21.25 23.995 22.255 25 23.5 25C24.745 25 25.75 23.995 25.75 22.75H26.5C26.9125 22.75 27.25 22.4125 27.25 22V19.5025C27.25 19.18 27.145 18.865 26.95 18.6025L25.225 16.3C25.0825 16.1125 24.8575 16 24.625 16ZM14.5 23.5C14.0875 23.5 13.75 23.1625 13.75 22.75C13.75 22.3375 14.0875 22 14.5 22C14.9125 22 15.25 22.3375 15.25 22.75C15.25 23.1625 14.9125 23.5 14.5 23.5ZM24.625 17.125L26.095 19H22.75V17.125H24.625ZM23.5 23.5C23.0875 23.5 22.75 23.1625 22.75 22.75C22.75 22.3375 23.0875 22 23.5 22C23.9125 22 24.25 22.3375 24.25 22.75C24.25 23.1625 23.9125 23.5 23.5 23.5Z"
                                                fill="#323232"
                                            />
                                        </g>
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="37"
                                            height="37"
                                            rx="18.5"
                                            stroke="black"
                                        />
                                        <defs>
                                            <clipPath id="clip0_598_60">
                                                <rect
                                                    width="18"
                                                    height="18"
                                                    fill="white"
                                                    transform="translate(10 10)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <div
                                        style={{
                                            fontSize: "1.38vw",
                                            color: "white",
                                            fontWeight: "500",
                                            padding: "0.2vw",
                                        }}
                                    >
                                        Vouchers & Rewards worth $1K
                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="modal_footer">
                            <button className="submit home-head-3-12" onClick={handleReferal}>
                                Refer & Win
                            </button>
                        </footer>
                    </div>
                </div>
            ) : null}
        </>
    );
}

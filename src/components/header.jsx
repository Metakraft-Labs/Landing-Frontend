import { useConnectWallet } from "@web3-onboard/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aiverselogo from "../Assets/aiverselogo.svg";
import "../Style/header.css";
import { useWallet } from "../hooks/useWallet";

function Header() {
    const [{ wallet, connecting }] = useConnectWallet();
    const { connectWalletHandler, disconnectWalletHandler } = useWallet();

    const navigate = useNavigate();
    const [panel, setPanel] = useState(["none", "none", "none", "none", "none"]);
    const showSpeed = (event, slug) => {
        event.preventDefault();
        navigate(`/${slug}`);
    };
    useEffect(() => {
        function mains() {
            let buttonList = document.getElementsByClassName("navButton");
            for (let i = 0; i < buttonList.length; ++i) {
                if (i == 1) continue;
                console.log(i);
                let set = ["none", "none", "none", "none", "none"];
                buttonList[i].addEventListener("mouseenter", function (event) {
                    event.target.style.color = "#88b2db";
                    event.target.style.borderRadius = "0.7vw";
                    event.target.style.backgroundColor = "#1B1B1B";
                    set[i] = "block";
                    setPanel(set);
                });
                buttonList[i].addEventListener("mouseleave", function () {
                    buttonList[i].style.color = "#a390a4";
                    buttonList[i].style.borderRadius = "0";
                    buttonList[i].style.backgroundColor = "transparent";
                    setPanel(["none", "none", "none", "none", "none"]);
                });
            }
            let set = ["none", "none", "none", "none", "none"];
            buttonList[1].addEventListener("mouseenter", function (event) {
                event.target.style.color = "#88b2db";
                event.target.style.borderRadius = "0.7vw";
                event.target.style.backgroundColor = "#1B1B1B";
                set[1] = "block";
                setPanel(set);
            });
            buttonList[1].addEventListener("mouseleave", function () {
                buttonList[1].style.color = "#a390a4";
                buttonList[1].style.borderRadius = "0";
                buttonList[1].style.backgroundColor = "transparent";
            });
            let m = document.getElementById("alpha");
            m.addEventListener("mouseleave", function () {
                buttonList[1].style.color = "#a390a4";
                buttonList[1].style.borderRadius = "0";
                buttonList[1].style.backgroundColor = "transparent";
                setPanel(["none", "none", "none", "none", "none"]);
            });
        }
        mains();
    }, []);
    //  function turbo(event){
    //   let alp=event.target
    //   const sv=alp.style.borderColor
    //   alp.style.border="4px solid #01C5BA"
    //   setTimeout(()=>{
    //     alp.style.border=sv
    //   },300)
    //  }
    return (
        <>
            <div
                className="flex justify-between items-center flex-row"
                style={{
                    position: "fixed",
                    zIndex: "4",
                    top: "0",
                    left: "0",
                    right: "0",
                    backgroundColor: "rgba(8,8,8,0.7)",
                    borderBottom: "1px solid #1e262e",
                    height: "100px",
                }}
            >
                <div
                    id="alpha"
                    style={{
                        position: "absolute",
                        top: "80px",
                        left: "340px",
                        backgroundColor: "#1b1b1b",
                        height: "10vw",
                        width: "8vw",
                        borderRadius: "0.7vw",
                        display: `${panel[1]}`,
                        fontSize: "14px",
                        color: "#9c9c9c",
                        border: "1px solid #9c9c9c",
                        textAlign: "center",
                        paddingTop: "6px",
                        paddingBottom: "6px",
                    }}
                >
                    <div style={{ paddingTop: "1vw", cursor: "pointer" }}>
                        <a
                            href="https://linktr.ee/metakraft"
                            style={{ textDecoration: "none", color: "#9c9c9c" }}
                        >
                            Creators
                        </a>
                    </div>
                    <div style={{ paddingTop: "1vw", cursor: "pointer" }}>Pine(Soon)</div>
                    <div style={{ paddingTop: "1vw", cursor: "pointer" }}>Lemon(Soon)</div>
                </div>
                <div className="navi w-full flex flex-row px-32 xs:px-10 ss:px-14 sm:px-16 py-[38px] justify-between items-center ">
                    <img
                        // style={{ marginTop: "0.5vw", height: "2.5vw", cursor: "pointer" }}
                        src={aiverselogo}
                        className="w-[146px] h-[39px] cursor-pointer"
                        alt="not found"
                        onClick={() => navigate("/")}
                    />
                    <div className="font-inter flex xs:hidden ss:hidden sm:hidden ">
                        <div
                            className="navButton"
                            onClick={event => {
                                showSpeed(event, "");
                            }}
                            href="#"
                            style={{ cursor: "pointer", color: "#C4C4C4" }}
                        >
                            Home
                        </div>
                        <div
                            className="navButton"
                            href="#"
                            style={{ cursor: "pointer", color: "#C4C4C4" }}
                        >
                            Discover
                        </div>
                        <div
                            className="navButton"
                            onClick={event => {
                                showSpeed(event, "about");
                            }}
                            href="#"
                            style={{ cursor: "pointer", color: "#C4C4C4" }}
                        >
                            About Us
                        </div>
                        <div
                            className="navButton"
                            style={{
                                cursor: "pointer",
                                color: "#C4C4C4",
                                textDecoration: "none",
                            }}
                        >
                            <a
                                href="https://blog.metakraft.live/"
                                style={{ textDecoration: "none", color: "#C4C4C4" }}
                            >
                                Blog
                            </a>
                        </div>
                        <div
                            className="navButton"
                            onClick={event => {
                                showSpeed(event, "contact");
                            }}
                            href="#"
                            style={{ cursor: "pointer", color: "#C4C4C4" }}
                        >
                            {" "}
                            Contact Us
                        </div>
                        <div
                            href="#"
                            style={{
                                cursor: "pointer",
                                color: "white",
                                marginTop: "1vw",
                                padding: "0.2vw 1vw",
                                fontSize: "16px",
                                fontWeight: "650",
                            }}
                            onClick={() =>
                                window.open("https://app.social3.club/company/49", "_blank")
                            }
                            className="hire font-epilogue"
                        >
                            We are hiring!
                        </div>
                    </div>
                    <div
                        style={{
                            color: "white",
                            display: "flex",
                            flexDirection: "row",
                            gap: "0.5vw",
                            marginTop: "0.5vw",
                        }}
                        className="rightHeader font-epilogue"
                    >
                        <button
                            className="btn btn-outline-light w-[280px] lg:w-[200px] h-[60px] rounded-[2px] xs:hidden ss:hidden  sm:hidden"
                            style={{
                                border: "1px solid #01C5BA",
                                fontSize: "16px",
                                fontWeight: "500",
                            }}
                            onClick={() =>
                                window.open(
                                    "https://calendly.com/metakraft/call-with-metakraft",
                                    "_blank",
                                )
                            }
                        >
                            Talk to an expert
                        </button>
                        <button
                            disabled={connecting}
                            onClick={() =>
                                wallet ? disconnectWalletHandler() : connectWalletHandler()
                            }
                            className="btn bg-white text-black  w-[280px] lg:w-[200px] h-[60px] rounded-[2px] xs:hidden ss:hidden  sm:hidden"
                            style={{
                                border: "1px solid #01C5BA",

                                fontSize: "16px",
                                fontWeight: "500",
                            }}
                        >
                            {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"} Wallet
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;

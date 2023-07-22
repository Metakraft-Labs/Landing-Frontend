import { useConnectWallet } from "@web3-onboard/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Picture12 from "../Assets/Picture12.png";
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
                className="flex justify-between items-center"
                style={{
                    position: "fixed",
                    zIndex: "4",
                    top: "0",
                    left: "0",
                    right: "0",
                    backgroundColor: "rgba(8,8,8,0.7)",
                    borderBottom: "1px solid #1e262e",
                    paddingLeft: "2vw",
                    paddingRight: "2vw",
                    height: "3.8vw",
                }}
            >
                {/* <div style={{position:'absolute',top:"5vw",left:"26vw",backgroundColor:"#1b1b1b",height:"30vw",width:"20vw",borderRadius:"0.7vw",display:`${panel[0]}`}}></div> */}
                <div
                    id="alpha"
                    style={{
                        position: "absolute",
                        top: "3.5vw",
                        left: "31vw",
                        backgroundColor: "#1b1b1b",
                        height: "10vw",
                        width: "8vw",
                        borderRadius: "0.7vw",
                        display: `${panel[1]}`,
                        fontSize: "1.11vw",
                        color: "#9c9c9c",
                        border: "1px solid #9c9c9c",
                        textAlign: "center",
                    }}
                >
                    <div style={{ paddingTop: "1vw", cursor: "pointer" }}>
                        {" "}
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
                {/* <div style={{position:'absolute',top:"5vw",left:"37vw",backgroundColor:"#1b1b1b",height:"30vw",width:"20vw",borderRadius:"0.7vw",display:`${panel[2]}`}}></div>
  <div style={{position:'absolute',top:"5vw",left:"43vw",backgroundColor:"#1b1b1b",height:"30vw",width:"20vw",borderRadius:"0.7vw",display:`${panel[3]}`}}></div>
  <div style={{position:'absolute',top:"5vw",left:"47vw",backgroundColor:"#1b1b1b",height:"30vw",width:"20vw",borderRadius:"0.7vw",display:`${panel[4]}`}}></div> */}
                <div
                    className="navi"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-evenly",
                    }}
                >
                    <img
                        style={{ marginTop: "0.5vw", height: "2.5vw", cursor: "pointer" }}
                        src={Picture12}
                        alt="not found"
                        onClick={() => navigate("/")}
                    />
                    <div style={{ display: "flex", paddingLeft: "9%", fontSize: "0.9vw" }}>
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
                                fontSize: "1vw",
                                fontWeight: "650",
                            }}
                            onClick={() =>
                                window.open("https://app.social3.club/company/49", "_blank")
                            }
                            className="hire"
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
                        className="rightHeader"
                    >
                        <button
                            className="btn btn-outline-light"
                            style={{
                                height: "2.5vw",
                                border: "0.125vw solid #01C5BA",
                                borderRadius: "0.2vw",
                                padding: "0 4vw",
                                fontSize: "0.9vw",
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
                            className="btn bg-white text-black"
                            style={{
                                height: "2.5vw",
                                border: "0.125vw solid #01C5BA",
                                borderRadius: "0.2vw",
                                padding: "0 4vw",
                                fontSize: "0.9vw",
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

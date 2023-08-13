import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useConnectWallet } from "@web3-onboard/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aiverselogo from "../Assets/aiverselogo.svg";
import aiverselogo1 from "../Assets/aiverselogo1.png";
import "../Style/header.css";
import { useWallet } from "../hooks/useWallet";
import { navVariants } from "../utils/motion";

function Header() {
    const [toggle, setToggle] = useState();
    const [click, setClick] = useState();

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
            //         let buttonList = document.getElementsByClassName("navButton");
            //         for (let i = 0; i < buttonList.length; ++i) {
            //             if (i == 1) continue;
            //             console.log(i);
            //             let set = ["none", "none", "none", "none", "none"];
            //             buttonList[i].addEventListener("mouseenter", function (event) {
            //                 event.target.style.color = "#88b2db";
            //                 event.target.style.borderRadius = "0.7vw";
            //                 event.target.style.backgroundColor = "#1B1B1B";
            //                 set[i] = "block";
            //                 setPanel(set);
            //             });
            //             buttonList[i].addEventListener("mouseleave", function () {
            //                 buttonList[i].style.color = "#a390a4";
            //                 buttonList[i].style.borderRadius = "0";
            //                 buttonList[i].style.backgroundColor = "transparent";
            //                 setPanel(["none", "none", "none", "none", "none"]);
            //             });
            //         }
            //         let set = ["none", "none", "none", "none", "none"];
            //         buttonList[1].addEventListener("mouseenter", function (event) {
            //             event.target.style.color = "#88b2db";
            //             event.target.style.borderRadius = "0.7vw";
            //             event.target.style.backgroundColor = "#1B1B1B";
            //             set[1] = "block";
            //             setPanel(set);
            //         });
            //         buttonList[1].addEventListener("mouseleave", function () {
            //             buttonList[1].style.color = "#a390a4";
            //             buttonList[1].style.borderRadius = "0";
            //             buttonList[1].style.backgroundColor = "transparent";
            //         });
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
            <motion.div
                whileInView="show"
                initial="hidden"
                variants={navVariants}
                className="flex justify-between items-center flex-row xl:mx-44 mx-32 sm:mx-16 ss:mx-14 xs:mx-10 mt-6 rounded-full backdrop-blur-xl bg-black/50 "
                style={{
                    position: "fixed",
                    zIndex: "4",
                    top: "0",
                    left: "0",
                    right: "0",
                    // backgroundColor: "rgba(8,8,8,0.7)",
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
                ></div>
                <div className="navi w-full flex flex-row px-10 md:px-8 xs:px-5 py-[38px] justify-between items-center ">
                    <img
                        // style={{ marginTop: "0.5vw", height: "2.5vw", cursor: "pointer" }}
                        src={aiverselogo}
                        className="w-[146px] xs:hidden ss:hidden sm:hidden md:hidden h-[39px] cursor-pointer"
                        alt="not found"
                        onClick={() => navigate("/")}
                    />
                    <img src={aiverselogo1} alt="" className="lg:hidden xl:hidden" />

                    <div className="font-inter text-[#C4C4C4]  xs:hidden ss:hidden sm:hidden flex justify-between items-center ">
                        <div
                            className="navButton cursor-pointer px-6 md:px-2  lg:px-2 hover:text-[#88b2db] ease-in-out duration-300"
                            onClick={event => {
                                showSpeed(event, "");
                            }}
                            href="#"
                        >
                            Home
                        </div>

                        <div
                            className="navButton cursor-pointer px-6 md:px-2  lg:px-2 hover:text-[#88b2db] ease-in-out duration-300"
                            onClick={event => {
                                showSpeed(event, "about");
                            }}
                            href="#"
                        >
                            About
                        </div>

                        <div
                            className="navButton cursor-pointer px-6 md:px-2  lg:px-2 hover:text-[#88b2db] ease-in-out duration-300"
                            onClick={event => {
                                showSpeed(event, "contact");
                            }}
                            href="#"
                        >
                            Contact
                        </div>
                        <div
                            href="#"
                            style={{
                                cursor: "pointer",
                                color: "white",

                                fontSize: "16px",
                                fontWeight: "650",
                            }}
                            onClick={() =>
                                window.open("https://app.social3.club/company/49", "_blank")
                            }
                            className="hire font-epilogue px-6 md:px-2 lg:px-2 ease-in-out duration-300"
                        >
                            We are hiring!
                        </div>

                        <div onClick={() => setClick(prev => !prev)}>
                            {click ? (
                                <MoreVertIcon
                                    fontSize="medium"
                                    className="text-white flex justify-center items-center"
                                />
                            ) : (
                                <MoreVertIcon
                                    fontSize="medium"
                                    className="text-[#e6e5e5] flex justify-center items-center"
                                />
                            )}

                            <div
                                className={`${
                                    click ? "flex" : "hidden"
                                } sidebar bg-[#111111] shadow-sm shadow-[#464545] h-fit py-16 px-20 absolute top-28 rounded-[32px]  flex flex-col ease-in duration-500  `}
                            >
                                <div
                                    className="navButton py-4 cursor-pointer hover:text-[#88b2db] ease-in-out duration-300"
                                    href="#"
                                >
                                    Discover
                                </div>
                                <div className="navButton py-4 cursor-pointer hover:text-[#88b2db] ease-in-out duration-300">
                                    <a href="https://linktr.ee/metakraft">Creators</a>
                                </div>
                                <div className="navButton py-4 cursor-pointer hover:text-[#88b2db] ease-in-out duration-300">
                                    Pine(Soon)
                                </div>
                                <div className="navButton py-4 cursor-pointer hover:text-[#88b2db] ease-in-out duration-300">
                                    Lemon(Soon)
                                </div>

                                <div className="navButton py-4 cursor-pointer  hover:text-[#88b2db] ease-in-out duration-300">
                                    <a href="https://blog.metakraft.live/">Blog</a>
                                </div>
                            </div>
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
                            className="  text-[14px] md:text-[12px] w-[280px] md:w-[150px] lg:w-[150px] h-[60px] rounded-[2px] xs:hidden ss:hidden  sm:hidden hover:bg-[#1b1a1a] ease-in-out duration-300"
                            style={{
                                border: "1px solid #01C5BA",
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
                            className="bg-white text-black text-[14px]  md:text-[12px]  w-[280px] md:w-[150px] lg:w-[150px] h-[60px] rounded-[2px] xs:hidden ss:hidden  sm:hidden hover:bg-[#e2e1e1] ease-in-out duration-300"
                            style={{
                                border: "1px solid #01C5BA",

                                fontWeight: "500",
                            }}
                        >
                            {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"} Wallet
                        </button>
                    </div>

                    {/* ----------------------------------Mobile view------------------------------------------------ */}
                    <div
                        className="  md:hidden lg:hidden xl:hidden w-full  flex justify-end items-center text-white "
                        onClick={() => setToggle(prev => !prev)}
                    >
                        {toggle ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                        <div
                            className={`${
                                toggle ? "flex" : "hidden"
                            } sidebar  rounded-[32px] duration-500 ease-in-out text-[16px]  font-encodeSans bg-[#111111]  shadow-sm shadow-[#464545]  z-10 absolute top-[110px] h-fit py-16 text-white flex flex-col justify-start items-start xs:px-12 ss:px-20 px-32 w-full left-[0.15%]`}
                        >
                            <ul className="text-left ">
                                <li className={``}>
                                    <div
                                        className="navButton py-3"
                                        onClick={event => {
                                            showSpeed(event, "");
                                        }}
                                        href="#"
                                        style={{ cursor: "pointer", color: "#C4C4C4" }}
                                    >
                                        Home
                                    </div>
                                </li>
                                <li className={``}>
                                    <div className="navButton py-3" style={{ cursor: "pointer" }}>
                                        Pine(Soon)
                                    </div>
                                </li>
                                <li className={``}>
                                    <div className="navButton py-3" style={{ cursor: "pointer" }}>
                                        Lemon(Soon)
                                    </div>
                                </li>
                                <li className={``}>
                                    <div
                                        className="navButton py-3"
                                        onClick={event => {
                                            showSpeed(event, "about");
                                        }}
                                        href="#"
                                        style={{ cursor: "pointer", color: "#C4C4C4" }}
                                    >
                                        About
                                    </div>
                                </li>
                                <li className={``}>
                                    <div
                                        className="navButton py-3"
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
                                </li>
                                <li className={``}>
                                    <div
                                        className="navButton py-3"
                                        onClick={event => {
                                            showSpeed(event, "contact");
                                        }}
                                        href="#"
                                        style={{ cursor: "pointer", color: "#C4C4C4" }}
                                    >
                                        Contact
                                    </div>
                                </li>
                                <li className={``}>
                                    <div
                                        href="#"
                                        style={{
                                            cursor: "pointer",
                                            color: "white",

                                            fontSize: "16px",
                                            fontWeight: "650",
                                        }}
                                        onClick={() =>
                                            window.open(
                                                "https://app.social3.club/company/49",
                                                "_blank",
                                            )
                                        }
                                        className="hire font-epilogue text-[16px] py-3"
                                    >
                                        We are hiring!
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Header;

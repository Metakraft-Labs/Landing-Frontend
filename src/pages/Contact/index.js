import React from "react";
import "../../Style/contact.css";
// import { Button } from 'react-bootstrap';
import c1 from "../../Assets/c1.png";
import c2 from "../../Assets/c2.png";
import c3 from "../../Assets/c3.png";
import contact1 from "../../Assets/contact1.png";
import contact2 from "../../Assets/contact2.png";
import contact3 from "../../Assets/contact3.png";
import contact4 from "../../Assets/contact4.png";
import contact5 from "../../Assets/contact5.png";
import e1 from "../../Assets/e1.png";
import e2 from "../../Assets/e2.png";
import e3 from "../../Assets/e3.png";
import { navVariants } from "../../utils/motion";

import { motion } from "framer-motion";
import Title from "../../shared/Title";

function Contact() {
    return (
        <>
            <Title title={"Contact Us"} />
            <div className="contact  ">
                <div className="mt-32 flex xs:text-center ss:text-center sm:text-center  justify-between items-center border-b-[1px] border-[#393556] xs:flex-col ss:flex-col sm:flex-col xs:py-12 ss:py-12 sm:py-12 xl:px-44 px-32 sm:px-16 ss:px-14 xs:px-10">
                    <div className="contactHeadingFirst xs:border-r-0 ss:border-r-0 sm:border-r-0  border-r-[1px] border-[#393556]  ">
                        <div className="text-[#D0DBFF]  xs:pb-12  pr-60 xs:pr-0 ss:pr-0 sm:pr-0 font-encodeSans font-black leading-[137px] md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[60px] text-[80px] sm:text-[70px] ss:text-[60px] xs:text-[50px]">
                            WE&apos;D LOVE TO <br />
                            <span className="contactFirstSecond  text-[128px] leading-[137px] md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[70px]  sm:text-[85px] ss:text-[80px] xs:text-[70px]">
                                Help
                            </span>
                        </div>
                    </div>
                    <div className="contactHeadingSecond text-[64px]  ss:text-[55px] xs:text-[45px] pl-20 xs:pl-0 ss:pl-0 sm:pl-0 basis-[20%] font-bold font-epilogue text-white">
                        Get in touch
                    </div>
                </div>

                <div className="flex justify-between h-[400px] xs:flex-col ss:flex-col sm:flex-col  items-center xl:px-44 px-32 sm:px-32   ss:px-14 xs:px-10 mt-28">
                    <div className="border-[1px] border-[#BAB0FF] rounded-[23px] h-full p-12 md:p-8 xs:p-7 xs:w-full ss:w-full sm:w-full flex flex-col justify-center items-center text-center xl:items-start xl:text-left lg:items-start lg:text-left ">
                        <div>
                            <svg
                                width="4.9vw"
                                height="4.9vw"
                                viewBox="0 0 53 55"
                                style={{ fill: "#7ECAE2" }}
                                xmlns="http://www.w3.org/2000/svg"
                                className="xs:h-[50px] xs:w-[50px]"
                            >
                                <path
                                    d="M47.077 38.1319C43.6833 35.3311 40.2392 33.6346 36.8872 36.4311L34.8856 38.1213C33.4211 39.3483 30.6983 45.081 20.1708 33.3956C9.64554 21.725 15.909 19.9079 17.3756 18.6915L19.3882 16.9992C22.7227 14.1963 21.4643 10.6679 19.0593 7.03576L17.608 4.83576C15.1921 1.2121 12.5613 -1.16771 9.21804 1.63095L7.41158 3.15403C5.93396 4.19268 1.80365 7.56883 0.801767 13.9827C-0.404002 21.6784 3.39965 30.4911 12.1141 40.1606C20.8175 49.8342 29.339 54.6933 37.4111 54.6086C44.1196 54.5388 48.171 51.0654 49.4381 49.8025L51.2512 48.2773C54.5857 45.4808 52.5139 42.6334 49.118 39.8263L47.077 38.1319Z"
                                    fill="#7ECAE2"
                                />
                            </svg>
                        </div>
                        <div className="text-[36px] xs:text-[30px] mt-6 font-sora text-[#F7F7F7]">
                            Contact Us
                        </div>
                        <div className="text-[#CECCD6]">
                            Schedule a meeting with our team and ask anything about us.
                        </div>
                        <button
                            className="w-full border-[1px] rounded-[8px] border-[#E1E1E1] bg-[#1E262E] text-white font-epilogue text-[16px] xs:text-[12px] py-4 mt-6 mb-10   "
                            onClick={() =>
                                window.open(
                                    "https://calendly.com/metakraft/call-with-metakraft",
                                    "_blank",
                                )
                            }
                        >
                            Schedule Call
                        </button>
                    </div>
                    <div className="border-[1px] border-[#BAB0FF] rounded-[23px] h-full p-12 md:p-8  xs:p-7 xs:w-full ss:w-full  sm:w-full flex flex-col justify-center items-center text-center  xl:items-start xl:text-left lg:items-start lg:text-left ">
                        <div>
                            <svg
                                width="3.9vw"
                                height="3.9vw"
                                viewBox="0 0 49 36"
                                style={{ fill: "#7ECAE2" }}
                                xmlns="http://www.w3.org/2000/svg"
                                className="xs:h-[50px] xs:w-[50px]"
                            >
                                <path
                                    d="M10.1363 0.661896C5.30556 0.661896 1.5246 1.77555 0.857224 6.01138C0.643473 7.36771 1.1137 8.7024 2.19432 9.66657C2.73107 10.1454 3.29871 10.7152 4.04921 11.2916C5.93259 12.7411 8.33372 14.3704 10.5805 15.8285C16.7626 19.8369 21.6432 22.3285 24.5336 22.3285C27.424 22.3285 32.3046 19.8369 38.4868 15.8285C40.7359 14.3704 43.137 12.7389 45.018 11.2916C45.7685 10.7152 46.3362 10.1476 46.8729 9.66657C47.9535 8.7024 48.4238 7.36771 48.21 6.01138C47.5426 1.77555 43.7617 0.661896 38.9309 0.661896H10.1363ZM0.783585 13.9999V26.6619C0.783585 31.448 5.03722 35.3285 10.2836 35.3285H38.7836C44.03 35.3285 48.2837 31.448 48.2837 26.6619V13.9999C46.3362 15.6877 44.1606 17.4297 41.085 19.4166C34.3495 23.7672 28.3004 26.6619 24.5336 26.6619C20.7669 26.6619 14.7177 23.7672 7.98223 19.4166C4.90423 17.4297 2.73109 15.6877 0.783585 13.9999Z"
                                    fill="#7ECAE2"
                                />
                            </svg>
                        </div>
                        <div className="text-[36px] xs:text-[30px]  mt-6  font-sora text-[#F7F7F7]">
                            Drop us an email
                        </div>
                        <div className="text-[#CECCD6]">
                            Don’t have time to schedule a meeting? Drop us an email
                        </div>
                        <button
                            className="w-full border-[1px] rounded-[8px] border-[#E1E1E1] bg-[#1E262E] text-white font-epilogue text-[16px] xs:text-[12px] py-4 mt-6 mb-10   "
                            onClick={() => window.open("mailto:team@metakraft.live", "_blank")}
                        >
                            Send an Email
                        </button>
                    </div>
                    <div className="border-[1px] border-[#BAB0FF] rounded-[23px] h-full p-12 md:p-8  xs:p-7 xs:w-full ss:w-full sm:w-full flex flex-col justify-center items-center text-center  xl:items-start xl:text-left  lg:items-start lg:text-left ">
                        <div>
                            <svg
                                width="3.9vw"
                                height="3.9vw"
                                viewBox="0 0 41 36"
                                style={{ fill: "#7ECAE2" }}
                                xmlns="http://www.w3.org/2000/svg"
                                className="xs:h-[50px] xs:w-[50px]"
                            >
                                <path
                                    d="M2.27687 12.502C0.94897 13.0935 0.124749 14.1465 0.112295 15.6372C0.10372 16.6794 0.766442 18.0791 2.09434 18.6511C2.6413 18.8872 10.321 19.9836 10.321 19.9836C10.321 19.9836 12.3537 26.802 13.0863 29.1984C13.2984 29.8917 13.4193 30.2319 13.8848 30.6847C14.6745 31.4517 16.0095 31.2113 16.5869 30.5959C18.1145 28.9709 20.529 26.4641 20.529 26.4641L21.5451 27.3416C21.5451 27.3416 26.0574 31.1614 28.5239 32.9597C29.9762 34.0192 30.9841 35.1242 32.6187 35.1307C33.4513 35.1351 34.7867 34.6952 35.6696 33.6227C36.2529 32.9142 36.6271 31.781 36.7719 30.7649C37.101 28.4574 40.962 3.50605 40.9456 2.63288C40.9195 1.23971 39.8152 0.455363 38.8972 0.46403C38.3207 0.47053 37.8456 0.648221 36.7884 0.990555C28.6107 3.64039 2.81852 12.2615 2.27687 12.502ZM32.779 6.96404C32.779 6.96404 22.003 16.9177 17.697 21.4981C16.3174 22.9649 16.22 25.4825 16.22 25.4825L13.9942 17.9252L32.779 6.96404Z"
                                    fill="#7ECAE2"
                                />
                            </svg>
                        </div>
                        <div className="text-[36px] xs:text-[30px]  mt-6  font-sora text-[#F7F7F7]">
                            Tell on Telegram
                        </div>
                        <div className="text-[#CECCD6]">
                            Join our telegram to receive real-time updates on Metakraft
                        </div>
                        <button
                            className="w-full border-[1px] rounded-[8px] border-[#E1E1E1] bg-[#1E262E] text-white font-epilogue text-[16px] xs:text-[12px] py-4 mt-6 mb-10   "
                            onClick={() =>
                                window.open("https://t.me/metakraftdiscussions", "_blank")
                            }
                        >
                            Connect on Telegram
                        </button>
                    </div>
                </div>

                <div className="relative xl:my-96 lg:my-96 my-[500px]  md:my-[500px] xs:mt-[1300px]  xs:mb-[600px]  ss:mt-[1140px] sm:mt-[1200px] flex justify-center items-center xl:mx-44 mx-32 sm:mx-16 ss:mx-14 xs:mx-10  ">
                    <div className="w-[278px] h-[304px] left-0  absolute z-[0] rotate-[-24deg] bg-[#AB4700] blur-[150px] rounded-[704px] "></div>
                    <div className="w-[440px] h-[278px] -right-96   absolute z-0 rotate-[-24deg] bg-[#2C00D9] blur-[200px] rounded-[300px] "></div>
                    <div className="w-[316px] h-[306px] -right-96 -top-2 absolute z-0 rotate-[27deg] bg-[#0FF] blur-[200px] rounded-[616px] "></div>
                    <div className="w-[529px] h-[306px] -right-96 -top-0 absolute z-0 rotate-[9deg] bg-[#F09] blur-[150px] rounded-[616px] "></div>
                    <div className="contactbg lg:w-[1126px] xl:w-[1126px] w-full xl:h-[563px] lg:h-[563px] h-[800px] xs:h-[1000px] absolute p-20  md:py-0 rounded-[37px] flex justify-center items-center overflow-hidden ">
                        <div className="flex xl:flex-row lg:flex-row flex-col items-center ">
                            <div className="font-encodeSans xs:absolute md:px-20 sm:px-16 ss:px-14 xs:px-10 xs:top-10  xs:text-center ss:absolute ss:top-20  ss:text-center sm:absolute sm:top-20 xs:p-12 ss:p-12  sm:text-center md:absolute md:top-20  md:text-center  text-[80px] xs:text-[35px] ss:text-[50px] sm:text-[60px] md:text-[70px] font-black text-[#D0DBFF] uppercase  ">
                                Join Our Community
                            </div>
                            <div className="font-encodeSans text-[80px] font-black text-[#D0DBFF] xs:hidden">
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="relative xl:-top-52 lg:-top-52 ss:top-0 top-0 -left-64 xs:-left-32 ss:-left-36 w-[100px] scale-105  hover:scale-125 duration-500     ease-in-out   "
                                >
                                    <img src={c1} alt="" className="absolute z-[1] left-2   " />
                                    <img
                                        src={e1}
                                        alt=""
                                        className="absolute z-0 left-[75px] -top-4    "
                                    />
                                    <img
                                        src={contact1}
                                        alt=""
                                        className="absolute z-[1] left-5  w-[70px] top-[15px]   "
                                    />
                                </motion.div>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="relative xl:-top-44 lg:-top-44 ss:-top-6 xs:-top-6 top-0 xl:-left-20 lg:-left-20 ss:-left-20 -left-24  w-[100px] scale-105  hover:scale-125 duration-500 "
                                >
                                    <img src={c2} alt="" className="absolute z-[1] left-20  " />
                                    <img
                                        src={e2}
                                        alt=""
                                        className="absolute z-0 left-[150px] -top-3 "
                                    />
                                    <img
                                        src={contact2}
                                        alt=""
                                        className="absolute z-[1] left-[104px] top-6   "
                                    />
                                </motion.div>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="relative xl:-top-8 lg:-top-8 ss:top-36 xs:top-36  top-44 xl:right-48 ss:right-32 xs:right-32 right-48   w-[100px] scale-105  hover:scale-125 duration-500 "
                                >
                                    <img src={c3} alt="" className="absolute z-[1] left-12  " />
                                    <img
                                        src={e3}
                                        alt=""
                                        className="absolute z-0 left-28 -top-3   "
                                    />
                                    <img
                                        src={contact3}
                                        alt=""
                                        className="absolute z-[1] left-[70px] top-5  "
                                    />
                                </motion.div>
                                <motion.img
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    src={contact4}
                                    alt=""
                                    className="absolute z-[1]  xl:top-96 lg:top-96 ss:top-[530px] xs:top-[530px]   top-[560px] right-64 ss:right-36 xs:right-36  xl:right-80 lg:right-80 scale-105  hover:scale-125 duration-500 "
                                />
                                <motion.img
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    src={contact5}
                                    alt=""
                                    className="absolute z-[1]  xl:top-96 lg:top-96 top-[400px] ss:right-20 right-24 xl:right-16 lg:right-16 scale-105  hover:scale-125 duration-500 "
                                />
                            </div>
                            <div className="ss:hidden sm:hidden md:hidden lg:hidden xl:hidden">
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="relative w-[100px] -top-44   scale-105  hover:scale-125 duration-500     ease-in-out   "
                                >
                                    <img src={c1} alt="" className="absolute z-[1] -top-16   " />
                                    <img
                                        src={e1}
                                        alt=""
                                        className="absolute z-0 left-[75px] -top-16    "
                                    />
                                    <img
                                        src={contact1}
                                        alt=""
                                        className="absolute z-[1] left-4  w-[70px] -top-12   "
                                    />
                                </motion.div>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="relative w-[100px] -top-24 -left-20 scale-105  hover:scale-125 duration-500 "
                                >
                                    <img src={c2} alt="" className="absolute z-[1] left-20  " />
                                    <img
                                        src={e2}
                                        alt=""
                                        className="absolute z-0 left-[150px] -top-3 "
                                    />
                                    <img
                                        src={contact2}
                                        alt=""
                                        className="absolute z-[1] left-[104px] top-6   "
                                    />
                                </motion.div>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="relative  w-[100px] top-12 -left-12 scale-105  hover:scale-125 duration-500 "
                                >
                                    <img src={c3} alt="" className="absolute z-[1] left-12  " />
                                    <img
                                        src={e3}
                                        alt=""
                                        className="absolute z-0 left-28 -top-3   "
                                    />
                                    <img
                                        src={contact3}
                                        alt=""
                                        className="absolute z-[1] left-[70px] top-5  "
                                    />
                                </motion.div>
                                <motion.img
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    src={contact4}
                                    alt=""
                                    className="absolute z-[1] top-[670px]  scale-105  hover:scale-125 duration-500 "
                                />
                                <motion.img
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    src={contact5}
                                    alt=""
                                    className="absolute z-[1] top-[840px] scale-105  hover:scale-125 duration-500 "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;

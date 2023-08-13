import { motion } from "framer-motion";
import React, { useState } from "react";
import Shadow from "../Assets/Shadow.png";
import Feature1 from "../Assets/feature-1.png";
import Feature2 from "../Assets/feature-2.png";
import Solana from "../Assets/solana-glow.png";
import "../Style/feature.css";
import { featureSlider } from "../data";
import { navVariants } from "../utils/motion";
import FeatureCard from "./featureCard.jsx";

function Feature() {
    const [active, setActive] = useState(2);
    const [mail1, setMail1] = useState("");
    const [mail2, setMail2] = useState("");
    const subscribe = async news => {
        const crudresponse = await fetch("https://blog.metakraft.live/api/newsletter/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: news,
                publicationId: "648e275cb3c039fc791a9e2b",
            }),
        });
        setMail1("");
        setMail2("");
        return await crudresponse.json();
    };
    const effect = event => {
        event.target.classList.add("feature-shadow-1");
        event.target.classList.remove("feature-hover");
        setTimeout(() => {
            console.log(event.target);
            event.target.classList.remove("feature-shadow-1");
            event.target.classList.add("feature-hover");
        }, 2000);
    };
    // const settings = {
    //     dots: false,
    //     infinite: true, // Enable infinite loop
    //     speed: 2000,
    //     slidesToShow: 1, // Number of slides to show at once
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     arrows: false,
    // };
    return (
        <div className=" bg-black w-full overflow-hidden   ">
            <img className="feature-shadow" src={Shadow} alt="image" />
            <div style={{ display: "flex", borderBottom: "1px solid #393556" }}>
                <div className="pt-[22vh] text-[105px] font-encodeSans font-extrabold   border-[1px] border-[#393556] ">
                    <h1 className="featureFirstFirst text-transparent bg-clip-text bg-gradient-to-r from-[#eaeaea] to-[#eaeaea]/50 mx-32 xl:mx-44 sm:mx-16 ss:mx-14 xs:mx-10 md:text-[110px] sm:text-[100px] ss:text-[80px] xs:text-[50px] leading-[93px] md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[60px]  pb-[7.72vh]">
                        Build Metaverses <br className="xs:hidden ss:hidden sm:hidden md:hidden" />{" "}
                        with Zero Code
                    </h1>
                </div>
            </div>

            <div className="flex lg:justify-between xl:justify-between justify-center xs:flex-col ss:flex-col sm:flex-col md:flex-col relative mx-32 xl:mx-44 sm:mx-16 ss:mx-14 xs:mx-10 lg:mt-20 lg:mb-64 xl:mt-20 xl:mb-64 mb-20  ">
                <div className="flex justify-center items-center">
                    <motion.img
                        whileInView="show"
                        initial="hidden"
                        variants={navVariants}
                        src={Feature1}
                        alt="image"
                        className="feature-2-1 absolute lg:top-3 xl:top-3 lg:-left-[64px] xl:-left-[64px] xs:hidden ss:hidden sm:hidden md:hidden"
                    />
                    <img src={Feature1} alt="image" className="feature-2-1 lg:hidden xl:hidden " />
                </div>
                <div className="feature-2-2 flex flex-col justify-center items-center lg:items-end lg:text-end xl:items-end xl:text-end text-center">
                    <div className=" font-encodeSans  text-[80px]  sm:text-[70px] ss:text-[65px] xs:text-[45px] md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[60px]  xs:mb-6 font-bold text-[#E3E3E3]">
                        Get Started for Free
                    </div>
                    <div className=" font-spaceGrotesk py-6 xs:pt-0 text-[24px]">
                        Build better metaverses effortlessly! For Your Client, Business or{" "}
                        <br className="xs:hidden ss:hidden sm:hidden md:hidden" />
                        Employee Onboarding.
                    </div>
                    <div className="feature-browsing-6_1 flex justify-between items-center w-[300px] h-[60px] ss:w-[400px] ss:h-[70px] sm:w-[434px] sm:h-[80px] md:w-[534px] md:h-[90px]   lg:w-[534px] lg:h-[90px] xl:w-[534px] xl:h-[90px]">
                        <div
                            className="feature-browsing-6-1 pl-8 xs:text-[20px] ss:text-[24px] sm:text-[28px] md:text-[34px]"
                            onClick={() => {
                                subscribe(mail1);
                            }}
                        >
                            &lt;
                        </div>
                        <input
                            value={mail1}
                            onChange={event => {
                                setMail1(event.target.value);
                            }}
                            type="text"
                            className="feature-browsing-6-2 font-spaceGrotesk xs:pl-4 "
                            placeholder="Enter Your Email"
                        />
                    </div>
                </div>
            </div>

            <div className=" mx-32 xl:mx-44 sm:mx-16 ss:mx-14 xs:mx-10 lg:pt-20 xl:pt-20 ">
                <div className="feature-3-1 font-encodeSans lg:text-left xl:text-left text-center text-[80px]  sm:text-[70px] ss:text-[65px] xs:text-[45px]  md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[60px] ">
                    Helping you focus <br className="xs:hidden ss:hidden sm:hidden md:hidden" />
                    What really matters
                </div>
                <div className="feature-3-3 font-spaceGrotesk mt-9 mb-16 lg:mb-32 xl:mb-32   lg:text-left xl:text-left text-center">
                    Browser-based platform, we aim to make creators accessible to a wide range of
                    users, regardless of being worried about their device or hardware.
                </div>
                <div className="flex justify-between xs:flex-col ss:flex-col sm:flex-col md:flex-col  items-center">
                    <motion.img
                        whileInView="show"
                        initial="hidden"
                        variants={navVariants}
                        src={Feature2}
                        className=""
                        alt="image"
                    />
                    <motion.button
                        whileInView="show"
                        initial="hidden"
                        variants={navVariants}
                        className="feature-3-5-2 feature-hover font-inter  text-[22px] xs:text-[20px] xs:w-[250px] xs:h-[60px] ss:h-[70px] sm:h-[80px] md:w-[300px] md:h-[90px]   w-[300px] lg:h-[90px] xl:h-[90px] rounded-[9px] mt-8 lg:mt-0 xl:mt-0"
                        onClick={effect}
                    >
                        Schedule Demo
                    </motion.button>
                </div>
                <div className="flex flex-col justify-end  items-center  text-center lg:items-end lg:text-right lg:my-24 xl:items-end xl:text-right xl:mt-24 mt-20 ">
                    <div className="feature-3-6 font-encodeSans text-[80px]  sm:text-[70px] ss:text-[65px] xs:text-[45px] md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[60px]">
                        Compatible with <br className="xs:hidden ss:hidden sm:hidden md:hidden " />
                        all Major tools
                    </div>
                    <div className="feature-3-8 font-spaceGrotesk">
                        We supports all most used asset design tools, making it easy to integrate
                        into your workflow. Its{" "}
                        <br className="xs:hidden ss:hidden sm:hidden md:hidden lg:hidden" />
                        drag-and-drop interface enables easy asset importing and creation within the
                        platform.
                    </div>
                </div>
            </div>

            <progress
                value="25"
                max="100"
                className="feature-3-10"
                style={{ visibility: "hidden" }}
            ></progress>

            <div className="my-0 flex lg:flex-row xl:flex-row flex-col min-h-[70vh] xs:min-h-[80vh] ease-in duration-500  gap-5 mx-32 xl:mx-44 sm:mx-16 ss:mx-14 xs:mx-10">
                {featureSlider.map((feature, index) => (
                    <FeatureCard
                        key={feature.id}
                        {...feature}
                        index={index}
                        active={active}
                        handleClick={setActive}
                    />
                ))}
            </div>
            <div className="flex justify-center relative my-96 xs:my-52   items-center mx-32 xl:mx-44 sm:mx-16 ss:mx-14 xs:mx-10">
                <div className="feature-3-14 feature-bg rounded-[20px] absolute z-[0] h-[551px] xs:h-[300px] w-full  flex flex-col justify-center items-center ">
                    <div className="feature-3-14-1 z-[1] text-[100px]  sm:text-[70px] ss:text-[65px] xs:text-[36px] absolute top-[140px] xs:top-20  leading-[0]  uppercase text-[#D0DBFF] font-fira tracking-wide ">
                        Metaverses
                    </div>
                    <div className="feature-3-14-2 z-[1] text-[50px] md:text-[44px] sm:text-[36px] ss:text-[28px] xs:text-[16px] absolute top-[180px] xs:top-28 font-fira tracking-wide  text-[#D0DBFF] uppercase">
                        MADE SIMPLE WITH FEW CLICKS
                    </div>

                    <div className="absolute bottom-[80px]">
                        <motion.button
                            whileInView="show"
                            initial="hidden"
                            variants={navVariants}
                            className="feature-3-14-3 feature-hover text-[18px] font-inter bg-white text-black xs:w-[200px] xs:h-[60px] ss:w-[300px] ss:h-[70px] sm:h-[80px] "
                            onClick={effect}
                        >
                            Contact Us
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className=" flex justify-between items-center xs:justify-center relative">
                <div className="">
                    <img
                        src={Solana}
                        alt="image"
                        className="feature-last-image absolute top-20 z-0 "
                    />
                </div>
                <div className="feature-browsing-5 px-32 sm:px-16 ss:px-14 xs:px-10 flex flex-col lg:items-end xl:items-end items-center ">
                    <div className="feature-browsing-5-1 font-spaceGrotesk ">
                        Stay Updated with Latest
                    </div>
                    <div className="feature-browsing-5-2 font-roboto">Get Your Newsletter</div>
                    <div className="feature-browsing-6 flex justify-center items-center w-[300px] h-[60px] ss:w-[400px] ss:h-[70px] sm:w-[434px] sm:h-[80px] md:w-[534px] md:h-[90px]   lg:w-[534px] lg:h-[90px] xl:w-[534px] xl:h-[90px]">
                        <div
                            className="feature-browsing-6-1 lg:ml-10 xl:ml-10 ml-0 xs:text-[20px] ss:text-[24px] sm:text-[28px] md:text-[34px]"
                            onClick={() => {
                                subscribe(mail2);
                            }}
                        >
                            &lt;
                        </div>
                        <input
                            type="text"
                            value={mail2}
                            onChange={event => {
                                setMail2(event.target.value);
                            }}
                            className="feature-browsing-6-2 xs:text-[16px] font-spaceGrotesk"
                            placeholder="Enter Your Email"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;

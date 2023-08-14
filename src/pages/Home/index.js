import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Animate from "../../Assets/Animated.mp4";
import disney from "../../Assets/feedback/disney.svg";
import mani from "../../Assets/feedback/mani.svg";
import nandit from "../../Assets/feedback/nandit.svg";
import navmeet from "../../Assets/feedback/navmeet.svg";
import prasanna from "../../Assets/feedback/prasanna.svg";
import rye from "../../Assets/feedback/rye.svg";
import Ipad_Mini from "../../Assets/iPad Mini.svg";
import Ipad_Mini1 from "../../Assets/iPad_Mini.svg";
import metakraft from "../../Assets/metakraft.png";
import Solana from "../../Assets/solana.png";
import "../../Style/feature.css";
import "../../Style/home.css";
import { slider1 } from "../../data";
import Title from "../../shared/Title";
import { navVariants } from "../../utils/motion";

function Home() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            // fire animation
            mainControls.start("show");
        }
    }, [isInView]);

    // const { token } = useContext(AppStore);
    const [news, setNews] = useState("");

    const videoRef = useRef();
    const [stop, setStop] = useState(false);

    const handleVideo = () => {
        setStop(!stop);
        if (stop === true) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
    };

    const [mail2, setMail2] = useState("");
    const subscribe = async () => {
        const crudresponse = await fetch("https://blog.metakraft.live/api/newsletter/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: news,
                publicationId: "648e275cb3c039fc791a9e2b",
            }),
        });
        setNews("");
        return await crudresponse.json();
    };
    // const settings = {
    //     dots: false,
    //     infinite: true, // Enable infinite loop
    //     speed: 3000,
    //     slidesToShow: 9, // Number of slides to show at once
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     arrows: false,
    // };

    return (
        <>
            <Title title={"Home"} />
            <div className={`w-full overflow-hidden`}>
                {/* <InfiniteSpace /> */}

                <div
                    className={`bg-black xl:px-44 px-32 sm:px-16 ss:px-14 xs:px-10 h-[800px] md:h-[780px] xs:h-[600px] ss:h-[650px] flex justify-start items-center`}
                >
                    <div>
                        <div className="mt-5 xs:mt-32">
                            <h1 className="text-[#EAEAEA] font-encodeSans leading-[137px] md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[60px] text-[110px] md:text-[100px] sm:text-[100px] ss:text-[80px] xs:text-[50px] font-bold">
                                Create, Launch <br className="xs:hidden ss:hidden sm:hidden" />
                                <span
                                    className={`text-transparent bg-clip-text bg-gradient-to-r from-[#016DB0] to-[#01FFCA]`}
                                >
                                    Monetize!
                                </span>
                            </h1>
                            <p className="home-partner-4-3 font-spaceGrotesk">
                                3D experiences in a Minute with your community across platforms{" "}
                            </p>
                        </div>
                        <div
                            ref={ref}
                            className={`my-6 mt-10 flex flex-row text-[22px] xs:text-[16px] ss:text-[16px] xs:flex-col font-bold font-inter `}
                        >
                            <motion.button
                                whileInView="show"
                                initial="hidden"
                                variants={navVariants}
                                // animate={mainControls}
                                // initial="hidden"
                                // transition={{
                                //     duration: 0.5,
                                //     delay: 0.25,
                                // }}
                                // variants={{
                                //     hidden: {
                                //         opacity: 0,
                                //         y: 75,
                                //     },
                                //     show: {
                                //         opacity: 1,
                                //         y: 0,
                                //     },
                                // }}
                                className="home-partner-3 home-head-3-12 w-[277px] h-[79px] xs:w-[160px] xs:h-[48px]  ss:w-[160px] ss:h-[48px]  rounded-[8px]"
                            >
                                Early Access
                            </motion.button>
                            <motion.button
                                whileInView="show"
                                initial="hidden"
                                variants={navVariants}
                                className="home-partner-3 home-head-3-12 w-[277px] h-[79px] xs:w-[160px] xs:h-[48px]  ss:w-[160px] ss:h-[48px]  rounded-[8px] xs:ml-0 xs:mt-4 ml-12"
                            >
                                Refer & Win
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div className="punc1">?</div>
                <div className="punc2">#</div>
                <div className="punc3">$</div>

                <div className="home-live py-6 flex justify-center items-center">
                    <div className="home-live-gradient ">
                        <img
                            className="home-live-1 h-[42px] w-[44px]"
                            src={metakraft}
                            alt="home-live"
                        />
                    </div>
                    <div className="text-[20px] xs:text-[16px] font-robotoMono font-bold leading-[105.5%]">
                        We are live! Learn More -&gt;
                    </div>
                </div>
                <div className="home-partner ">
                    <div className="home-partner-1 mt-9 xs:mb-0 text-[80px] sm:text-[70px] ss:text-[65px] xs:text-[45px]   font-spaceGrotesk">
                        Ecosystem & <br />
                        Strategic Partners
                    </div>

                    <div className="flex mt-8 md:mt-0 xl:mx-96 ">
                        <div
                            id="slideshow"
                            className="mt-16 xs:mt-4 ss:mt-3"
                            style={{
                                width: "100%",
                                background: "transparent",
                            }}
                        >
                            <Marquee>
                                {slider1.map(slide => (
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                        key={slide.id}
                                    >
                                        <img
                                            className="w-[56px] h-[56px] mr-16 xs:mr-5"
                                            src={slide.img}
                                            alt="logo-1"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                    <div className="home-demo xs:w-full ss:w-full sm:w-full md:w-full ss:px-14 sm:px-16 md:px-20 px-10 mt-16">
                        <video
                            ref={videoRef}
                            className="home-demo-video"
                            src={Animate}
                            type="video/mp4"
                            autoPlay
                            loop
                            muted
                        ></video>
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }} className="mt-5">
                        <motion.button
                            whileInView="show"
                            initial="hidden"
                            variants={navVariants}
                            className="home-partner-3 home-head-3-12 w-[325px] h-[78px] xs:w-[160px] xs:h-[48px]  rounded-[9px] text-[22px] xs:text-[16px] ss:text-[16px] font-inter "
                            onClick={handleVideo}
                        >
                            Watch Demo
                        </motion.button>
                    </div>
                    <div className="home-partner-4 flex xs:flex-col ss:flex-col sm:flex-col md:justify-between md:flex-col mt-10 px-32  xs:px-10 ss:px-14 sm:px-16 md:px-20 xl:px-44">
                        <div
                            style={{ paddingTop: "4vw" }}
                            className="basis-[60%] ss:basis-[100%] font-spaceGrotesk lg:text-left xl:text-left text-center"
                        >
                            <h2 className="home-partner-4-2 text-[80px] sm:text-[70px] ss:text-[65px] xs:text-[45px] xs:mb-6 ">
                                Seamless Experience!
                            </h2>
                            <div className="home-partner-4-3" style={{ marginTop: "2vw" }}>
                                Unleash your imagination with an AI-driven, browser-based platform.
                                Build, customize, and connect in a secure environment, exploring
                                endless possibilities and redefining the virtual realm effortlessly.
                            </div>
                        </div>
                        <div className="">
                            <motion.img
                                whileInView="show"
                                initial="hidden"
                                variants={navVariants}
                                className="w-full h-full top-0 relative z-[1] -rotate-3    "
                                src={Ipad_Mini1}
                                alt="partner-4"
                            />
                        </div>
                    </div>
                    <div className="home-partner-5 flex xs:flex-col  md:justify-between ss:flex-col sm:flex-col md:flex-col xs:px-10 ss:px-14 sm:px-16 md:px-20 px-32">
                        <div className=" xs:hidden ss:hidden sm:hidden md:hidden">
                            <motion.img
                                whileInView="show"
                                initial="hidden"
                                variants={navVariants}
                                className="home-partner-4-1 w-full h-full"
                                src={Ipad_Mini}
                                alt="partner-5"
                            />
                        </div>
                        <div className="basis-[50%] ss:basis-[100%] font-spaceGrotesk xl:mb-24">
                            <h2 className="home-partner-4-2 lg:text-right xl:text-right text-center text-[80px] sm:text-[70px] ss:text-[65px] xs:text-[45px] xs:mb-6 ">
                                Designed to Scale with your Need
                            </h2>
                            <div
                                className="home-partner-4-3 lg:text-right xl:text-right text-center"
                                style={{ marginTop: "2vw" }}
                            >
                                Metakraft is designed to scale with your business, creating engaging
                                virtual environments that can attract and retain as users grows
                                while generating revenue.
                            </div>
                        </div>
                        <div className=" xl:hidden lg:hidden">
                            <img
                                className="home-partner-4-1 w-full h-full "
                                src={Ipad_Mini}
                                alt="partner-5"
                            />
                        </div>
                    </div>
                    <div className="home-floor flex flex-row xs:flex-col ss:flex-col sm:flex-col md:flex-col items-center mx-20 xs:mx-10 ss:mx-14 sm:mx-16 lg:mt-20  font-spaceGrotesk  ">
                        <div className=" flex justify-center items-center xs:flex-col ">
                            <div style={{ marginRight: "1.5vw" }}>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="home-floor-1-1 w-[180px] h-[180px] mb-6"
                                >
                                    <div className="home-floor-1-2 xs:text-[30px] font-roboto">
                                        Browser
                                    </div>
                                    <div className="home-floor-1-3 xs:text-[20px]">Supported</div>
                                </motion.div>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="home-floor-1-1 w-[180px] h-[180px] mb-6"
                                >
                                    <div className="home-floor-1-2 xs:text-[30px] font-roboto">
                                        AI Enabled
                                    </div>
                                    <div className="home-floor-1-3 xs:text-[20px]">
                                        Asset Design
                                    </div>
                                </motion.div>
                            </div>
                            <div ref={ref}>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="home-floor-1-1 w-[180px] h-[180px] mb-6"
                                    style={{ marginTop: "0" }}
                                >
                                    <div className="home-floor-1-2 xs:text-[30px]  font-roboto">
                                        500K+
                                    </div>
                                    <div className="home-floor-1-3 xs:text-[20px]">
                                        Assets to use
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className="home-floor-1-1 w-[180px] h-[180px] mb-6"
                                >
                                    <div className="home-floor-1-2 xs:text-[30px] font-roboto">
                                        Mint
                                    </div>
                                    <div className="home-floor-1-3 xs:text-[20px]">3D Assets</div>
                                </motion.div>
                            </div>
                        </div>

                        <div className=" xs:hidden ss:hidden sm:hidden md:hidden flex flex-row justify-between overflow-hidden relative h-[630px] xs:h-[700px] ss:h-[350px] w-[695px] xs:w-full ss:w-full border-white border-[4px] rounded-[2vh]">
                            {/* --------------------------first column--------------------------- */}

                            <Marquee
                                direction="up"
                                style={{
                                    height: "100%",
                                    width: "120%",
                                    display: "flex",
                                    position: "absolute",
                                    left: "-390px",
                                    top: "0",
                                    bottom: "0",
                                }}
                            >
                                {/* In marquee, here we are using vertical sliding. So you height instead of width and vice versa */}

                                <div className=" flex flex-col p-4 w-[306px] mr-4 rounded-[23px] bg-white">
                                    <div className="gradient1 h-[206px] w-full rounded-[15.2px]"></div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px] mr-4 rounded-[23px] bg-white">
                                    <div className="gradient1 h-[206px] w-full rounded-[15.2px]"></div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px] mr-4 rounded-[23px] bg-white">
                                    <div className="gradient1 h-[206px] w-full rounded-[15.2px]"></div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                            </Marquee>

                            {/* --------------------------Second column--------------------------- */}
                            <Marquee
                                direction="down"
                                style={{
                                    height: "100%",
                                    width: "120%",
                                    display: "flex",
                                    position: "absolute",
                                    left: "-60px",
                                    top: "0",
                                    bottom: "0",
                                }}
                            >
                                {/* In marquee, here we are using vertical sliding. So you height instead of width and vice versa */}

                                <div className=" flex flex-col p-4 w-[306px] mr-4 my-4 rounded-[23px] bg-white">
                                    <div className="gradient1 h-[206px] w-full rounded-[15.2px]"></div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px] mr-4 my-4 rounded-[23px] bg-white">
                                    <div className="gradient1 h-[206px] w-full rounded-[15.2px]"></div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px] mr-4 my-4 rounded-[23px] bg-white">
                                    <div className="gradient1 h-[206px] w-full rounded-[15.2px]"></div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                            </Marquee>
                            {/* --------------------------Third column--------------------------- */}
                            <Marquee
                                direction="up"
                                style={{
                                    height: "100%",
                                    width: "120%",
                                    display: "flex",
                                    position: "absolute",
                                    right: "-400px",
                                    top: "0",
                                    bottom: "0",
                                }}
                            >
                                {/* In marquee, here we are using vertical sliding. So you height instead of width and vice versa */}

                                <div className=" flex flex-col p-4 w-[306px] mr-4 rounded-[23px] bg-white">
                                    <div className="gradient1 h-[206px] w-full rounded-[15.2px]"></div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px] mr-4 rounded-[23px] bg-white">
                                    <div className="gradient1 h-[206px] w-full rounded-[15.2px]"></div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px] mr-4 rounded-[23px] bg-white">
                                    <div className="gradient1 h-[206px] w-full rounded-[15.2px]"></div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                            </Marquee>
                        </div>

                        <div className=" flex flex-col justify-between lg:hidden xl:hidden overflow-hidden relative h-[691px] xs:h-fit ss:h-fit sm:h-fit md:h-fit w-[695px] xs:w-full ss:w-full border-white border-[4px] rounded-[2vh]">
                            <Marquee
                                style={{
                                    display: "flex",
                                    marginTop: "12px",
                                }}
                            >
                                <div className=" flex flex-col p-4 w-[306px] mr-4   rounded-[23px] bg-white">
                                    <div className="gradient1 h-[150px] w-full rounded-[15.2px]">
                                        first
                                    </div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px]  mr-4   rounded-[23px] bg-white">
                                    <div className="gradient1 h-[150px] w-full rounded-[15.2px]">
                                        second
                                    </div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px] mr-4  rounded-[23px] bg-white">
                                    <div className="gradient1 h-[150px] w-full rounded-[15.2px]">
                                        third
                                    </div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                            </Marquee>
                            <Marquee
                                direction="right"
                                style={{
                                    display: "flex",
                                    marginTop: "12px",
                                    marginBottom: "12px",
                                }}
                            >
                                <div className=" flex flex-col p-4 w-[306px] mr-4   rounded-[23px] bg-white">
                                    <div className="gradient1 h-[150px] w-full rounded-[15.2px]">
                                        first
                                    </div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px]  mr-4   rounded-[23px] bg-white">
                                    <div className="gradient1 h-[150px] w-full rounded-[15.2px]">
                                        second
                                    </div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px] mr-4  rounded-[23px] bg-white">
                                    <div className="gradient1 h-[150px] w-full rounded-[15.2px]">
                                        third
                                    </div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                            </Marquee>
                            <Marquee
                                style={{
                                    display: "flex",
                                    marginBottom: "12px",
                                }}
                            >
                                <div className=" flex flex-col p-4 w-[306px] mr-4   rounded-[23px] bg-white">
                                    <div className="gradient1 h-[150px] w-full rounded-[15.2px]">
                                        first
                                    </div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px]  mr-4   rounded-[23px] bg-white">
                                    <div className="gradient1 h-[150px] w-full rounded-[15.2px]">
                                        second
                                    </div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                                <div className=" flex flex-col p-4 w-[306px] mr-4  rounded-[23px] bg-white">
                                    <div className="gradient1 h-[150px] w-full rounded-[15.2px]">
                                        third
                                    </div>
                                    <div className="flex flex-row my-4">
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                        <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                    </div>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                    <div className="pt-28 feedback-bg">
                        <div className="flex justify-center items-center flex-col xs:text-center xs:px-10 ss:px-14 sm:px-16">
                            <div className="home-slide-1 text-[80px]  sm:text-[70px] ss:text-[65px] xs:text-[45px]  font-spaceGrotesk">
                                What Others Says
                                {/* md:text-[110px] sm:text-[100px] ss:text-[65px] xs:text-[32px] xs:mb-6  */}
                            </div>
                            <div className="home-slide-2 font-sora xs:text-[20px] ss:text-[32px] sm:text-[38px] mb-8">
                                Made by Builder&apos;s for the Builder&apos;s
                            </div>
                        </div>

                        <div className=" font-sans grid grid-cols-2 xs:grid-cols-1 ss:grid-cols-1 sm:grid-cols-1 md:grid-cols-1  place-items-center mx-32 xl:mx-44 xs:mx-10 ss:mx-14 sm:mx-16 ">
                            {/* -------------------------First Column------------------------------ */}

                            <div className=" flex flex-col justify-end ">
                                <div className="py-10 xs:hidden"></div>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className=" home-slide-3-1  box w-[485px] xs:flex-col xs:justify-center xs:items-center xs:w-full p-6 pr-16 xs:pr-6 h-[333px] xs:h-fit mb-8 flex flex-row justify-center items-start"
                                >
                                    <div className="w-[170px] mr-4">
                                        <img src={navmeet} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white xs:text-center">
                                        <div>
                                            <h3 className="text-[24px] font-bold">
                                                Navneet Mishra
                                            </h3>
                                            <p className="text-[14px] text-[#B9B9B9]">
                                                @Navneet93632479
                                            </p>
                                            <br />
                                        </div>
                                        <div className="text-[14px]">
                                            I am excited to share with you all that @TheMetakraft is
                                            going to launch their game editor soon.
                                            <br />
                                            <br className="xs:hidden" />
                                            The first very exciting thing i liked about them was
                                            their user friendly layout of the interface of the
                                            editor where things are quiet easy and understandable to
                                            newbies.
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className=" home-slide-3-1 box w-[485px] xs:flex-col xs:justify-center xs:items-center xs:w-full h-[197px] xs:h-fit p-6 pr-16 xs:pr-6 mb-8 flex flex-row justify-center items-start"
                                >
                                    <div className="w-[100px] mr-4">
                                        <img src={disney} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white xs:text-center">
                                        <div>
                                            <h3 className="text-[24px] font-bold">Disney</h3>
                                            <p className="text-[14px] text-[#B9B9B9]">
                                                @Disney_1519
                                            </p>
                                            <br />
                                        </div>
                                        <div className="text-[14px]">
                                            Excellent! Bringing opportunity to all users with a lot
                                            of helping features that can helps us!
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className=" home-slide-3-1 box w-[485px] xs:flex-col xs:justify-center xs:items-center xs:w-full h-[194px] xs:h-fit  p-6 pr-16 xs:pr-6 flex flex-row justify-center items-start"
                                >
                                    <div className="w-[100px] mr-4">
                                        <img src={rye} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white xs:text-center">
                                        <div>
                                            <h3 className="text-[24px] font-bold">rye</h3>
                                            <p className="text-[14px] text-[#B9B9B9]">
                                                @ryemarvs__
                                            </p>
                                            <br />
                                        </div>
                                        <div className="text-[14px]">
                                            I am all in with this!!! Loving this new taste in the
                                            metaverse #Metakraft
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            {/* -------------------------Second Column------------------------------ */}

                            <div className="flex flex-col justify-start ">
                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className=" home-slide-3-1 box w-[485px] xs:flex-col xs:justify-center xs:items-center xs:w-full  h-[210px] xs:h-fit  mb-8 xs:mt-8 ss:mt-8 sm:mt-8 md:mt-8  p-6 pr-16 xs:pr-6 flex flex-row justify-center items-start"
                                >
                                    <div className="w-[140px] mr-4">
                                        <img src={mani} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white xs:text-center">
                                        <div>
                                            <h3 className="text-[24px] font-bold">mani.wagmi</h3>
                                            <p className="text-[14px] text-[#B9B9B9]">@wokeblunt</p>
                                            <br />
                                        </div>
                                        <div className="text-[14px]">
                                            Though I am building @rariko_info and I am super bullish
                                            about it, I have my bets on our fellow Indian startup
                                            @AIVerse_Dai
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className=" home-slide-3-1 box w-[485px] xs:flex-col xs:justify-center xs:items-center xs:w-full  h-[333px] xs:h-fit mb-8  p-6 pr-16 xs:pr-6 flex flex-row justify-center items-start"
                                >
                                    <div className="w-[190px] mr-4">
                                        <img src={nandit} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white xs:text-center">
                                        <div>
                                            <h3 className="text-[24px] font-bold">Nandit Mehra</h3>
                                            <p className="text-[14px] text-[#B9B9B9]">
                                                @nanditmehra
                                            </p>
                                            <br />
                                        </div>
                                        <div className="text-[14px]">
                                            Great to see successful integration of Metakraft
                                            @TheMetakraft - a marketplace for AR, VR, AI/ML Models
                                            and Assets with Lighthouse for permanent storage. Very
                                            excited for their product
                                            <br />
                                            <br className="xs:hidden" />
                                            POWERED BY LIGHTHOUSE SDK @LighthouseWeb3
                                            <br />
                                            <br className="xs:hidden" />
                                            #web3 #lighthouse #crypto #ipfs #filecoin
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileInView="show"
                                    initial="hidden"
                                    variants={navVariants}
                                    className=" home-slide-3-1 box w-[485px] xs:flex-col xs:justify-center xs:items-center xs:w-full  h-[192px] xs:h-fit p-6 pr-16 xs:pr-6 flex flex-row justify-center items-start"
                                >
                                    <div className="w-[100px] mr-4">
                                        <img src={prasanna} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white xs:text-center">
                                        <div>
                                            <h3 className="text-[24px] font-bold">
                                                Prasanna Kondapaneni
                                            </h3>
                                            <p className="text-[14px] text-[#B9B9B9]">
                                                @PrasannaKondap9
                                            </p>
                                            <br />
                                        </div>
                                        <div className="text-[14px]">
                                            Excellent! Bringing opportunity to all users with a lot
                                            of helping features that can helps us!
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="home-slide-4 xs:text-[20px] ss:text-[32px] py-6 font-sora xl:px-96">
                            <Marquee>
                                <div>1000+ Signups</div>
                                <div>300+ Beta Users</div>
                                <div>100+ Mints</div>
                                <div>10+ Studio Partners</div>
                            </Marquee>
                        </div>
                    </div>

                    <div className="home-browsing relative ">
                        <div className="xs:mx-10 ss:mx-14 sm:mx-16 md:mx-20 xs:pt-6 leading-[137px] md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#6c6a6a] to-[#ffffff] text-[80px]  sm:text-[70px] ss:text-[65px] xs:text-[45px] xs:mb-6  font-epilogue">
                            Go Beyond Browsing
                        </div>
                        <div className="xs:mx-10 ss:mx-14 home-browsing-2 xs:text-[16px] pt-0 pb-6  xs:py-2 font-sora">
                            <div>
                                Create new door of experience for your Friends, Fans &{" "}
                                <br className="xs:hidden ss:hidden" />
                                Clients
                            </div>
                        </div>
                        <motion.button
                            whileInView="show"
                            initial="hidden"
                            variants={navVariants}
                            className="home-browsing-3  xs:text-[14px] ss:text-[16px] mt-12 xs:mt-16 font-sora py-3 px-6 xs:px-4"
                        >
                            <Link to="/feature">Explore Features</Link>
                        </motion.button>
                        <div className="home-browsing-4">
                            <img
                                src={Solana}
                                alt="solana"
                                className="absolute xs:top-80 ss:top-80  top-96     "
                            />
                        </div>
                        <div className="home-browsing-5 flex flex-row justify-between items-center">
                            <div className="basis-[50%] xs:hidden ss:hidden sm:hidden md:hidden"></div>

                            <div className="lg:basis-[50%] xl:basis-[50%] basis-[100%]  flex flex-col justify-end items-end xs:text-center xs:items-center xs:justify-center ss:text-center ss:items-center ss:justify-center  sm:text-center sm:items-center sm:justify-center md:text-center md:items-center md:justify-center  ">
                                <div className="feature-browsing-5-1 font-spaceGrotesk ">
                                    Stay Updated with Latest
                                </div>
                                <div className="feature-browsing-5-2 font-roboto">
                                    Get Your Newsletter
                                </div>
                                {/* <div className="home-browsing-6 flex justify-between  items-center  ml-[62vw] xs:ml-0 ss:ml-0 sm:ml-0 md:ml-0   font-spaceGrotesk">
                                <div
                                    className="home-browsing-6-1 "
                                    style={{ cursor: "pointer" }}
                                    onClick={subscribe}
                                >
                                    &lt;
                                </div>
                                <input
                                    type="text"
                                    value={news}
                                    onChange={event => {
                                        setNews(event.target.value);
                                    }}
                                    className="home-browsing-6-2 bg-black w-full px-6 "
                                    placeholder="Enter Your Email"
                                />
                            </div> */}
                                <div className="feature-browsing-6 flex justify-center  items-center w-[300px] h-[60px] ss:w-[400px] ss:h-[70px] sm:w-[434px] sm:h-[80px] md:w-[534px] md:h-[90px]   lg:w-fit lg:h-[90px] xl:w-[730px] xl:h-[90px]">
                                    <div
                                        className="text-[40px] text-white xs:text-[20px] ss:text-[24px] sm:text-[28px] md:text-[34px]"
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
                </div>
            </div>
        </>
    );
}

export default Home;

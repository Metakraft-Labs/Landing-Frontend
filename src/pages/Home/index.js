import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import AppStore from "../../contexts/AppStore";
// import Header from "../../components/Header.jsx";
// import InfiniteSpace from "../../Animation/Infinitespace";
import Animate from "../../Assets/Animated.mp4";
import Ipad_Mini from "../../Assets/iPad Mini.png";
import Ipad_Mini1 from "../../Assets/iPad_Mini.png";
import metakraft from "../../Assets/metakraft.png";
import Solana from "../../Assets/solana.png";
import "../../Style/home.css";
import { slider1 } from "../../data";
import Title from "../../shared/Title";

function Home() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // };

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
    const settings2 = {
        dots: false,
        vertical: true,
        verticalSwiping: true,
        infinite: true, // Enable infinite loop
        speed: 2000,
        slidesToShow: 2, // Number of slides to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // focusOnSelect: true,
        arrows: false,
    };

    return (
        <>
            <Title title={"Home"} />
            <div className={`w-full overflow-hidden`} style={{ fontFamily: "Roboto" }}>
                {/* <InfiniteSpace /> */}

                <div
                    className={`bg-black  bg-scroll  px-32 h-[732px] flex justify-start items-center`}
                >
                    <div>
                        <div>
                            <h1
                                className={`text-[#EAEAEA] leading-[107.5%] text-[128px] font-bold`}
                            >
                                Making Internet <br />
                                <span
                                    className={`text-transparent bg-clip-text bg-gradient-to-r from-[#016DB0] to-[#01FFCA]`}
                                >
                                    Immersive!
                                </span>
                            </h1>
                        </div>
                        <div className={`my-6  font-bold `}>
                            <button className="home-partner-3 text-[22px] h-[79px] w-[277px] rounded-[8px]">
                                Early Access
                            </button>
                            <button className="home-partner-3 text-[22px] h-[79px] w-[277px] rounded-[8px] ml-12">
                                Refer & Win
                            </button>
                        </div>
                    </div>
                </div>
                <div className="punc1">?</div>
                <div className="punc2">#</div>
                <div className="punc3">$</div>

                <div className="home-live flex justify-center items-center h-[57px]">
                    <div className="home-live-gradient">
                        <img
                            className="home-live-1 h-[42px] w-[44px]"
                            src={metakraft}
                            alt="home-live"
                        />
                    </div>
                    <div className="text-[20px] font-bold leading-[105.5%]">
                        We are live! Learn More -&gt;
                    </div>
                </div>
                <div className="home-partner  ">
                    <div className="home-partner-1">Ecosystem &</div>
                    <div className="home-partner-2">Strategic Partners</div>

                    <div className="flex mt-16">
                        <div
                            id="slideshow"
                            className="mt-16"
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
                                            className="w-[56px] h-[56px]"
                                            style={{
                                                marginLeft: "72px",
                                            }}
                                            src={slide.img}
                                            alt="logo-1"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                    <div className="home-demo">
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
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <button className="home-partner-3 home-head-3-12" onClick={handleVideo}>
                            Watch Demo
                        </button>
                    </div>
                    <div className="home-partner-4">
                        <div style={{ paddingTop: "4vw" }}>
                            <div className="home-partner-4-2">Seamless Experience!</div>
                            <div className="home-partner-4-2">Explore, Create, Connect</div>
                            <div className="home-partner-4-3" style={{ marginTop: "2vw" }}>
                                Unleash your imagination with an AI-driven, browser-based
                            </div>
                            <div className="home-partner-4-3">
                                platform. Build, customize, and connect in a secure
                            </div>
                            <div className="home-partner-4-3">
                                {" "}
                                environment, exploring endless possibilities and redefining
                            </div>
                            <div className="home-partner-4-3">the virtual realm effortlessly.</div>
                        </div>
                        <div>
                            <img className="home-partner-4-1" src={Ipad_Mini} alt="partner-4" />
                        </div>
                    </div>
                    <div className="home-partner-5">
                        <div>
                            <img className="home-partner-4-1" src={Ipad_Mini1} alt="partner-5" />
                        </div>
                        <div style={{ paddingTop: "8vw" }}>
                            <div className="home-partner-4-2">Designed to Scale as</div>
                            <div className="home-partner-4-2">your need Grows</div>
                            <div className="home-partner-4-3" style={{ marginTop: "2vw" }}>
                                Metakraft is designed to scale with your business, creating
                            </div>
                            <div className="home-partner-4-3">
                                engaging virtual environments that can attract and retain as
                            </div>
                            <div className="home-partner-4-3">
                                users grows while generating revenue.
                            </div>
                        </div>
                    </div>

                    <div className="home-floor flex flex-row items-center mx-20  ">
                        <div className="home-floor-1">
                            <div style={{ marginRight: "1.5vw" }}>
                                <div className="home-floor-1-1">
                                    <div className="home-floor-1-2 text-[43px]">Browser</div>
                                    <div className="home-floor-1-3">Supported</div>
                                </div>
                                <div className="home-floor-1-1">
                                    <div className="home-floor-1-2  text-[43px]">AI Enabled</div>
                                    <div className="home-floor-1-3">Asset Design</div>
                                </div>
                            </div>
                            <div>
                                <div className="home-floor-1-1" style={{ marginTop: "0" }}>
                                    <div className="home-floor-1-2">500K+</div>
                                    <div className="home-floor-1-3">Assets to use</div>
                                </div>
                                <div className="home-floor-1-1">
                                    <div className="home-floor-1-2">Mint</div>
                                    <div className="home-floor-1-3">3D Assets</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className=" flex flex-row justify-between overflow-hidden relative h-[691px] w-[695px] border-white border-[4px] rounded-[2vh]">
                                {/* --------------------------first column--------------------------- */}
                                <div className=" -ml-9  w-full mx-4 ">
                                    <Slider {...settings2}>
                                        <div>
                                            <div className=" flex flex-col p-4 h-[306px] my-4 rounded-[3.62vh] bg-white">
                                                <div className="gradient1 h-[206px] w-full rounded-[2.1vh]"></div>
                                                <div className="flex flex-row my-2">
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=" flex flex-col p-4 h-[306px] my-4 rounded-[3.62vh] bg-white">
                                                <div className="gradient1 h-[206px] w-full rounded-[2.1vh]"></div>
                                                <div className="flex flex-row my-2">
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className=" flex flex-col p-4 h-[306px] my-4 rounded-[3.62vh] bg-white">
                                                <div className="gradient1 h-[206px] w-full rounded-[2.1vh]"></div>
                                                <div className="flex flex-row my-2">
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                {/* --------------------------Second column--------------------------- */}

                                <div className="carousel carousel-vertical w-[200%] mx-4 ">
                                    <Slider {...settings2} className="slider2">
                                        <div className="">
                                            <div className="carousel-item flex flex-col p-4 h-[306px] my-4 rounded-[3.62vh] bg-white">
                                                <div className="gradient1 h-[206px] w-full rounded-[2.1vh]"></div>
                                                <div className="flex flex-row my-2">
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="carousel-item flex flex-col p-4 h-[306px] my-4 rounded-[3.62vh] bg-white">
                                                <div className="gradient1 h-[206px] w-full rounded-[2.1vh]"></div>
                                                <div className="flex flex-row my-2">
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="carousel-item flex flex-col p-4 h-[306px] my-4 rounded-[3.62vh] bg-white">
                                                <div className="gradient1 h-[206px] w-full rounded-[2.1vh]"></div>
                                                <div className="flex flex-row my-2">
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                                    <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                                {/* --------------------------Third column--------------------------- */}

                                <div className="carousel carousel-vertical -mr-9 w-[130%] mx-4 ">
                                    <Slider {...settings2}>
                                        <div className="carousel-item flex flex-col p-4 h-[306px] my-4 rounded-[3.62vh] bg-white">
                                            <div className="gradient1 h-[206px] w-full rounded-[2.1vh]"></div>
                                            <div className="flex flex-row my-2">
                                                <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                                <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                                <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                            </div>
                                        </div>
                                        <div className="carousel-item flex flex-col p-4 h-[306px] my-4 rounded-[3.62vh] bg-white">
                                            <div className="gradient1 h-[206px] w-full rounded-[2.1vh]"></div>
                                            <div className="flex flex-row my-2">
                                                <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                                <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                                <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                            </div>
                                        </div>
                                        <div className="carousel-item flex flex-col p-4 h-[306px] my-4 rounded-[3.62vh] bg-white">
                                            <div className="gradient1 h-[206px] w-full rounded-[2.1vh]"></div>
                                            <div className="flex flex-row my-2">
                                                <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#A841F9] "></div>
                                                <div className="w-[34px] h-[34px] rounded-full mt-4 mx-4 bg-[#FF576E] "></div>
                                                <div className="w-[34px] h-[34px] rounded-full mt-4 bg-[#150135] "></div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-28 feature-bg">
                        {/* <div className=" bg-gradient-to-br from-red-500 to-red-800 blur-3xl rounded-full  h-64 w-96 "></div> */}
                        <div className="flex justify-center items-center flex-col">
                            <div className="home-slide-1">What Others Says</div>
                            <div className="home-slide-2 mb-8">
                                Made by Builder&apos;s for the Builder&apos;s
                            </div>
                        </div>

                        <div className="home-slide relative grid grid-cols-3 justify-between place-items-center  mx-20 ">
                            {/* -------------------------First Column------------------------------ */}

                            <div className="flex flex-col justify-start">
                                <div className=""></div>
                                <div className=" home-slide-3-1 w-[380px] h-[295px] mb-8 flex flex-col justify-center items-start">
                                    <div
                                        style={{
                                            lineHeight: "120%",
                                            fontSize: "1.2vw",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Though I am building @rariko_info and I’m super bullish
                                        about it, I have my bets on our fellow Indian startup
                                        @AIVerse_Dai
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.1vw",
                                            fontWeight: "600",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Mani Kumar
                                    </div>
                                </div>

                                <div className=" home-slide-3-1 w-[380px] h-[355px] flex flex-col justify-center items-start">
                                    <div
                                        style={{
                                            lineHeight: "120%",
                                            fontSize: "1.2vw",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        I’m holding out hope they’ll soon introduce extra cool and
                                        amazing capabilities.
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.1vw",
                                            fontWeight: "600",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Jayson Caves
                                    </div>
                                </div>
                            </div>
                            {/* -------------------------Second Column------------------------------ */}

                            <div className="flex flex-col justify-end">
                                <div className="py-32  "></div>
                                <div className=" home-slide-3-1 w-[380px]  h-[365px]  mb-8 flex flex-col justify-center items-start">
                                    <div
                                        style={{
                                            lineHeight: "120%",
                                            fontSize: "1.2vw",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Very interesting project with energetic founders. Looking
                                        forward to Great things from Aiverse! Good luck
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.1vw",
                                            fontWeight: "600",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Prasanna Kondapaneni
                                    </div>
                                </div>

                                <div className=" home-slide-3-1 w-[380px]  h-[365px] flex flex-col justify-center items-start">
                                    <div
                                        style={{
                                            lineHeight: "120%",
                                            fontSize: "1.2vw",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Great to see Aiverse’s integrations with lighthouse, Very
                                        Excited for their product!
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.1vw",
                                            fontWeight: "600",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Nandit Mehra
                                    </div>
                                </div>
                            </div>
                            {/* -------------------------Third Column------------------------------ */}
                            <div className="flex flex-col justify-start">
                                <div className=" home-slide-3-1 w-[380px]  h-[370px]  mb-8 flex flex-col justify-center items-start">
                                    <div
                                        style={{
                                            lineHeight: "120%",
                                            fontSize: "1.2vw",
                                        }}
                                    >
                                        Excellent bringing opportunity to all users there’s a lot of
                                        helping features that can helps us!
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.1vw",
                                            fontWeight: "600",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Disney
                                    </div>
                                </div>
                                <div className=" home-slide-3-1  w-[380px]  h-[195px] mb-8 flex flex-col justify-center items-start">
                                    <div
                                        style={{
                                            lineHeight: "120%",
                                            fontSize: "1.2vw",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Excited to see Aiverse making waves as an efficient tool for
                                        developers and creators.
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.1vw",
                                            fontWeight: "600",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Sarah Jones
                                    </div>
                                </div>
                                <div className=" home-slide-3-1  w-[380px]  h-[195px] flex flex-col justify-center items-start">
                                    <div
                                        style={{
                                            lineHeight: "120%",
                                            fontSize: "1.2vw",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Excited to see Aiverse making waves as an efficient tool for
                                        developers and creators.
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "1.1vw",
                                            fontWeight: "600",
                                            paddingTop: "0.7vw",
                                        }}
                                    >
                                        Sarah Jones
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="home-slide-4">
                            <Marquee>
                                <div>1000+ Signups</div>
                                <div>300+ Beta Users</div>
                                <div>100+ Mints</div>
                                <div>10+ Studio Partners</div>
                            </Marquee>
                        </div>
                    </div>

                    <div className="home-browsing relative">
                        <div className="home-browsing-1">Go Beyond Browsing</div>
                        <div className="home-browsing-2 py-6">
                            <div>Create new door of experience for your Friends, Fans & </div>
                            <div>Clients</div>
                        </div>
                        <button className="home-browsing-3">
                            <Link to="/feature">Explore Features</Link>
                        </button>
                        <div className="home-browsing-4">
                            <img src={Solana} alt="solana" />
                        </div>
                        <div className="home-browsing-5">
                            <div className="home-browsing-5-1">Stay Updated with Latest</div>
                            <div className="home-browsing-5-2">Get Your Newsletter</div>
                            <div className="home-browsing-6">
                                <div
                                    className="home-browsing-6-1"
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
                                    className="home-browsing-6-2 bg-black w-fit"
                                    placeholder="Enter Your Email"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;

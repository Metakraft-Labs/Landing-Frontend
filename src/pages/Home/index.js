import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
// import AppStore from "../../contexts/AppStore";
// import Header from "../../components/Header.jsx";
// import InfiniteSpace from "../../Animation/Infinitespace";
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

                    <div className="flex mt-8">
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
                    <div className="home-partner-4 mt-10 px-20">
                        <div style={{ paddingTop: "4vw" }} className="basis-[60%]">
                            <div className="home-partner-4-2">Seamless Experience!</div>
                            <div className="home-partner-4-3" style={{ marginTop: "2vw" }}>
                                Unleash your imagination with an AI-driven, browser-based
                            </div>
                            <div className="home-partner-4-3">
                                platform. Build, customize, and connect in a secure
                            </div>
                            <div className="home-partner-4-3">
                                environment, exploring endless possibilities and redefining
                            </div>
                            <div className="home-partner-4-3">the virtual realm effortlessly.</div>
                        </div>
                        <div className="">
                            <img
                                className="w-[864px] h-[830px] top-0 relative z-[1] -rotate-3    "
                                src={Ipad_Mini1}
                                alt="partner-4"
                            />
                        </div>
                    </div>
                    <div className="home-partner-5 flex ">
                        <div className="basis-[30%]">
                            <img className="home-partner-4-1 " src={Ipad_Mini} alt="partner-5" />
                        </div>
                        <div style={{ paddingTop: "8vw" }} className="basis-[50%]">
                            <div className="home-partner-4-2 text-right">
                                Designed to Scale with your need
                            </div>
                            <div
                                className="home-partner-4-3 text-right"
                                style={{ marginTop: "2vw" }}
                            >
                                Metakraft is designed to scale with your business, creating engaging
                                virtual environments that can attract and retain as users grows
                                while generating revenue.
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

                        <div className=" flex flex-row justify-between overflow-hidden relative h-[691px] w-[695px] border-white border-[4px] rounded-[2vh]">
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
                                    left: "-50px",
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
                    </div>
                    <div className="pt-28 feature-bg">
                        {/* <div className=" bg-gradient-to-br from-red-500 to-red-800 blur-3xl rounded-full  h-64 w-96 "></div> */}
                        <div className="flex justify-center items-center flex-col">
                            <div className="home-slide-1">What Others Says</div>
                            <div className="home-slide-2 mb-8">
                                Made by Builder&apos;s for the Builder&apos;s
                            </div>
                        </div>

                        <div className="home-slide grid grid-cols-2  place-items-center  mx-20 ">
                            {/* -------------------------First Column------------------------------ */}

                            <div className=" flex flex-col justify-end">
                                <div className="py-10"></div>
                                <div className=" home-slide-3-1 box w-[485px] p-6 pr-16 h-[333px] mb-8 flex flex-row justify-center items-start">
                                    <div className="w-[170px] mr-4">
                                        <img src={navmeet} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white">
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
                                            <br />
                                            The first very exciting thing i liked about them was
                                            their user friendly layout of the interface of the
                                            editor where things are quiet easy and understandable to
                                            newbies.
                                        </div>
                                    </div>
                                </div>

                                <div className=" home-slide-3-1 box w-[485px] h-[197px]  p-6 pr-16 mb-8 flex flex-row justify-center items-start">
                                    <div className="w-[100px] mr-4">
                                        <img src={disney} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white">
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
                                </div>
                                <div className=" home-slide-3-1 box w-[485px] h-[194px]  p-6 pr-16 flex flex-row justify-center items-start">
                                    <div className="w-[100px] mr-4">
                                        <img src={rye} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white">
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
                                </div>
                            </div>
                            {/* -------------------------Second Column------------------------------ */}

                            <div className="flex flex-col justify-start">
                                <div className=" home-slide-3-1 box w-[485px]  h-[210px]  mb-8  p-6 pr-16 flex flex-row justify-center items-start">
                                    <div className="w-[140px] mr-4">
                                        <img src={mani} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white">
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
                                </div>

                                <div className=" home-slide-3-1 box w-[485px]  h-[333px] mb-8  p-6 pr-16 flex flex-row justify-center items-start">
                                    <div className="w-[190px] mr-4">
                                        <img src={nandit} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white">
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
                                            <br />
                                            POWERED BY LIGHTHOUSE SDK @LighthouseWeb3
                                            <br />
                                            <br />
                                            #web3 #lighthouse #crypto #ipfs #filecoin
                                        </div>
                                    </div>
                                </div>

                                <div className=" home-slide-3-1 box w-[485px]  h-[192px]  p-6 pr-16 flex flex-row justify-center items-start">
                                    <div className="w-[100px] mr-4">
                                        <img src={prasanna} className="w-full" alt="" />
                                    </div>
                                    <div className="text-white">
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
                                </div>
                            </div>
                        </div>

                        <div className="home-slide-4">
                            <Marquee>
                                <div className="flex justify-between  items-center">
                                    <div
                                        style={{
                                            marginRight: "100px",
                                            textAlign: "center",
                                        }}
                                    >
                                        1000+ Signups
                                    </div>
                                    <div
                                        style={{
                                            marginRight: "100px",
                                            textAlign: "center",
                                        }}
                                    >
                                        300+ Beta Users
                                    </div>
                                    <div
                                        style={{
                                            marginRight: "100px",
                                            textAlign: "center",
                                        }}
                                    >
                                        100+ Mints
                                    </div>
                                    <div
                                        style={{
                                            marginRight: "100px",
                                            textAlign: "center",
                                        }}
                                    >
                                        10+ Studio Partners
                                    </div>
                                </div>
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

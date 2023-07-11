import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import Fly from "../Assets/Fly.png";
import METAKRAFT from "../Assets/METAKRAFT.jpeg";
import Car from "../Assets/car_color.png";
import Glass from "../Assets/glass.png";
import Headphone from "../Assets/headphone.png";
import Logo1 from "../Assets/logo_1.png";
import Logo2 from "../Assets/logo_2.png";
import Logo3 from "../Assets/logo_3.png";
import Logo4 from "../Assets/logo_4.png";
import Logo5 from "../Assets/logo_5.png";
import Logo6 from "../Assets/logo_6.png";
import Logo7 from "../Assets/logo_7.png";
import Logo8 from "../Assets/logo_8.png";
import Pikachu from "../Assets/pikachu_d.png";
import Pikachu_M from "../Assets/pikachu_m.png";
import Pikachu_S from "../Assets/pikachu_s.png";
import Play_Left from "../Assets/play_left.png";
import Play_Right from "../Assets/play_right.png";
import Shoe from "../Assets/shoe.png";
import Starbucks from "../Assets/starbucks.png";
import White_Shoe from "../Assets/white_shoe.png";
import "../Style/explore.css";
import FooterExplore from "./footerExplore.jsx";

function Explore() {
    const settings = {
        dots: false,
        infinite: true, // Enable infinite loop
        speed: 1000,
        slidesToShow: 9, // Number of slides to show at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    const handlePrev = () => {
        if (activeIndex > 0) setActiveIndex(prevIndex => (prevIndex === 0 ? 10 : prevIndex - 1));
    };

    const handleNext = () => {
        if (activeIndex < 9) setActiveIndex(prevIndex => (prevIndex === 10 ? 0 : prevIndex + 1));
    };

    const handleSlideChange = index => {
        setActiveIndex(index);
    };
    useEffect(() => {}, []);
    return (
        <div className="explore">
            <div
                style={{
                    margin: "0",
                    padding: "0",
                    background: "rgb(227 249 240)",
                    paddingTop: "2vw",
                }}
            >
                <div className="explore-search-bar">
                    <div className="explore-search-bar-box">
                        <svg
                            width="1.5vw"
                            height="1.5vw"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.5">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.25 10.5C1.25 5.39139 5.39139 1.25 10.5 1.25C15.6086 1.25 19.75 5.39139 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39139 19.75 1.25 15.6086 1.25 10.5ZM10.5 2.75C6.21981 2.75 2.75 6.21981 2.75 10.5C2.75 14.7802 6.21981 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21981 14.7802 2.75 10.5 2.75Z"
                                    fill="url(#paint0_linear_113_254)"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.14124 6.6412C8.00004 5.78247 9.18856 5.25 10.5 5.25C11.8114 5.25 13 5.78246 13.8587 6.64122C14.1516 6.93411 14.1516 7.40899 13.8587 7.70188C13.5658 7.99477 13.091 7.99477 12.7981 7.70188C12.2091 7.11294 11.3977 6.75 10.5 6.75C9.60235 6.75 8.79087 7.11293 8.20187 7.7019C7.90896 7.99478 7.43409 7.99476 7.14121 7.70186C6.84832 7.40896 6.84834 6.93408 7.14124 6.6412Z"
                                    fill="url(#paint1_linear_113_254)"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.0806 16.0805C16.3735 15.7876 16.8483 15.7876 17.1412 16.0805L21.3839 20.3232C21.6768 20.6161 21.6768 21.0909 21.3839 21.3838C21.091 21.6767 20.6161 21.6767 20.3232 21.3838L16.0806 17.1412C15.7877 16.8483 15.7877 16.3734 16.0806 16.0805Z"
                                    fill="url(#paint2_linear_113_254)"
                                />
                            </g>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_113_254"
                                    x1="1.25"
                                    y1="1.25"
                                    x2="19.9755"
                                    y2="1.48118"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FF8A00" />
                                    <stop offset="1" stopColor="#FF0000" />
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_113_254"
                                    x1="6.92155"
                                    y1="5.25"
                                    x2="14.1588"
                                    y2="5.48936"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FF8A00" />
                                    <stop offset="1" stopColor="#FF0000" />
                                </linearGradient>
                                <linearGradient
                                    id="paint2_linear_113_254"
                                    x1="15.8609"
                                    y1="15.8608"
                                    x2="21.6736"
                                    y2="15.9326"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FF8A00" />
                                    <stop offset="1" stopColor="#FF0000" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <input
                            type="text"
                            style={{ fontFamily: "Roboto" }}
                            className="explore-search-input"
                            placeholder="search items, games, AI"
                        />
                    </div>
                    <div style={{ padding: "0.5vw 0", fontFamily: "Roboto" }}>Games</div>
                    <div style={{ padding: "0.5vw 0", fontFamily: "Roboto" }}>AI Bots</div>
                    <div style={{ padding: "0.5vw 0", fontFamily: "Roboto" }}>Metaverse</div>
                    <div className="explore-search-bar-contact" style={{ fontFamily: "Roboto" }}>
                        Contact Us
                    </div>
                    <div className="explore-search-bar-wallet">
                        <div>
                            <svg
                                width="1.5vw"
                                height="1.5vw"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2.91665 6.04163C2.80159 6.04163 2.70831 6.1349 2.70831 6.24996V15.4166C2.70831 15.5317 2.80159 15.625 2.91665 15.625H17.0833C17.1984 15.625 17.2916 15.5317 17.2916 15.4166V6.24996C17.2916 6.1349 17.1984 6.04163 17.0833 6.04163H2.91665ZM1.45831 6.24996C1.45831 5.44454 2.11123 4.79163 2.91665 4.79163H17.0833C17.8887 4.79163 18.5416 5.44454 18.5416 6.24996V15.4166C18.5416 16.222 17.8887 16.875 17.0833 16.875H2.91665C2.11123 16.875 1.45831 16.222 1.45831 15.4166V6.24996Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.79169 8.33337C9.79169 7.9882 10.0715 7.70837 10.4167 7.70837H17.9167C18.2619 7.70837 18.5417 7.9882 18.5417 8.33337V12.9167C18.5417 13.2619 18.2619 13.5417 17.9167 13.5417H10.4167C10.0715 13.5417 9.79169 13.2619 9.79169 12.9167V8.33337ZM11.0417 8.95837V12.2917H17.2917V8.95837H11.0417Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M17.9167 6.875C18.2619 6.875 18.5417 7.15482 18.5417 7.5V13.75C18.5417 14.0952 18.2619 14.375 17.9167 14.375C17.5715 14.375 17.2917 14.0952 17.2917 13.75V7.5C17.2917 7.15482 17.5715 6.875 17.9167 6.875Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3.20921 3.21207C3.61112 2.67886 4.26642 2.29163 5.20831 2.29163H11.25C11.6742 2.29163 12.3455 2.42704 12.9233 2.90292C13.5278 3.40073 13.9583 4.21228 13.9583 5.41663C13.9583 5.7618 13.6785 6.04163 13.3333 6.04163C12.9881 6.04163 12.7083 5.7618 12.7083 5.41663C12.7083 4.53764 12.4096 4.09919 12.1287 3.86783C11.8211 3.61455 11.4508 3.54163 11.25 3.54163H5.20831C4.65021 3.54163 4.368 3.75141 4.20741 3.96446C4.02413 4.20762 3.95831 4.51515 3.95831 4.70767V5.41663C3.95831 5.7618 3.67849 6.04163 3.33331 6.04163C2.98814 6.04163 2.70831 5.7618 2.70831 5.41663V4.70767C2.70831 4.30318 2.82999 3.71518 3.20921 3.21207Z"
                                    fill="white"
                                />
                                <path
                                    d="M13.9583 11.25C14.3035 11.25 14.5833 10.9702 14.5833 10.625C14.5833 10.2798 14.3035 10 13.9583 10C13.6131 10 13.3333 10.2798 13.3333 10.625C13.3333 10.9702 13.6131 11.25 13.9583 11.25Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div style={{ color: "white", paddingLeft: "1vw", fontFamily: "Roboto" }}>
                            0x.....00
                        </div>
                    </div>
                </div>
                <div className="explore-head">
                    <div className="explore-head-heading">
                        <div style={{ fontFamily: "Roboto" }}>Fly Into Worlds</div>
                        <div style={{ fontFamily: "Roboto" }}>With A Search</div>
                        <div style={{ display: "flex" }}>
                            <div>
                                <img
                                    id="prevBtn"
                                    style={{ width: "3.5vw", height: "3.5vw" }}
                                    onClick={handlePrev}
                                    src={Play_Right}
                                    alt=""
                                />
                            </div>
                            <div>
                                <img
                                    id="nextBtn"
                                    style={{ width: "3.5vw", height: "3.5vw" }}
                                    onClick={handleNext}
                                    src={Play_Left}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="explore-head-image">
                        <img src={Fly} alt="image" style={{ width: "35vw", height: "30vw" }} />
                    </div>
                </div>

                <Carousel
                    ref={carouselRef}
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    selectedItem={activeIndex}
                    onChange={handleSlideChange}
                    centerMode
                    centerSlidePercentage={25}
                    className="carouselSlide"
                >
                    <div
                        key={0}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={1}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={2}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={3}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={4}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={5}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={6}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={7}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={8}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={9}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                    <div
                        key={10}
                        style={{ width: "20vw", height: "15vw" }}
                        className="slide-exp"
                    ></div>
                </Carousel>
                <div
                    style={{
                        padding: "1.5vw",
                        paddingTop: "11vw",
                        width: "100%",
                        background: "rgb(224 249 240)",
                    }}
                >
                    <Slider {...settings}>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo1}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo2}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo1}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo2}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo3}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo4}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo5}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo6}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo7}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo8}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo7}
                                alt="image"
                            />
                        </div>
                        <div className="explore-logo-slide">
                            <img
                                style={{
                                    width: "4.5vw",
                                    height: "4.5vw",
                                    position: "relative",
                                    zIndex: "1",
                                }}
                                src={Logo8}
                                alt="image"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="explore-top-metaverses">
                <div className="explore-top-metaverses-1">
                    <div
                        className="explore-top-metaverses-1-heading"
                        style={{ fontFamily: "Roboto" }}
                    >
                        {" "}
                        Top Metaverses
                    </div>
                    <div></div>
                    <div className="explore-top-metaverses-1-navbar">
                        <svg
                            width="1.5vw"
                            height="1.5vw"
                            viewBox="0 0 19 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.26984 13.3354C0.669325 12.9403 0.669323 12.0597 1.26983 11.6646L17.4504 1.01949C18.1153 0.582026 19 1.05897 19 1.8549L19 23.1451C19 23.941 18.1153 24.418 17.4504 23.9805L1.26984 13.3354Z"
                                fill="url(#paint0_linear_116_2238)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_116_2238"
                                    x1="16.6778"
                                    y1="12.5"
                                    x2="-17.2847"
                                    y2="12.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#D501F8" />
                                    <stop offset="1" stopColor="#624DE3" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg
                            width="1.5vw"
                            height="1.5vw"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.4999 12.5V7.5L16.6666 10V15L12.4999 12.5Z"
                                fill="#D501F8"
                            />
                            <path d="M12.5 12.5L8.33331 15V10L12.5 7.5V12.5Z" fill="#C30DF5" />
                            <path
                                d="M16.6666 14.9999L12.5 17.4999L8.33331 14.9999L12.5 12.4999L16.6666 14.9999Z"
                                fill="#A521EF"
                            />
                            <path d="M20.8334 12.5V7.5L25 10V15L20.8334 12.5Z" fill="#A521EF" />
                            <path
                                d="M25 14.9999L20.8334 17.4999L16.6667 14.9999L20.8334 12.4999L25 14.9999Z"
                                fill="#D501F8"
                            />
                            <path
                                d="M8.33329 20.0001L4.16663 22.5001V17.5001L8.33329 15.0001V20.0001Z"
                                fill="#D501F8"
                            />
                            <path
                                d="M12.5 22.5001L8.33329 25.0001L4.16663 22.5001L8.33329 20.0001L12.5 22.5001Z"
                                fill="#A521EF"
                            />
                            <path
                                d="M8.33333 10L4.16667 12.5L0 10L4.16667 7.5L8.33333 10Z"
                                fill="#D501F8"
                            />
                            <path
                                d="M4.16667 17.4999V12.4999L0 9.99994V14.9999L4.16667 17.4999Z"
                                fill="#A521EF"
                            />
                            <path
                                d="M16.6666 25.0001V20.0001L20.8333 17.5001V22.5001L16.6666 25.0001Z"
                                fill="#A521EF"
                            />
                            <path
                                d="M16.6666 25.0001V20.0001L12.4999 17.5001V22.5001L16.6666 25.0001Z"
                                fill="#D501F8"
                            />
                            <path
                                d="M20.8333 2.5L16.6666 5L12.4999 2.5L16.6666 0L20.8333 2.5Z"
                                fill="#A521EF"
                            />
                            <path d="M16.6666 10V5L20.8333 2.5V7.5L16.6666 10Z" fill="#D501F8" />
                            <path d="M8.33331 5V0L12.5 2.5V7.5L8.33331 5Z" fill="#D501F8" />
                            <path d="M8.33329 5L4.16663 7.5V2.5L8.33329 0V5Z" fill="#A521EF" />
                        </svg>
                        <svg
                            style={{ transform: "rotate(180deg)" }}
                            width="1.5vw"
                            height="1.5vw"
                            viewBox="0 0 19 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.26984 13.3354C0.669325 12.9403 0.669323 12.0597 1.26983 11.6646L17.4504 1.01949C18.1153 0.582026 19 1.05897 19 1.8549L19 23.1451C19 23.941 18.1153 24.418 17.4504 23.9805L1.26984 13.3354Z"
                                fill="url(#paint0_linear_116_2238)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_116_2238"
                                    x1="16.6778"
                                    y1="12.5"
                                    x2="-17.2847"
                                    y2="12.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#D501F8" />
                                    <stop offset="1" stopColor="#624DE3" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="explore-metaverses-2">
                    <div>
                        <div>
                            <img
                                style={{ width: "25vw", height: "25vw" }}
                                src={Headphone}
                                alt="image"
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                paddingTop: "2.3vw",
                            }}
                        >
                            <div>
                                <img
                                    style={{ width: "15vw", height: "15vw" }}
                                    src={Pikachu_S}
                                    alt="image"
                                />
                            </div>
                            <div>
                                <div>
                                    <img
                                        style={{ width: "7vw", height: "7vw" }}
                                        src={Pikachu_M}
                                        alt="image"
                                    />
                                </div>
                                <div style={{ paddingTop: "0.7vw" }}>
                                    <img
                                        style={{ width: "7vw", height: "7vw" }}
                                        src={Pikachu_M}
                                        alt="image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img style={{ width: "42.5vw", height: "42.5vw" }} src={Car} alt="image" />
                    </div>
                </div>
            </div>
            <div
                style={{
                    margin: "0",
                    padding: "0",
                    background: "rgb(92,110,221)",
                    background:
                        "linear-gradient(180deg, rgba(92,110,221,0.2) 3%, rgba(115,224,181,0.2) 36%, rgba(104,170,200,0.2) 69%, rgba(91,104,223,0.2) 91%)",
                }}
            >
                <div className="explore-name">
                    <div className="explore-name-1" style={{ fontFamily: "Roboto" }}>
                        <div style={{ padding: "0.2vw 0.8vw" }}>M</div>
                        <div>E</div>
                        <div>T</div>
                        <div>A</div>
                        <div>K</div>
                        <div>R</div>
                        <div>A</div>
                        <div>F</div>
                        <div>T</div>
                    </div>
                </div>
                <div className="explore-publish">
                    <div className="explore-publish-heading" style={{ fontFamily: "Roboto" }}>
                        Recently Published
                    </div>
                    <div
                        className="explore-publish-subhead"
                        style={{ color: "white", fontFamily: "Roboto" }}
                    >
                        Publish Your Creations to World&apos;s Eye
                    </div>
                    <div className="explore-publish-body">
                        <div className="explore-publish-body-1">
                            <div>
                                <img src={Pikachu} alt="image" />
                            </div>
                            <div>
                                <img src={Glass} alt="image" />
                            </div>
                            <div>
                                <img src={Shoe} alt="image" />
                            </div>
                        </div>
                        <div className="explore-publish-body-2">
                            <div>
                                <div className="explore-publish-body-2-1">
                                    <img src={Starbucks} alt="image" />
                                </div>
                                <div className="explore-publish-body-2-1-2">MINT MEMBERSHIP</div>
                                <div className="explore-publish-body-2-1-3">
                                    <div className="explore-publish-body-2-1-3-1">
                                        <img src={METAKRAFT} alt="image" />
                                    </div>
                                    <div className="explore-publish-body-2-1-3-2">+JOIN</div>
                                </div>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    gap: "2vw",
                                }}
                            >
                                <div className="explore-publish-body-2-2">
                                    <div>
                                        <img src={White_Shoe} alt="image" />
                                    </div>
                                    <div>
                                        <img src={White_Shoe} alt="image" />
                                    </div>
                                </div>
                                <div className="explore-publish-body-2-2">
                                    <div>
                                        <img src={White_Shoe} alt="image" />
                                    </div>
                                    <div>
                                        <img src={White_Shoe} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="explore-publish-body-2-3">
                                <img src={Starbucks} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterExplore />
        </div>
    );
}

export default Explore;

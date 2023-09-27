import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";
import React from "react";
import Cube from "../../Assets/cube.82f18a4d.gif";
import metakraft1 from "../../Assets/metakraft1.png";
import profile1 from "../../Assets/profile1.png";
import profile2 from "../../Assets/profile2.png";
import profile3 from "../../Assets/profile3.png";
import profile4 from "../../Assets/profile4.jpg";
import profilebg2 from "../../Assets/profilebg2.png";
import "../../Style/about.css";
import Title from "../../shared/Title";
import { navVariants } from "../../utils/motion";
function About() {
    return (
        <>
            <Title title={"About Us"} />
            <div className="aboutBody">
                <div className="flex relative ">
                    <div className="gra1"></div>
                    <div className="gra2 left-[800px] sm:left-[500px]"></div>
                </div>
                <div className="xs:mt-3  flex justify-center items-center relative">
                    <div className="">
                        <img
                            src={metakraft1}
                            alt=""
                            className="w-[500px] xs:w-[350px] absolute z-[1] top-20 translate-x-[-50%] "
                        />
                    </div>
                </div>
                <div className="  xl:px-44 px-32 sm:px-16 ss:px-14 xs:px-10  ss:mt-96  sm:mt-96 md:mt-80 mt-72  ">
                    <div className="flex flex-col justify-center items-center  ">
                        <h1 className=" uppercase text-center  absolute z-[1] mt-16  font-encodeSans  text-[80px] text-white leading-[137px] md:leading-[120px] sm:leading-[100px] ss:leading-[85px] xs:leading-[60px] md:text-[70px]  sm:text-[70px] ss:text-[60px] xs:text-[50px] ">
                            Imagine
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D6DB] to-[#008AED] font-black   ">
                                .<br className="md:hidden lg:hidden xl:hidden" />
                                Create.
                            </span>
                            <br className="md:hidden lg:hidden xl:hidden" />
                            Launch
                        </h1>
                        <div className=" text-center absolute z-[1] mt-64 xs:mt-96  ss:mt-96 sm:mt-96 md:mt-96 xs:pt-60 ss:pt-52 sm:pt-52   text-[24px] font-spaceGrotesk text-white xl:px-44 px-32 sm:px-16 ss:px-14 xs:px-10">
                            Metakraft provides creators with a dynamic platform and powerful tools
                            to help them build immersive web experiences more quickly and
                            efficiently.
                        </div>
                    </div>

                    <div className="aboutbg1 relative w-full my-20 mt-72 xs:mt-[500px] ss:mt-[450px] sm:mt-[400px] xs:h-[750px]    h-[478px] rounded-[45px] flex flex-col justify-center items-center ">
                        {/* <img src={aboutbg1} alt="" className="w-full h-full absolute z-0 " /> */}
                        <div className="text-white absolute z-[1] font-spaceGrotesk text-[24px] backdrop-blur-2xl rounded-[18px] border-[1px] border-[#8e8d8d] text-center flex flex-col justify-center items-center mx-32 px-12 py-8 xs:mx-6 ss:mx-6 sm:mx-6 md:mx-6  ">
                            <div>
                                People spend 80% of their time on internet. We are the tool to
                                create the Internet&apos;s Immersive layer. Sign Up for Access
                            </div>
                            <motion.button
                                whileInView="show"
                                initial="hidden"
                                variants={navVariants}
                                className="text-[#626262] mt-5 text-[24px] xs:text-[16px] bg-white py-4 px-8  font-bold rounded-full "
                            >
                                Join Waitlist
                            </motion.button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center xs:text-center ss:text-center sm:text-center md:text-center">
                        <h4 className="text-[24px] xs:mt-20 mt-10   font-roboto text-[#E6E6EB] font-bold ">
                            Our Solution
                        </h4>
                        <h1 className="aboutConnectHead font-encodeSans lg:leading-[80px] xl:leading-[80px] text-[80px] sm:text-[70px]  ss:text-[65px] xs:text-[45px]  bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6C6A6A] font-bold ">
                            The Metakraft Method
                        </h1>

                        <div className=" aboutbg2 flex  justify-center items-center   relative mt-7 mb-20  rounded-[45px] w-full h-[860px] ss:h-[600px] sm:h-[500px] md:h-[300px] lg:w-[1103px] xl:w-[1103px] lg:h-[478px] xl:h-[478px] xl:mx-44 px-32 sm:mx-16 ss:mx-14 xs:mx-10">
                            {/* <video
                                src={aboutbg1}
                                alt=""
                                className="w-full h-full xs:hidden ss:hidden sm:hidden absolute bg-white  rounded-[45px] z-[1] "
                                autoPlay
                                muted
                                loop
                            /> */}
                            <div className=" text-white absolute z-[1] flex h-full xs:flex-col xs:justify-center ss:flex-col ss:justify-center justify-between items-center xs:px-10 sm:py-24 ss:px-10 md:py-6 py-28 ">
                                <div className=" bg-black/60 backdrop-blur-xl  border-[1px] rounded-[16px] p-8 mx-4 flex flex-col  h-full xs:my-2 ss:my-2 sm:my-3 md:my-3 xs:w-full ss:w-full sm:w-full md:w-full">
                                    <h5 className="text-[32px] font-bold">No-Code</h5>
                                    <div className="font-spaceGrotesk text-[16px] mt-2 ">
                                        Browser-based tools to increase productivity & creating
                                        experiences
                                    </div>
                                </div>
                                <div className="bg-black/60 backdrop-blur-xl border-[1px] rounded-[16px] p-8 mx-4 flex flex-col  h-full  xs:my-2 ss:my-2 sm:my-3 md:my-3 xs:w-full ss:w-full sm:w-full md:w-full">
                                    <h5 className="text-[32px] font-bold">Take Control</h5>
                                    <div className="font-spaceGrotesk text-[16px] mt-2 ">
                                        Allow your creativity to fly without need for a 3rd party to
                                        monetize it.
                                    </div>
                                </div>
                                <div className="bg-black/60 backdrop-blur-xl border-[1px] rounded-[16px] p-8 mx-4 flex flex-col  h-full xs:my-2 ss:my-2 sm:my-3 md:my-3 xs:w-full ss:w-full sm:w-full md:w-full">
                                    <h5 className="text-[32px] font-bold">Spacial Rooms</h5>
                                    <div className="font-spaceGrotesk text-[16px] mt-2 ">
                                        For Product Showcase, Demo, Education or a Virtual Store.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="font-spaceGrotesk text-[24px] text-[#ABABAB] text-center lg:mx-48 xl:mx-48 font-bold ">
                            Do you want to learn more? Or, if we think our synergies are similar,
                            we&apos;d love to get on a call and talk about it.
                        </div>

                        <motion.button
                            whileInView="show"
                            initial="hidden"
                            variants={navVariants}
                            className="contactUsButton home-head-3-12 mt-6 font-inter text-white text-[22px] font-bold px-10 rounded-[9px]  py-4 "
                        >
                            Contact Us
                        </motion.button>
                    </div>
                    <div className="aboutEco xs:text-center ss:text-center sm:text-center md:text-center flex xs:flex-col ss:flex-col sm:flex-col md:flex-col justify-center items-center text-white">
                        <div>
                            <img src={Cube} alt="not found" />
                        </div>
                        <div>
                            <h2 className="text-[64px] sm:text-[60px] ss:text-[55px] xs:text-[45px] font-encodeSans bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6C6A6A] font-bold">
                                Ecosystem
                            </h2>
                            <div className="text-[24px] font-spaceGrotesk font-extralight xs:pt-5  ss:pt-5  sm:pt-5  md:pt-5">
                                No more worrying about handing over ownership of your assets to a
                                third-party platform or paying 10-30% in commissions. You own the
                                assets that you create with the help of decentralisation.
                            </div>
                        </div>
                    </div>

                    <div className=" flex flex-col justify-center items-center mb-20 xs:my-20 ss:my-20 sm:my-24  md:my-24 mt-24 xs:text-center ss:text-center sm:text-center md:text-center text-white">
                        <div className="font-spaceGrotesk text-[24px] font-bold ">With Us</div>
                        <div className="font-encodeSans text-[80px] sm:text-[70px] ss:text-[65px] xs:text-[45px] font-bold  bg-clip-text text-transparent bg-gradient-to-r from-white to-[#6C6A6A] ">
                            Unleash Your Vision
                        </div>
                        <div className=" flex justify-evenly flex-wrap mt-10  items-center">
                            <motion.div
                                whileInView="show"
                                initial="hidden"
                                variants={navVariants}
                                className=" mb-32 mr-2  flex relative flex-col justify-start items-center h-[390px] w-[300px] xs:w-[300px] rounded-[33px] "
                            >
                                <img src={profilebg2} alt="" className="absolute z-0" />
                                <div className="bg-white text-black absolute z-[1] w-full h-[300px] xs:h-fit top-36 rounded-[33px] ">
                                    <div className="relative profile ">
                                        <img
                                            src={profile1}
                                            alt=""
                                            className="absolute w-[100px] -top-12 translate-x-[100%] xs:translate-x-[99%] "
                                        />
                                    </div>
                                    <div className="flex flex-col pt-16  p-6 justify-center text-center items-center">
                                        <h4 className="text-[20px] font-bold font-roboto">
                                            Lokendra Soni
                                        </h4>
                                        <p className="text-[13px] pt-4 font-roboto font-light">
                                            Meet Lokendra, our visionary CTO with 5 years of
                                            experience in web3, gaming, and AI. He drives
                                            innovation, shapes user experiences, and leads our
                                            dynamic team to new heights.
                                        </p>
                                    </div>
                                    <div className="flex justify-between  xs:flex-col px-6 pt-0 items-center">
                                        <button className="bg-[#084FFF] text-white text-[20px] font-bold font-roboto rounded-[12px] w-[168px] py-2">
                                            Connect
                                        </button>
                                        <button className="bg-[#F0F0F0] text-black text-[20px] font-bold font-roboto rounded-[12px] w-[168px] py-2  xs:my-4">
                                            <TwitterIcon className="mr-4" />
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                whileInView="show"
                                initial="hidden"
                                variants={navVariants}
                                className="mb-32 mx-2 flex relative flex-col justify-start items-center h-[390px] w-[300px] xs:w-[300px] rounded-[33px] "
                            >
                                <img src={profilebg2} alt="" className="absolute z-0" />
                                <div className="bg-white text-black absolute z-[1] w-full h-[300px] xs:h-fit top-36 rounded-[33px] ">
                                    <div className="relative profile ">
                                        <img
                                            src={profile2}
                                            alt=""
                                            className="absolute w-[100px] -top-12 translate-x-[100%]  xs:translate-x-[99%]"
                                        />
                                    </div>
                                    <div className="flex flex-col pt-16  p-6 justify-center text-center items-center">
                                        <h4 className="text-[20px] font-bold font-roboto">
                                            Abhishek Roushn
                                        </h4>
                                        <p className="text-[13px] pt-4 font-roboto font-light">
                                            Abhishek, our visionary CEO with 3 years&apos; expertise
                                            in sales, growth, and operations. Proficient in web3.0,
                                            agritech, and energy sectors, he drives innovation and
                                            leads us to success in diverse industries.
                                        </p>
                                    </div>
                                    <div className="flex justify-between  xs:flex-col  px-6 pt-0 items-center">
                                        <button className="bg-[#084FFF] text-white text-[20px] font-bold font-roboto rounded-[12px] w-[168px] py-2">
                                            Connect
                                        </button>
                                        <button className="bg-[#F0F0F0] text-black text-[20px] font-bold font-roboto rounded-[12px] w-[168px] py-2  xs:my-4">
                                            <TwitterIcon className="mr-4" />
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                whileInView="show"
                                initial="hidden"
                                variants={navVariants}
                                className="mb-32 mx-2 flex relative flex-col justify-start items-center h-[390px] w-[300px]  xs:w-[300px] rounded-[33px] "
                            >
                                <img src={profilebg2} alt="" className="absolute z-0" />
                                <div className="bg-white text-black absolute z-[1] w-full h-[300px] xs:h-fit top-36 rounded-[33px] ">
                                    <div className="relative profile ">
                                        <img
                                            src={profile3}
                                            alt=""
                                            className="absolute w-[100px] -top-12 translate-x-[100%]  xs:translate-x-[99%]"
                                        />
                                    </div>
                                    <div className="flex flex-col pt-16  p-6 justify-center text-center items-center">
                                        <h4 className="text-[20px] font-bold font-roboto">
                                            Gaurav Y Mishra
                                        </h4>
                                        <p className="text-[13px] pt-4 font-roboto font-light">
                                            Meet Gaurav, our CPO with 4 years&apos; AI expertise. He
                                            has built bots on diverse language models and consulted
                                            for web3.0 and gaming firms. His innovation drives us
                                            forward in cutting-edge technology.
                                        </p>
                                    </div>
                                    <div className="flex justify-between  xs:flex-col  px-6 pt-0 items-center">
                                        <button className="bg-[#084FFF] text-white text-[20px] font-bold font-roboto rounded-[12px] w-[168px] py-2">
                                            Connect
                                        </button>
                                        <button className="bg-[#F0F0F0] text-black text-[20px] font-bold font-roboto rounded-[12px] w-[168px] py-2  xs:my-4">
                                            <TwitterIcon className="mr-4" />
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                whileInView="show"
                                initial="hidden"
                                variants={navVariants}
                                className="mb-32 mx-2 flex relative flex-col justify-start items-center h-[390px] w-[300px] xs:w-[300px] rounded-[33px] "
                            >
                                <img src={profilebg2} alt="" className="absolute z-0" />
                                <div className="bg-white text-black absolute z-[1] w-full h-[300px] xs:h-fit top-36 rounded-[33px] ">
                                    <div className="relative profile ">
                                        <img
                                            src={profile4}
                                            alt=""
                                            className="absolute w-[100px] -top-12 translate-x-[100%]  xs:translate-x-[99%]"
                                        />
                                    </div>
                                    <div className="flex flex-col pt-16  p-6 justify-center text-center items-center">
                                        <h4 className="text-[20px] font-bold font-roboto">
                                            Srikanth
                                        </h4>
                                        <p className="text-[13px] pt-4 font-roboto font-light">
                                            Srikanth is an entrepreneurial & passionate technologist
                                            with 2 decades of international experience in Business
                                            Analytics, 2x startup founder, and endurance athlete.
                                            Holds MBA from Madras University.
                                        </p>
                                    </div>
                                    <div className="flex justify-between  xs:flex-col  px-6 pt-0 items-center">
                                        <button className="bg-[#084FFF] text-white text-[20px] font-bold font-roboto rounded-[12px] w-[168px] py-2">
                                            <a href="https://www.linkedin.com/in/srikanth-kanuri-633380a/">
                                                Connect
                                            </a>
                                        </button>
                                        <button className="bg-[#F0F0F0] text-black text-[20px] font-bold font-roboto rounded-[12px] w-[168px] py-2  xs:my-4">
                                            <TwitterIcon className="mr-4" />
                                            Follow
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;

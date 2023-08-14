import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import { useNavigate } from "react-router-dom";
import aiverselogo from "../Assets/aiverselogo.svg";
import "../Style/footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MetaForum from "../Assets/Meta_Forum.png";
function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="text-[14px] xs:text-[12px] ">
            <div className="footer xs:flex-col ss:flex-col sm:flex-col text-[#D0D0D0] font-roboto px-32 xl:px-44 sm:px-16 ss:px-14 xs:px-10">
                <div className="left xs:flex-wrap justify-center items-start basis-[30%] xs:items-center ss:items-center sm:items-center  p-2">
                    <div>
                        <img
                            className="h-[60px] w-[153px] ml-4"
                            src={aiverselogo}
                            onClick={() => navigate("/")}
                            alt="not found"
                        />
                    </div>
                    <div className="pt-[4vh] xs:pt-3 ml-4 text-[#E3E3E3] ">
                        Copy @ 2023 Metakraft.
                    </div>
                    <div className="text-[#E3E3E3] ml-4 ">All rights reserved.</div>
                    <div className="pt-[4vh] xs:pt-4 relative ">
                        <img
                            src={MetaForum}
                            alt="image"
                            onClick={() => navigate("/")}
                            style={{ cursor: "pointer" }}
                            className="w-[259px] xs:w-[180px] h-[72px] xs:h-[50px] "
                        />
                    </div>
                </div>
                <div className=" xs:hidden ss:hidden sm:hidden xs:pt-8 ss:pt-7 basis-[60%] flex flex-row justify-evenly  items-start xs:flex-wrap ss:flex-wrap  xs:text-left p-2 ">
                    <div className="first">
                        <div className="text-[#E3E3E3] font-bold">Company</div>
                        <div
                            className="pt-[4vh] xs:pt-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/about")}
                        >
                            About Us
                        </div>
                        <div
                            className="pt-[4vh] xs:pt-3
                        "
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                window.open(
                                    "https://www.figma.com/file/5ILVnFr6rmjXeWodocSgCU/Brand-Kit?type=design&node-id=0%3A1&mode=design&t=pREIregSrbE61Bdu-1",
                                    "_blank",
                                )
                            }
                        >
                            Branding Kit
                        </div>
                        <div
                            className="pt-[4vh] xs:pt-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/contact")}
                        >
                            Contact Us
                        </div>
                    </div>
                    <div className="second xs:pr-0">
                        <div className="text-[#E3E3E3] font-bold">Resources</div>
                        <div
                            className="pt-[4vh] xs:pt-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => window.open("https://blog.metakraft.live", "_blank")}
                        >
                            Blog
                        </div>
                        <div
                            className="pt-[4vh] xs:pt-3"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                window.open("https://blog.metakraft.live/newsletter", "_blank")
                            }
                        >
                            Newsletter
                        </div>
                        <div
                            className="pt-[4vh] xs:pt-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/about")}
                        >
                            How it works?
                        </div>
                    </div>
                    <div className="third mb-20">
                        <div className="text-[#E3E3E3] font-bold">Legal</div>
                        <div className="pt-[4vh] xs:pt-3">Terms & Conditions</div>
                        <div className="pt-[4vh] xs:pt-3">Privacy Policy</div>
                    </div>

                    <div className="fourth xs:text-center xs:justify-center xs:items-center xs:mx-[52px] ">
                        <div className="text-[#E3E3E3] font-bold">Social</div>
                        <div className="icons pt-[4vh] xs:pt-3">
                            {/* <div className="pl-0 pt-[4vh] xs:pt-3">
                                <a
                                    href="https://www.threads.net/@metakraft.labs"
                                    style={{ textDecoration: "none", color: "#ababab" }}
                                    className="font-extrabold text-[18px] xs:mx-2"
                                >
                                    @
                                </a>
                            </div> */}
                            <div className="pt-[4vh] xs:pt-3">
                                <a
                                    href="https://twitter.com/TheMetakraft"
                                    style={{ textDecoration: "none", color: "#ababab" }}
                                >
                                    <TwitterIcon className=" xs:mx-2" />
                                </a>
                            </div>
                            <div className="pt-[4vh] xs:pt-3">
                                <a
                                    href="https://www.instagram.com/metakraft.labs/"
                                    style={{ textDecoration: "none", color: "#ababab" }}
                                >
                                    <InstagramIcon className=" xs:mx-2" />
                                </a>
                            </div>
                            <div className="pt-[4vh] xs:pt-3">
                                <a
                                    href="https://www.linkedin.com/company/themetakraft/"
                                    style={{ textDecoration: "none", color: "#ababab" }}
                                >
                                    <LinkedInIcon className=" xs:mx-2" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

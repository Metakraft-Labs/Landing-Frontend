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
            <div className="footer xs:flex-col xs:text-left text-[#D0D0D0] font-roboto px-32 xl:px-44 sm:px-16 ss:px-14 xs:px-10">
                <div className="left xs:flex-wrap justify-center items-start basis-[30%]  xs:text-left p-2">
                    <div>
                        <img
                            className="h-[60px] w-[153px]"
                            src={aiverselogo}
                            onClick={() => navigate("/")}
                            alt="not found"
                        />
                    </div>
                    <div className="pt-[4vh] xs:pt-3 text-[#E3E3E3] ">Copy @ 2023 Metakraft.</div>
                    <div className="text-[#E3E3E3] ">All rights reserved.</div>
                    <div className="pt-[4vh] xs:pt-4 ">
                        <img
                            src={MetaForum}
                            alt="image"
                            onClick={() => navigate("/")}
                            style={{ cursor: "pointer" }}
                            className="w-[259px] xs:w-[180px] h-[72px] xs:h-[50px]"
                        />
                    </div>
                </div>
                <div className="xs:pt-8 ss:pt-7 basis-[60%] flex flex-row justify-between   items-start xs:flex-wrap  xs:text-left p-2 ">
                    <div className="first">
                        <div className="text-[#E3E3E3] font-bold">Company</div>
                        <div
                            className="pt-[4vh] xs:pt-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/about")}
                        >
                            About Us
                        </div>
                        <div className="pt-[4vh] xs:pt-3">Branding Kit</div>
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
                        <div className="pt-[4vh] xs:pt-3">How it works?</div>
                    </div>
                    <div className="third">
                        <div className="text-[#E3E3E3] font-bold">Legal</div>
                        <div className="pt-[4vh] xs:pt-3">Terms & Conditions</div>
                        <div className="pt-[4vh] xs:pt-3">Privacy Policy</div>
                    </div>

                    <div className="fourth xs:text-center xs:justify-center xs:items-center">
                        <div className="text-[#E3E3E3] font-bold">Social</div>
                        <div className="icons">
                            <div className="pl-0">
                                <a
                                    href="https://www.threads.net/@metakraft.labs"
                                    style={{ textDecoration: "none", color: "#ababab" }}
                                >
                                    {" "}
                                    {/* <FontAwesomeIcon icon={faFacebook} />{" "} */}
                                </a>
                            </div>
                            <div>
                                {" "}
                                <a
                                    href="https://twitter.com/TheMetakraft"
                                    style={{ textDecoration: "none", color: "#ababab" }}
                                >
                                    {/* <FontAwesomeIcon icon={faTwitter} />{" "} */}
                                </a>{" "}
                            </div>
                            <div>
                                {" "}
                                <a
                                    href="https://www.instagram.com/metakraft.labs/"
                                    style={{ textDecoration: "none", color: "#ababab" }}
                                >
                                    {/* <FontAwesomeIcon icon={faInstagram} />{" "} */}
                                </a>{" "}
                            </div>
                            <div>
                                {" "}
                                <a
                                    href="https://www.linkedin.com/company/themetakraft/"
                                    style={{ textDecoration: "none", color: "#ababab" }}
                                >
                                    {/* <FontAwesomeIcon icon={faLinkedin} />{" "} */}
                                </a>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

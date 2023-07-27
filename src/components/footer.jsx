import React from "react";
import { useNavigate } from "react-router-dom";
import aiverselogo from "../Assets/aiverselogo.svg";
import "../Style/footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MetaForum from "../Assets/Meta_Forum.png";
function Footer() {
    const navigate = useNavigate();

    return (
        <footer style={{ fontSize: "1vw" }}>
            <div className="footer text-[#D0D0D0]">
                <div className="left p-2">
                    <div style={{ paddingLeft: "0.5vw" }}>
                        <img
                            style={{ height: "2.5vw", cursor: "pointer" }}
                            src={aiverselogo}
                            onClick={() => navigate("/")}
                            alt="not found"
                        />
                    </div>
                    <div className="pt-[4vh] text-[#E3E3E3] " style={{ paddingLeft: "1vw" }}>
                        Copy @ 2023 Metakraft.
                    </div>
                    <div className="text-[#E3E3E3] " style={{ paddingLeft: "1vw" }}>
                        All rights reserved.
                    </div>
                    <div className="pt-[4vh]">
                        <img
                            src={MetaForum}
                            alt="image"
                            onClick={() => navigate("/")}
                            style={{ width: "13.5vw", height: "3.75vw", cursor: "pointer" }}
                        />
                    </div>
                </div>
                <div className="center flex flex-row p-2">
                    <div className="first">
                        <div className="text-[#E3E3E3] font-bold">Company</div>
                        <div
                            className="pt-[4vh]"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/about")}
                        >
                            About Us
                        </div>
                        <div className="pt-[4vh]">Branding Kit</div>
                        <div
                            className="pt-[4vh]"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate("/contact")}
                        >
                            Contact Us
                        </div>
                    </div>
                    <div className="second">
                        <div className="text-[#E3E3E3] font-bold">Resources</div>
                        <div
                            className="pt-[4vh]"
                            style={{ cursor: "pointer" }}
                            onClick={() => window.open("https://blog.metakraft.live", "_blank")}
                        >
                            Blog
                        </div>
                        <div
                            className="pt-[4vh]"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                                window.open("https://blog.metakraft.live/newsletter", "_blank")
                            }
                        >
                            Newsletter
                        </div>
                        <div className="pt-[4vh]">How it works?</div>
                    </div>
                    <div className="third">
                        <div className="text-[#E3E3E3] font-bold">Legal</div>
                        <div className="pt-[4vh]">Terms & Conditions</div>
                        <div className="pt-[4vh]">Privacy Policy</div>
                    </div>
                </div>
                <div className="right p-2">
                    <div className="text-[#E3E3E3] font-bold">Social</div>
                    <div className="icons">
                        <div style={{ paddingLeft: "0" }}>
                            {" "}
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
        </footer>
    );
}

export default Footer;

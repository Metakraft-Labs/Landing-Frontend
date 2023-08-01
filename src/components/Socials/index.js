import React from "react";
import hashnode from "../../Assets/image 1.png";
import linkedin from "../../Assets/image 2.png";
import twitter from "../../Assets/image 3.png";
import instagram from "../../Assets/ins_line.png";
const socials = [
    {
        name: "Twitter",
        link: "https://twitter.com/TheMetakraft?t=WCCbOQ4JstQ95TaheT3h8Q&s=09",
        logo: twitter,
    },
    {
        name: "Instagram",
        link: "https://instagram.com/metakraft.labs?igshid=MzNlNGNkZWQ4Mg==",
        logo: instagram,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/company/themetakraft/",
        logo: linkedin,
    },
    {
        name: "Hashnode",
        link: "https://blog.metakraft.live/newsletter",
        logo: hashnode,
    },
];

export default function Socials() {
    return (
        <>
            <div className="aboutSocial">
                <h3 style={{ fontSize: "1.5vw", color: "#E6E6EB", textAlign: "center" }}>
                    Our Socials
                </h3>
                <h1
                    style={{
                        fontSize: "5.5vw",
                        color: "#6c6a6a",
                        padding: "0 8vw",
                        fontWeight: "600",
                        textAlign: "center",
                    }}
                >
                    Join Our Global Community
                </h1>
            </div>
            <div
                className="aboutSocialIcons"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "2vw",
                    justifyContent: "space-around",
                    paddingTop: "2%",
                }}
            >
                {socials.map((social, index) => {
                    return (
                        <div
                            key={`socials-${index}`}
                            style={{
                                width: "18.96vw",
                                padding: "4.3vw 0  1.7vw",
                                backgroundColor: "#1e262e",
                                border: "1px solid #393556",
                                borderRadius: "0.4167vw",
                                textAlign: "center",
                                cursor: "pointer",
                            }}
                            onClick={() => window.open(social.link, "_blank")}
                        >
                            <img
                                style={{ width: "4.5vw", height: "4.5vw" }}
                                src={social.logo}
                                alt={social.name + " logo"}
                            />
                            <div
                                style={{
                                    color: "#F7F7F7",
                                    paddingTop: "0.2vw",
                                    fontSize: "1.1vw",
                                    fontWeight: "600",
                                    paddingBottom: "1.5vw",
                                }}
                            >
                                {social.name}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

import React from "react";
import Picture12 from "../Assets/Picture12.png";
import "../Style/footer.css";
import { useNavigate } from "react-router-dom";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MetaForum from "../Assets/Meta_Forum.png";
function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{ fontSize: "1vw" }}>
      <div className="footer">
        <div className="left p-2">
          <div style={{ paddingLeft: "0.5vw" }}>
            <img style={{ height: "2.5vw", cursor: "pointer" }} src={Picture12} onClick={() => navigate("/")} alt="not found" />
          </div>
          <div style={{ paddingLeft: "1vw", paddingTop: "0.5vw" }}>
            Copy @ 2023 Metakraft.
          </div>
          <div style={{ paddingLeft: "1vw" }}>All rights reserved.</div>
          <div style={{ paddingTop: "0.5vw" }}>
            <img
              src={MetaForum}
              alt="image"
              onClick={() => navigate("/")}
              style={{ width: "13.5vw", height: "3.75vw", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="center p-2">
          <div className="first">
            <div>Company</div>
            <div style={{ color: "#686868", cursor: "pointer" }} onClick={() => navigate("/about")}>About Us</div>
            <div style={{ color: "#686868" }}>Branding Kit</div>
            <div style={{ color: "#686868", cursor: "pointer" }} onClick={() => navigate("/contact")}>Contact Us</div>
          </div>
          <div className="second">
            <div>Resources</div>
            <div style={{ color: "#686868", cursor: "pointer" }} onClick={() => window.open("https://blog.metakraft.live", "_blank")}>Blog</div>
            <div style={{ color: "#686868", cursor: "pointer" }} onClick={() => window.open("https://blog.metakraft.live/newsletter", "_blank")}>Newsletter</div>
            <div style={{ color: "#686868" }}>How it works?</div>
          </div>
          <div className="third">
            <div>Legal</div>
            <div style={{ color: "#686868" }}>Terms & Conditions</div>
            <div style={{ color: "#686868" }}>Privacy Policy</div>
          </div>
        </div>
        <div className="right p-2">
          <div>Social</div>
          <div className="icons">
            <div style={{ paddingLeft: "0" }}>
              {" "}
              <a
                href="https://www.threads.net/@metakraft.labs"
                style={{ textDecoration: "none", color: "#ababab" }}
              >
                {" "}
                <FontAwesomeIcon icon={faFacebook} />{" "}
              </a>
            </div>
            <div>
              {" "}
              <a
                href="https://twitter.com/TheMetakraft"
                style={{ textDecoration: "none", color: "#ababab" }}
              >
                <FontAwesomeIcon icon={faTwitter} />{" "}
              </a>{" "}
            </div>
            <div>
              {" "}
              <a
                href="https://www.instagram.com/metakraft.labs/"
                style={{ textDecoration: "none", color: "#ababab" }}
              >
                <FontAwesomeIcon icon={faInstagram} />{" "}
              </a>{" "}
            </div>
            <div>
              {" "}
              <a
                href="https://www.linkedin.com/company/themetakraft/"
                style={{ textDecoration: "none", color: "#ababab" }}
              >
                <FontAwesomeIcon icon={faLinkedin} />{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";
import gitHub from "../../assets/github.png";
import Linkedin from "../../assets/linkedin.png";
import instaGram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-Container">
      <hr />
      <div className="footer">
        <div className="social-liknks">
          <img src={gitHub} alt="" />
          <img src={Linkedin} alt="" />
          <img src={instaGram} alt="" />
        </div>
        <div className="logo-footer">
          <img style={{ width: "10rem" }} src={Logo} alt="" />
        </div>
      </div>

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;

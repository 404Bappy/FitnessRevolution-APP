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
      </div>

      <div className="logo-footer">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;

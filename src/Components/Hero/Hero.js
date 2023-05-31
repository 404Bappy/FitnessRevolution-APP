import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="Hero-left">
        <Header />
      </div>
      <div className="Hero-right">Right Side</div>
    </div>
  );
};

export default Hero;

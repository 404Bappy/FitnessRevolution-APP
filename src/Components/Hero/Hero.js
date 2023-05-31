import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="Hero-left">
        <Header />

        <div className="the-best-add">
          <div></div>
          <span>The Best Fitness Club In The Town</span>
        </div>
      </div>
      <div className="Hero-right">Right Side</div>
    </div>
  );
};

export default Hero;

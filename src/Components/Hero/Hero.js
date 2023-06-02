import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="Hero-left">
        <Header />
        {/* THE BEST ADD SECTIONS */}
        <div className="the-best-add">
          <div></div>
          <span>The Best Fitness Club In The Town</span>
        </div>

        {/* HERO HEADING SECTION*/}
        <div className="hero-text">
          <div>
            <span>SHAPE</span>
            <span> YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
        </div>
      </div>
      <div className="Hero-right">Right Side</div>
    </div>
  );
};

export default Hero;

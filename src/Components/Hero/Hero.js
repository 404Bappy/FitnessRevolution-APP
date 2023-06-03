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
            <span className="strokeText">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div className="span1">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* FIGURES? */}
        <div className="figures">
          <div>
            <span className="spn1st">+140</span>
            <span className="spn2nd">EXPERT COACHES</span>
          </div>
          <div>
            <span className="spn1st">+ 978</span>
            <span className="spn2nd">MEMBERS JOINED</span>
          </div>
          <div>
            <span className="spn1st">+ 50</span>
            <span className="spn2nd">FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="hero-btn">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="Hero-right">Right Side</div>
    </div>
  );
};

export default Hero;

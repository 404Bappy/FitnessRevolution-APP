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
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
      </div>
      <div className="Hero-right">Right Side</div>
    </div>
  );
};

export default Hero;

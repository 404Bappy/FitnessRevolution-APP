import React from "react";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import NumberCounter from "number-counter";
import Calories from "../../assets/calories.png";

import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="Hero-left">
        <Header />
        {/* THE BEST ADD SECTIONS */}
        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span className="spn1st">
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span className="spn2nd">EXPERT COACHES</span>
          </div>
          <div>
            <span className="spn1st">
              <NumberCounter end={987} start={800} delay="4" preFix="+" />
            </span>

            <span className="spn2nd">MEMBERS JOINED</span>
          </div>
          <div>
            <span className="spn1st">
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>

            <span className="spn2nd">FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="hero-btn">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="Hero-right">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>

        {/* HERO IMAGES */}
        <img src={hero_image} alt="" className="hero-img" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-img-back"
        />

        {/* CALORIES SECTION  */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div className="caldiv">
            <span>CaloriesBurned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

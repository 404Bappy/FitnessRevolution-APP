import React from "react";
import { plansData } from "../../data/plansData";
import WhiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{ gap: "2rem " }}>
        <span className="strokeText">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="strokeText">NOW WITHUS</span>
      </div>
      {/* Plans Card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={WhiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benifits- </span>
            </div>
            <button className="btn" style={{ borderRadius: "3px" }}>
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;

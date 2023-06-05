import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="join" id="join-us">
      <div className="left-join">
        <hr />
        <div>
          <span className="strokeText">READY TO</span>
          <span>LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="strokeText">WITH US?</span>
        </div>
      </div>

      <div className="right-join">
        <form className="email-container" action="">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address"
          />
          <button className="btn btn-j" style={{ borderRadius: "3px" }}>
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;

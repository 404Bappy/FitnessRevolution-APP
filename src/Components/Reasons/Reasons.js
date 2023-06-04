import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import "./Reasons.css";

const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
      <div className="Reason-Left">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="Reason-Right">Right Side of The Reason PART</div>
    </div>
  );
};

export default Reasons;

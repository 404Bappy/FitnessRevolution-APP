import React, { useRef } from "react";
import "./Join.css";
import emailJs from "@emailjs/browser";

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_p4rmvhf",
        "template_cwuoeq9",
        form.current,
        "S4TYP5VevrggCv_Dm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
        <form ref={form} className="email-container" onSubmit={sendEmail}>
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

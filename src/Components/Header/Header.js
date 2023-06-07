import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll/modules";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="Logo" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="Header-menue">
          <li onClick={() => setMenuOpen(false)}>
            <Link>Home</Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>Programs</li>
          <li onClick={() => setMenuOpen(false)}>Why Us</li>
          <li onClick={() => setMenuOpen(false)}>Plans</li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

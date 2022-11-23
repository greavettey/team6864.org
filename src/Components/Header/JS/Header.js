import React from "react";
import "../Styles/Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  const handleNav = (page) => {
    nav(`/${page}`);
  };

  return (
    <div className="header-contianer">
      <img
        src={require("../../../Images/Gryphtech logo.png")}
        alt=""
        onClick={() => nav("/")}
      />
      <div className="link-container">
        <button onClick={() => handleNav("about")}>About Us</button>
        <button onClick={() => handleNav("compitition")}>Compititions</button>
        <button onClick={() => handleNav("ourrobots")}>Our Robots</button>
        <button onClick={() => handleNav("sponsors")}>Our Sponsors</button>
        <button onClick={() => handleNav("supportus")}>Support Us</button>
      </div>
    </div>
  );
};

export default Header;

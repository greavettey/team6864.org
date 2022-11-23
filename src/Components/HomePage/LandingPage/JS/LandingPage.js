import React from "react";
import "./Homepage.css";

const LandingPage = () => {
  return (
    <div>
      <img
        src={require("../../../Images/Test-bg-image.jfif")}
        alt=""
        className="bg-image"
      />
      <section className="header-container">
        <p>about</p>
        <p>about</p>
        <p>about</p>
        <p>about</p>
      </section>
      <img
        src={require("../../Images/Gryphtech logo.png")}
        alt=""
        className="logo"
      />
      <div className="team-name-container">
        <h2>Team 6864</h2>
        <h2>We Are Gryphtech Robotics</h2>
      </div>
      <div className="arrow-container">
        <h3>&#709;</h3>
      </div>
    </div>
  );
};

export default LandingPage;

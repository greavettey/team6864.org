import React from "react";
import "./AltLandingPage.css";

const AltLandingPage = () => {
  return (
    <section className="AltLandingPage-container">
      <img
        src={require("../../../Images/Test-bg-image.jfif")}
        alt=""
        className="bg-image"
      />
      <div className="txt-container">
        <h1>
          We Are <span>Gryphtech</span> Robotics
        </h1>
      </div>
      <div className="btn-container">
        <button>About Us</button>
        <button className="support-btn">Support Us</button>
      </div>
    </section>
  );
};

export default AltLandingPage;

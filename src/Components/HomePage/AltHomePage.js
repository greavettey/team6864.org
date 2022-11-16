import React from "react";
import "../../Styles/HomePage/AltHomePage.css";

const AltHomePage = () => {
  return (
    <section className="alt-homepage-container">
      <img src={require("../../Images/Test-bg-image.jfif")} />

      <h1>Team 6864</h1>
      <div className="btn-container">
        <button>about us</button>
        <button className="btn-red">support us</button>
      </div>
    </section>
  );
};

export default AltHomePage;

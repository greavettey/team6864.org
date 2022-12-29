import React from "react";
import "../Styles/Sponsors.css";
import LoremIpsum from "react-lorem-ipsum";

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <h1>Our Sponsors</h1>

      <div className="sponsor-body-container">
        <img src={require("../../../Images/Robotics test image.jpg")} alt="" />
        <p>{<LoremIpsum />}</p>
      </div>
    </div>
  );
};

export default Sponsors;

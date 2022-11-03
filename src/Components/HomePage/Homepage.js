import React from "react";
import "../../Styles/HomePage/Homepage.css";
import { LoremIpsum } from "react-lorem-ipsum";

const Homepage = () => {
  return (
    <section>
      <div className="header-container">
        <img
          src={require("../../Images/Test-image.jpg")}
          alt="could not load image"
        />
        <div className="text-container">
          <h1>Team 6864 Gryphtech Robotics</h1>
        </div>
      </div>
      <body className="home-container">
        <div className="left">
          <h3>about us</h3>
          <p> {<LoremIpsum />}</p>
        </div>
        <div className="right">
          <h3>Our Robot</h3>
          <p>{<LoremIpsum />}</p>
        </div>
      </body>
    </section>
  );
};

export default Homepage;

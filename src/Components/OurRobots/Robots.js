import React from "react";
import "./Robots.css";

const Robots = () => {
  return (
    <section className="robots-contianer">
      <h1>Our Robots</h1>
      <div className="img-contianer">
        <img src={require("./test-robot.jpeg")} className="Robiwan-img" />
        <img src={require("./test-robot.jpeg")} className="grito-img" />
      </div>
    </section>
  );
};

export default Robots;

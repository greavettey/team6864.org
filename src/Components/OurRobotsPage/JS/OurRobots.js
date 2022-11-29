import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import "../Styles/OurRobots.css";

const OurRobots = () => {
  return (
    <section className="our-robot-container">
      <h1>Our Robots</h1>

      <p className="discription">{<LoremIpsum />}</p>

      <div className="card-container">
        <div className="card">
          <img src={require("../../../Images/Unknown.jpeg")} alt="" />

          <div className="txt-container">
            <h2>Robot 1</h2>
            <p>{<LoremIpsum length={1} />}</p>
          </div>
        </div>

        <div className="card">
          <img src={require("../../../Images/Unknown.jpeg")} alt="" />

          <div className="txt-container">
            <h2>Robot 1</h2>
            <p>{<LoremIpsum length={1} />}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRobots;

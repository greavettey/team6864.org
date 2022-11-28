import React from "react";
import "../Styles/Compittion.css";
import LoremIpsum from "react-lorem-ipsum";

const Compitition = () => {
  return (
    <section className="compitition-container">
      <h1>Compititions</h1>

      <p className="discriptive-txt">{<LoremIpsum length={1} />}</p>

      <div className="comp-card-container">
        <div className="card">
          <h2>comp</h2>
          <img
            src={require("../../../Images/Robotics test image.jpg")}
            alt=""
          />
          <p>{<LoremIpsum />}</p>
        </div>

        <div className="card">
          <h2>comp</h2>
          <img
            src={require("../../../Images/Robotics test image.jpg")}
            alt=""
          />
          <p>{<LoremIpsum />}</p>
        </div>

        <div className="card">
          <h2>comp</h2>
          <img
            src={require("../../../Images/Robotics test image.jpg")}
            alt=""
          />
          <p>{<LoremIpsum />}</p>
        </div>

        <div className="card">
          <h2>comp</h2>
          <img
            src={require("../../../Images/Robotics test image.jpg")}
            alt=""
          />
          <p>{<LoremIpsum />}</p>
        </div>
      </div>
    </section>
  );
};

export default Compitition;

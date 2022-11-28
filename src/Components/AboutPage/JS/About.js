import React from "react";
import "../Styles/About.css";
import LoremIpsum from "react-lorem-ipsum";

const About = () => {
  return (
    <section className="about-contaienr">
      <h1>About Us</h1>

      <section className="text-container">
        <div className="text-box">
          <h2>Main</h2>
          <p>{<LoremIpsum />}</p>
        </div>

        <div className="text-box">
          <h2>Penis</h2>
          <p>{<LoremIpsum />}</p>
        </div>
      </section>

      <div className="text-container">
        <div className="text-box">
          <h2>Main</h2>
          <p>{<LoremIpsum />}</p>
        </div>

        <div className="text-box">
          <h2>Penis</h2>
          <p>{<LoremIpsum />}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

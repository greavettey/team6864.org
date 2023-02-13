import React from "react";
import "../Styles/Robots.css";

const Robots = () => {
  return (
    <section className="robots-contianer">
      <h1>Our Robots</h1>
      <div className="img-contianer">
        <img
          src={require("../../../../Images/real images/RobiWan.PNG")}
          className="Robiwan-img"
          alt=""
        />
        <img
          src={require("../../../../Images/real images/Grito.PNG")}
          className="grito-img"
          alt=""
        />
      </div>
    </section>
  );
};

export default Robots;

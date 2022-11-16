import React from "react";
import Featured from "../Featured/Featured";
import AltLandingPage from "../LandingPage/AltLandingPage";

const Homepage = () => {
  return (
    <section className="home-page-container">
      <AltLandingPage />
      <Featured />
    </section>
  );
};

export default Homepage;

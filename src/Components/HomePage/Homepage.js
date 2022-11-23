import React from "react";
import Featured from "./Featured/JS/Featured";
import AltLandingPage from "./LandingPage/JS/AltLandingPage";
import Robots from "./OurRobots/JS/Robots";
const Homepage = () => {
  return (
    <section className="home-page-container">
      <AltLandingPage />
      <Featured />
      <Robots />
    </section>
  );
};

export default Homepage;

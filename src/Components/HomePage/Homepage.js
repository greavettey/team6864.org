import React from "react";
import Featured from "./Featured/Featured";
import AltLandingPage from "./LandingPage/AltLandingPage";
import Robots from "./OurRobots/Robots";
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

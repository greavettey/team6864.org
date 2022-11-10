import React from "react";
import LandingPage from "./LandingPage";
import Featured from "./Featured";

const Homepage = () => {
  return (
    <section className="home-page-container">
      <LandingPage />
      <Featured />
    </section>
  );
};

export default Homepage;

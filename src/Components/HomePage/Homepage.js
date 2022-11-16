import React from "react";
import LandingPage from "./LandingPage";
import Featured from "./Featured";
import AltHomePage from "./AltHomePage";
import Header from "../Header/Header";

const Homepage = () => {
  return (
    <section className="home-page-container">
      <Header />
      <AltHomePage />
      <Featured />
    </section>
  );
};

export default Homepage;

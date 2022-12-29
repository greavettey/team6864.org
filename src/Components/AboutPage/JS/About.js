import React from "react";
import "../Styles/About.css";
import LoremIpsum from "react-lorem-ipsum";

const About = () => {
  return (
    <section className="about-contaienr">
      <h1>About Us</h1>

      <section className="text-container">
        <div className="text-box">
          <h2>Our Team</h2>
          <p>
            Gryphtech Robotics is a robotics team based out of a local high
            school in Gravenhurst. We compete in competitions held by FIRST
            Robotics every year. Our group of around 30 students create a new
            robot every year to compete in these competitions. We have a build
            team, programming team, fundraising/media team and a CAD team. Even
            though we have a multitude of different teams, anyone can do
            anything and we all work together to reach our end goals.
          </p>
        </div>

        <div className="text-box">
          <h2>Our Beginnings</h2>
          <p>
            Gryphtech Robotics started off in 2018 when a student approached one
            of the teachers in our building with the idea of making robots. We
            started off in a janitor's closet with very little tools and money.
            Our mentor had to bring in some of his own tools for the team to
            use. We had no access to 3D printers or CNC machines and had to cut
            the pieces for our robot by hand. Over the years we got more money,
            more tools and more support. Now we have our own classroom with all
            sorts of power tools, 3D printers and even our one CNC machine.
          </p>
        </div>
      </section>

      <div className="text-container">
        <div className="text-box">
          <h2>...</h2>
          <p>{<LoremIpsum />}</p>
        </div>

        <div className="text-box">
          <h2>...</h2>
          <p>{<LoremIpsum />}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

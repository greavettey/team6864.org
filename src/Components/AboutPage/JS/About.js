import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <section className="about-contaienr">
      <h1>About Us</h1>

      <section className="text-container">
        <div className="text-box">
          <h2>Our Team</h2>
          <p>
            Gryphtech Robotics is a robotics team based out of Gravenhurst High School in beautiful Muskoka.
            We've competed in FIRST Robotics compitition across Ontario in the past 5 years. Our group of around 30 students create a new
            robot every year to compete in these competitions. Comprised of 30+ members, students are invited to take part in all aspects of FIRST, from media and PR, to building and programming the robot, and together we form a close team.
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
            sorts of power tools, 3D printers and even our own CNC machine.
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;

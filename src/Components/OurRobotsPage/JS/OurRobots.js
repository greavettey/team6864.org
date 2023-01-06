import React from "react";
import LoremIpsum from "react-lorem-ipsum";
import "../Styles/OurRobots.css";

const OurRobots = () => {
  return (
    <section className="our-robot-container">
      <h1>Our Robots</h1>

      <div className="card-container">
        <div className="card">
          <img src={require("../../../Images/Unknown.jpeg")} alt="" />

          <div className="txt-container">
            <h2>Robi Wan Kanobi</h2>
            <p>
              Our robot for the 2021-2022 season has a multitude of features to
              be able to pick up game pieces, accurately shoot game pieces, and
              be able to climb. At the start of the match, two arms would lower
              over the front of the robot with an axle connecting them, this
              axle has compliance wheels so when you spin it will grip the ball
              and pull it into the robot. To shoot the ball our robot had a
              system that was like the shute that snow exits on a snowblower. We
              mounted a flywheel onto this so we would be able to change the
              angle and speed of the game piece. The robot would automatically
              set the speed and angle needed to hit the target depending on the
              position of the robot, then a ball stopper would release letting
              the ball roll into the flywheel shooting it into the hoop. Finally
              for the climber we had an arm with a hook on the end that would
              extend upwards over the bar, we could then move the robot slightly
              forward and pull the arm back down onto the bar allowing the robot
              to be lifted into the air then a pin would lock the robot in
              place.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={require("../../../Images/Unknown.jpeg")} alt="" />

          <div className="txt-container">
            <h2>Grito</h2>
            <p>{<LoremIpsum length={1} />}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRobots;

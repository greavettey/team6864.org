import React from "react";
import "../Styles/Compittion.css";
import LoremIpsum from "react-lorem-ipsum";

const Compitition = () => {
  return (
    <section className="compitition-container">
      <h1>Competitions</h1>

      <div className="comp-card-container">
        <div className="card">
          <h2>Rapid React</h2>
          <img
            src={require("../../../Images/real images/Rapid-React.jpeg")}
            alt=""
          />
          <p>
            {" "}
            This game involved shooting oversized tennis balls into two hoops,
            one near the ground giving you one point, and one a few meters in
            the air worth two points. At the end of the game, teams would be
            given a chance to climb a monkey bar-like structure where each bar
            was higher than the next, but so was the number of points given by
            reaching it. The team with the most points at the end of the two
            minutes would win the round.
          </p>
        </div>

        <div className="card">
          <h2>Infinite Recharge</h2>
          <img
            src={require("../../../Images/real images/Infinite-Recharge.png")}
            alt=""
          />
          <p>
            Robots will have to shoot balls precisely into gaps in the wall one
            low and one higher up the more balls you score the more points you
            get. One robot on the team will then have to spin a wheel a set
            number of times or position it to s specific colour. Two robots will
            then have to grab onto a bar above them and pull themselves up.
          </p>
        </div>

        <div className="card">
          <h2>Deep Space </h2>
          <img
            src={require("../../../Images/real images/Deep-Space.png")}
            alt=""
          />
          <p>
            The goal of this game is to load cargo onto a space ship robots will
            do this by first placing a disk over a hatch to stop the cargo from
            rolling out. They will then have to place a ball inside the cargo
            slot. The start of the game has a 15-second “sandstorm” where
            drivers will not be able to see their robot and will have to control
            it with an onboard vision system or autonomously. At the end of the
            game, robots will have to return to their starting position for
            extra points.
          </p>
        </div>

        <div className="card">
          <h2>Power Up</h2>
          <img
            src={require("../../../Images/real images/Level-Up.png")}
            alt=""
          />
          <p>
            Robots will compete to place cubes in a scale, points are given to
            the team who has control of the scale by the second. At the end of
            the game, teams can perform a climb to score extra points. You can
            also put cubes into a power-up machine. If you fill it you can get
            one of 3 powerups. Force, Levitate, and boots. Force will give one
            team control of the scale. Boost will give a team double points for
            all items on the scale. Levitate will give one robot on a team a
            free climb.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Compitition;

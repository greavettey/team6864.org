import React from "react";
import "../Styles/Featured.css";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();

  const handleNav = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="featured-container">
      <h1>Featured</h1>
      <div className="btn-container">
        <div className="btn-background" onClick={() => handleNav("about")}>
          <img
            src={require("../../../../Images/real images/about-us-icon.png")}
            alt=""
          />
        </div>

        <div className="btn-background" onClick={() => handleNav("ourrobots")}>
          <img
            src={require("../../../../Images/real images/Robot-2.png")}
            alt=""
          />
        </div>

        <div className="btn-background" onClick={() => handleNav("supportus")}>
          <img
            src={require("../../../../Images/real images/support-us-logo.png")}
            alt=""
          />
        </div>
      </div>

      <div className="divider"></div>
    </div>
  );
};

export default Featured;

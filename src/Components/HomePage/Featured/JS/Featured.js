import React from "react";
import "../Styles/Featured.css";
import { Routes, Route, useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();

  const toAboutPage = () => {
    navigate("/about");
  };

  return (
    <div className="featured-container">
      <h1>Featured</h1>
      <div className="btn-container">
        <button onClick={toAboutPage}> about</button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
};

export default Featured;

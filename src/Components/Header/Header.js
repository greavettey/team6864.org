import React from "react";
import "../../Styles/Header/Header.css";

const Header = () => {
  return (
    <section className="alt-header-container">
      <img src={require("../../Images/Gryphtech logo.png")} />
      <div className="btn-contaienr">
        <button>about</button>
        <button>robots</button>
        <button>compititions</button>
        <button>support</button>
      </div>
    </section>
  );
};

export default Header;

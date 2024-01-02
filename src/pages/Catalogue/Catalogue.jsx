import React from "react";
import "./style.css";
import imgHero from "../../images/images/bg-catalogue.jpg";
function Catalogue() {
  return (
    <div className="catalogue">
      <div className="container">
        <div className="catalogue-content">
          <img src={imgHero} alt="diamond" className="img-hero" />
        </div>
      </div>
    </div>
  );
}

export default Catalogue;

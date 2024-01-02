import React from "react";
import "./style.css";
import imgHero from "../../images/images/bg-catalogue.jpg";
import CatalogueItem from "../../components/catalogue /CatalogueItem/CatalogueItem";
import products from "../../fakeApi";

function Catalogue() {
  return (
    <div className="catalogue">
      <div className="container">
        <div className="catalogue-content">
          <img src={imgHero} alt="diamond" className="img-hero" />
          <ul className="catalogue__list">
            <CatalogueItem products={products} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;

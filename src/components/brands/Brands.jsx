import "./styles.css";
import hm from "../../images/brands/HM.png";
import amazon from "../../images/brands/Amazon.png";
import lacoste from "../../images/brands/Lacoste.png";
import levis from "../../images/brands/Levis.png";
import obey from "../../images/brands/Obey.png";
import shopify from "../../images/brands/Shopify.png";

function Brands() {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-row">
          <ul className="brands__list">
            <li>
              <a href="!#">
                <img src={amazon} alt="amazon" />
              </a>
            </li>

            <li>
              <a href="!#">
                <img src={hm} alt="H&M" />
              </a>
            </li>

            <li>
              <a href="!#">
                <img src={lacoste} alt="Lacoste" />
              </a>
            </li>

            <li>
              <a href="!#">
                <img src={levis} alt="Levis" />
              </a>
            </li>

            <li>
              <a href="!#">
                <img src={obey} alt="Obey" />
              </a>
            </li>

            <li>
              <a href="!#">
                <img src={shopify} alt="shopify" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Brands;

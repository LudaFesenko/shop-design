import Card from "../card/Card";
import "./styles.css";
import redFire from "../../images/images/red-fire.jpg";
import blackSwan from "../../images/images/black-swan.jpg";
import redMelisandre from "../../images/images/red-melisandre.jpg";
function Arrivals() {
  return (
    <div className="arrivals">
      <div className="container">
        <div className="arrivals__title">NEW ARRIVALS</div>
        <ul className="arrivals__card">
          <Card title="Fire dress" img={redFire} />
          <Card title="Black swan" img={blackSwan} />
          <Card title="Red Melisandre" img={redMelisandre} />
        </ul>
      </div>
    </div>
  );
}

export default Arrivals;

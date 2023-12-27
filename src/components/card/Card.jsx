import "./styles.css";
import arrowImg from "../../images/icons/arrow.svg";
function Card({ title, img }) {
  return (
    <li className="card">
      <a href="!#" className="card__link">
        <img src={img} alt={title} className="card__img" />

        <div className="card__body">
          <div className="card__text">
            <div className="card__title">{title}</div>
            <div className="card__subTitle">Explore Now!</div>
          </div>
          <div className="card__icon">
            <img src={arrowImg} alt="go" />
          </div>
        </div>
      </a>
    </li>
  );
}

export default Card;

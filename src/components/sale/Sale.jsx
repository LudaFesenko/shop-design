import "./styles.css";
import saleImg from "../../images/images/sale.jpg";

function Sale() {
  return (
    <section className="sale">
      <div className="container">
        <div className="sale__wrapper">
          <img src={saleImg} alt="" />
          <div className="sale__info">
            <div className="sale__title">
              <span className="hightlight">
                <span>PAYDAY</span>
              </span>
              SALE NOW
            </div>
            <p className="sale__text">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <div className="sale__data"> 1 June - 10 June 2024</div>
            <div className="sale__apply">*Terms & Conditions apply</div>
            <a href="!#" className="sale__btn">
              shop now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sale;

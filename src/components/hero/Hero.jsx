import "./styled.css";
// import heroImg from "../../images/images/hero-img.jpg";
import heroImg from "../../images/images/pic1.jpg";
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <div className="hero__title">
              <span className="hightLight">
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className="hightLight hightLight__accent">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="hero__desc">
              Live for Influential and Innovative fashion!
            </div>
            <div className="hero__btn-wrapper">
              <a href="" className="hero__btn">
                Shop Now
              </a>
            </div>
          </div>

          <div className="hero__img">
            <img src={heroImg} alt="hero-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

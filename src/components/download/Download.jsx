import "./styles.css";
import vouchers from "../../images/images/vouchers-img.png";
import appStore from "../../images/icons/app-store.png";
import googlePlay from "../../images/icons/google-play.png";
function Download() {
  return (
    <div className="download">
      <div className="container">
        <div className="download__wrap">
          <div className="download__info">
            <div className="download__title">
              DOWNLOAD APP & GET THE VOUCHER!
            </div>
            <div className="download__text">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </div>
            <div className="download__btn-wrap">
              <div className="download__btn">
                <a href="!#">
                  <img src={appStore} alt="app store" />
                </a>
              </div>
              <div className="download__btn">
                <a href="!#">
                  <img src={googlePlay} alt="google play" />
                </a>
              </div>
            </div>
          </div>
          <div className="download__img">
            <img src={vouchers} alt="vouchers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;

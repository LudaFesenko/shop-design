import "./style.css";
import fb from "../../images/socials/fb.svg";
import linkidIn from "../../images/socials/in.svg";
import insta from "../../images/socials/inst.svg";
import tw from "../../images/socials/tw.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__fashion">
            <h1 className="footer__title">Diamonds</h1>
            <p className="footer__text">
              Complete your style with awesome clothes from us.
            </p>
            <ul className="footer__social">
              <li>
                <a href="!#">
                  <img src={fb} alt="fb" />
                </a>
              </li>
              <li>
                <a href="!#">
                  <img src={linkidIn} alt="linkedIn" />
                </a>
              </li>
              <li>
                <a href="!#">
                  <img src={insta} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="!#">
                  <img src={tw} alt="tw" />
                </a>
              </li>
            </ul>
          </div>
          {/* right block footer */}
          <div className="footer__info">
            {/*  */}
            <div className="footer__link">
              <h3 className="footer__link-title">Company</h3>
              <ul>
                <li>
                  <a className="footer__link-text" href="!#">
                    About
                  </a>
                </li>
                <li>
                  <a className="footer__link-text" href="!#">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="footer__link-text" href="!#">
                    Support
                  </a>
                </li>
                <li>
                  <a className="footer__link-text" href="!#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            {/*  */}
            <div className="footer__link">
              <h3 className="footer__link-title">Quick Link</h3>
              <ul>
                <li>
                  <a className="footer__link-text" href="!#">
                    Share Location
                  </a>
                </li>
                <li>
                  <a className="footer__link-text" href="!#">
                    Orders Tracking
                  </a>
                </li>
                <li>
                  <a className="footer__link-text" href="!#">
                    Size Guide
                  </a>
                </li>
                <li>
                  <a className="footer__link-text" href="!#">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            {/* legal */}
            <div className="footer__link">
              <h3 className="footer__link-title">Legal</h3>
              <ul>
                <li>
                  <a className="footer__link-text" href="!#">
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a className="footer__link-text" href="!#">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

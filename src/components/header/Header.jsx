import "./styled.css";
import { IoDiamond } from "react-icons/io5";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <a href="!#" className="header__logo">
            <IoDiamond color={"#f795ba"} size={90} />
            <span>Diamonds</span>
          </a>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="!#">CATALOGUE</a>
              </li>
              <li>
                <a href="!#">FASHION</a>
              </li>
              <li>
                <a href="!#">FAVOURITE</a>
              </li>
              <li>
                <a href="!#">LIFESTYLE</a>
              </li>
            </ul>
            <div>
              <div className="header-btn">
                <a href="!#">SIGN UP</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

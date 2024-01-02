import "./styled.css";
import { IoDiamond } from "react-icons/io5";
// import { FaCartPlus } from "react-icons/fa6";
import { RiHandbagLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-row">
          <NavLink to="/" className="header__logo">
            <IoDiamond color={"#f795ba"} size={90} />
            <span>Diamonds</span>
          </NavLink>
          <IoMdMenu className="menu" />
          <nav className="header__nav">
            <ul>
              <li>
                <NavLink to="/catalogue">CATALOGUE</NavLink>
              </li>
              <li>
                <NavLink to="/fashion">FASHION</NavLink>
              </li>

              <li>
                <NavLink to="/favorite">FAVORITE</NavLink>
              </li>
              <li>
                <NavLink to="/lifestyle">LIFESTYLE</NavLink>
              </li>
            </ul>
            <NavLink className="cart-icon" to="/cart">
              <RiHandbagLine size={50} />
            </NavLink>
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

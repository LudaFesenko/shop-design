import { NavLink } from "react-router-dom";
import { useState } from "react";
import { IoDiamond } from "react-icons/io5";
import { RiHandbagLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";

import "./styled.css";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggle = () => {
    setCartOpen((cartOpen) => !cartOpen);
  };
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
            {/* <NavLink className="cart-icon" to="/cart"> */}
            <NavLink className="cart-icon">
              <RiHandbagLine
                onClick={toggle}
                className={`cart-icon-btn ${cartOpen && "active"}`}
              />
            </NavLink>
            {cartOpen && <div className="shop-cart"></div>}
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

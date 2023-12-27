import "./style.css";

import React from "react";
import "./style.css";
function Address() {
  return (
    <div className="address">
      <div className="container">
        <div className="address__wrap">
          <div className="address__title">
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </div>
          <div className="address__text">
            Type your email down below and be young wild generation
          </div>

          <form>
            <div className="input__wrap">
              <input
                type="email"
                className="input"
                placeholder="Add your email here"
              />
              <button type="submit" className="btnInput">
                send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Address;

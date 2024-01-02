import "./style.css";
import { IoCloseOutline } from "react-icons/io5";

import Count from "../count/Count";

function CartProduct({
  product: { img, title, id, count, price },
  deleteProduct,
  increment,
  decrement,
  handleChangeInput,
}) {
  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <section className="product">
      <div className="product-img">
        <img src={img} alt={title} width={200} />
      </div>
      <div className="product-title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          increment={increment}
          decrement={decrement}
          id={id}
          handleChangeInput={handleChangeInput}
        />
      </div>

      <div className="product-price">{priceFormat.format(price * count)}</div>

      <div className="product__controls">
        <button type="button" onClick={() => deleteProduct(id)}>
          <IoCloseOutline />
        </button>
      </div>
    </section>
  );
}

export default CartProduct;

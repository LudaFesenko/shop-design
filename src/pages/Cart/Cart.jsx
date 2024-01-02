import "./style.css";

import CartFooter from "../../components/cart/footer/CartFooter";
import CartProduct from "../../components/cart/product/CartProduct";
import { useState } from "react";
import fakeApi from "../../fakeApi";

function Cart() {
  const [cart, setCart] = useState(fakeApi);

  const total = cart.reduce(
    (acc, cur) => {
      acc.count += cur.count;
      acc.price += cur.count * cur.price;
      return acc;
    },
    {
      count: 0,
      price: 0,
    }
  );

  const deleteProduct = (id) => {
    setCart((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  const increment = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
          };
        }
        return product;
      });
    });
  };

  const decrement = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count - 1 > 1 ? product.count - 1 : 1,
          };
        }
        return product;
      });
    });
  };

  const handleChangeInput = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
          };
        }
        return product;
      });
    });
  };
  const products = cart.map((product) => {
    return (
      <CartProduct
        handleChangeInput={handleChangeInput}
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        increment={increment}
        decrement={decrement}
      />
    );
  });

  return (
    <section className="section-cart">
      <header className="section-cart__header">
        <div className="container">
          <h1 className="title-1">Корзина товаров</h1>
        </div>
      </header>
      <div className="section-cart__body">
        <div className="container">
          {products}
          <CartFooter totalCount={total.count} totalPrice={total.price} />
        </div>
      </div>
    </section>
  );
}

export default Cart;

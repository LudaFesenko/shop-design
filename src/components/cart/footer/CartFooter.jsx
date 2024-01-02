import "./style.css";
function CartFooter({ totalCount, totalPrice }) {
  const priceFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{totalCount}</div>
      <div className="cart-footer__price">{priceFormat.format(totalPrice)}</div>
    </footer>
  );
}

export default CartFooter;

import "./style.css";

function CatalogueItem({ products }) {
  return products.map((product) => {
    return (
      <li className="catalogue__item" key={product.id}>
        <img src={product.img} alt="" className="catalogue__img" />
        <div className="catalogue__info">
          <div className="catalogue__info-block">
            <h2 className="catalogue__title">{product.title}</h2>
            <p className="catalogue__price">{product.price} $</p>
          </div>
          <button type="button" className="catalogue__btn">
            +
          </button>
        </div>
      </li>
    );
  });
}

export default CatalogueItem;

import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ items }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CO", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <ul className="search-results__list">
      {items.map((item) => (
        <li key={item.id}>
          <div className="product-card product-card--list">
            <div className="product-card__cover">
              <img
                src={item.picture}
                alt={item.title}
                className="product-card__image"
                loading="lazy"
                width={259}
                height={250}
              />
            </div>
            <div className="product-card__content">
              <h3 className="product-card__title-wrapper">
                <Link to={`/items/${item.id}`} className="product-card__title">
                  {item.title}
                </Link>
              </h3>
              {item.seller && (
                <span className="product-card__seller">Por {item.seller}</span>
              )}

              <div className="product-content">
                <div className="product-content__column">
                  <div className="product-component__price">
                    <span className="product-component__price-dolar">$</span>
                    {formatPrice(item.price.amount)}
                  </div>
                  <div className="product-detail__price-subtitle">
                    <p className="subtitle-green">
                      Mismo precio en 9 cuotas de $ 151.426
                    </p>
                  </div>
                  <div className="product-component__shipping">
                    {item.free_shipping && (
                      <span className="product-shipping--free">
                        Envío gratis
                      </span>
                    )}
                  </div>
                </div>
                <div className="product-content__column">
                  <div className="product-component__variation-text">
                    Disponible en 2 colores
                  </div>
                  {item.installments && (
                    <div className="product-list__installments">
                      {item.installments}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;

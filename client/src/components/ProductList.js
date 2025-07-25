import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ items }) => {
  return (
    <div className="product-list">
      {items.map((item) => (
        <Link
          to={`/items/${item.id}`}
          key={item.id}
          className="product-list__item"
        >
          <div className="product-list__image-container">
            <img
              src={item.picture}
              alt={item.title}
              className="product-list__image"
            />
          </div>
          <div className="product-list__info">
            <div className="product-list__price">
              ${item.price.amount}
              {item.free_shipping && (
                <span className="product-list__free-shipping">
                  Envío gratis
                </span>
              )}
            </div>
            <h3 className="product-list__title">{item.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;

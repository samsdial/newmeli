import React from 'react';

function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <div className="product-detail__main">
        <div className="product-detail__gallery">
          <img 
            src={product.pictures[0].url} 
            alt={product.title} 
            className="product-detail__main-image" 
          />
        </div>
        <div className="product-detail__info">
          <span className="product-detail__condition">
            {product.condition === 'new' ? 'Nuevo' : 'Usado'} - {product.sold_quantity} vendidos
          </span>
          <h1 className="product-detail__title">{product.title}</h1>
          <div className="product-detail__price">
            ${product.price.amount}
            <span className="product-detail__decimals">{product.price.decimals}</span>
          </div>
          <button className="product-detail__buy-button">Comprar</button>
        </div>
      </div>
      <div className="product-detail__description">
        <h2 className="product-detail__description-title">Descripción del producto</h2>
        <p className="product-detail__description-text">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
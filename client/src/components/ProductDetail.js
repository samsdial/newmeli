import React from "react";
import ProductGallery from "./ProductGallery";

function ProductDetail({ product }) {
  console.log(product);
  return (
    <div className="product-container">
      <div className="product-container__row ml-24 mr-24 mt-24">
        <div className="product-container__col col-2 order-1">
          <ProductGallery items={product.pictures} />
        </div>
        <div className="product-container__col col-2 order-none">
          <div className="product-detail">
            <div className="product-detail__top">
              <div className="product-detail__header">
                <div className="product-detail__header-subtitle">
                  <p className="subtitle" aria-label="Nuevo mas de 25 vendidos">
                    {product.condition === "new" ? "Nuevo" : "Usado"}{" "}
                    <span className="subtitle-line">|</span>{" "}
                    <span className="subtitle-plus">+</span>
                    {product.sold_quantity} vendidos
                  </p>
                </div>
                <div className="product-detail__header-title-container">
                  <p className="seller">Por {product.seller}</p>
                  <h1 className="title">{product.title}</h1>
                  <div className="product-card__highlight">
                    Official {product.seller}
                  </div>
                </div>
              </div>
            </div>
            <div className="product-container__row">
              <div className="product-detail__price">
                <span className="product-detail__price-dolar">$</span>
                <span className="product-detail__price-part">
                  {product.price.amount}
                </span>
              </div>
              <div className="product-detail__price-subtitle">
                <p className="subtitle-green">
                  Mismo precio en 9 cuotas de $ 151.426
                </p>
              </div>
            </div>
            {product.free_shipping && (
              <div className="product-detail__price-free-shipping mb-28">
                <span className="subtitle subtitle-green">Envío gratis</span>
              </div>
            )}
            {product.color && (
            <div className="product-detail__color">
              <span className="product-detail__color--info">
                Color: <b>{product.color}</b>
              </span>
            </div>
            )}
          </div>
        </div>
        <div className="product-container__col col-2 order-2">
          <div className="product-detail__buy-container">
            {product.free_shipping && (
              <div className="product-detail__price-free-shipping">
                <span className="subtitle subtitle-green">Envío gratis</span>
                <span className="subtitle ml-4">a todo el pais</span>
              </div>
            )}
            <div className="product-detail__buy-actions">
              <button className="product-detail__buy-btn btn-loud">
                Comprar ahora
              </button>
              <button className="product-detail__buy-btn btn-quiet">
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-container__col pr-24 pl-24 pb-24">
        <div className="product-detail__description">
          <h2 className="product-detail__description-title">Descripción</h2>
          <p className="product-detail__description-text">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

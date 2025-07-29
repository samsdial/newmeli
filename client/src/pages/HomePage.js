import React from "react";
import SEO from "../components/SEO";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Mercado Libre Colombia - Envíos Gratis en el día"
        description="Comprá productos con Envío Gratis en el día en Mercado Libre Colombia. Encontrá miles de marcas y productos a precios increíbles."
        keywords="mercado libre, compras online, envío gratis, productos, ofertas, colombia"
        image="/assets/images/logo_meli.png"
        url={window.location.href}
        type="website"
      />
      <div className="slider">
        <div className="slider__bg" />
      </div>
      <div className="home-page">
        <div className="home-page__header">
          <h1>Mercado Libre - test</h1>
          <p>Encuentra los mejores productos en Mercado Libre.</p>
          <p>Sergio Martinez - Front End Developer.</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;

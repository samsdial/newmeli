import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    const alreadyVisited = localStorage.getItem("visited");
    if (!alreadyVisited) {
      alert("¡Bienvenido a Mercado Libre!");
      localStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slider__bg"/>
      </div>
      <div className="home-page">
        <div className="home-page__header">
          <h1>Mercado Libre</h1>
          <p>Encuentra los mejores productos en Mercado Libre.</p>
        </div>
        <div className="home-page__content">
          {/* Contenido principal de la home page */}
        </div>
      </div>
    </>
  );
};

export default HomePage;

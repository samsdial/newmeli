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
          <h1>Mercado Libre - test</h1>
          <p>Encuentra los mejores productos en Mercado Libre.</p>
          <p>Sergio Martinez - Front End Developer.</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;

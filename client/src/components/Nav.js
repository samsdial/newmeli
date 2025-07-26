import React from "react";

const Nav = () => {
  return (
    <nav className="header__nav">
      <ul className="nav-menu">
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            <span className="nav-menu__text">Categorías</span>
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            <span className="nav-menu__text">Ofertas</span>
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            <span className="nav-menu__text">Historial</span>
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            <span className="nav-menu__text">Supermercado</span>
          </a>
        </li>
        <li className="nav-menu__item">
          <a href="#" className="nav-menu__link">
            <span className="nav-menu__text">Moda</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav
// client/src/components/Breadcrumb.js
import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ categories = [] }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="breadcrumb">
    <div className="breadcrumb__col">
      <Link to="/" className="breadcrumb__link-return">
        Volver al listado
      </Link>
      <nav  aria-label="Ruta de navegación">
        <ol className="breadcrumb__list">
          {categories.map((category, index) => (
            <li key={index} className="breadcrumb__item">
              {index < categories.length - 1 ? (
                <Link
                  to={`/items?category=${encodeURIComponent(category)}`}
                  className="breadcrumb__link"
                >
                  {category}
                </Link>
              ) : (
                <span className="breadcrumb__current" aria-current="page">
                  {category}
                </span>
              )}
              {index < categories.length - 1 && (
                <span className="breadcrumb__separator">
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                    <path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path>
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      </div>
      <div className="breadcrumb__col">
        <div className="breadcrumb__code">
          <span className="breadcrumb__code--info">Publicación: <b>#11117020690</b></span>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;

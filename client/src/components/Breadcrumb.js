// client/src/components/Breadcrumb.js
import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ categories = [] }) {
  if (!categories || categories.length === 0) return null;

  return (
    <nav className="breadcrumb" aria-label="Ruta de navegación">
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
              <span className="breadcrumb__separator">›</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;

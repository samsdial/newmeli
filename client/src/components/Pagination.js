import React from "react";
import { Link, useLocation } from "react-router-dom";

const Pagination = ({ currentPage, totalPages, searchQuery }) => {
  const location = useLocation();
  const generatePageUrl = (page) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", page);
    return `${location.pathname}?${searchParams.toString()}`;
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 10;

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  const pageNumbers = getPageNumbers();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav className="pagination" aria-label="Navegación de páginas">
      <div className="pagination__container">
        <div className="pagination__info">
          Página {currentPage} de {totalPages}
        </div>

        <ul className="pagination__list">
          {!isFirstPage && (
            <li className="pagination__item">
              <Link
                to={generatePageUrl(currentPage - 1)}
                className="pagination__link pagination__link--prev"
                aria-label="Página anterior"
              >
                Anterior
              </Link>
            </li>
          )}

          {pageNumbers[0] > 1 && (
            <>
              <li className="pagination__item">
                <Link to={generatePageUrl(1)} className="pagination__link">
                  1
                </Link>
              </li>
              {pageNumbers[0] > 2 && (
                <li className="pagination__item">
                  <span className="pagination__ellipsis">...</span>
                </li>
              )}
            </>
          )}

          {pageNumbers.map((page) => (
            <li key={page} className="pagination__item">
              {page === currentPage ? (
                <span className="pagination__link pagination__link--current">
                  {page}
                </span>
              ) : (
                <Link to={generatePageUrl(page)} className="pagination__link">
                  {page}
                </Link>
              )}
            </li>
          ))}

          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <li className="pagination__item">
                  <span className="pagination__ellipsis">...</span>
                </li>
              )}
              <li className="pagination__item">
                <Link
                  to={generatePageUrl(totalPages)}
                  className="pagination__link"
                >
                  {totalPages}
                </Link>
              </li>
            </>
          )}

          {!isLastPage && (
            <li className="pagination__item">
              <Link
                to={generatePageUrl(currentPage + 1)}
                className="pagination__link pagination__link--next"
                aria-label="Página siguiente"
              >
                Siguiente
              </Link>
            </li>
          )}
        </ul>

        <div className="pagination__quick-nav">
          <span>Ir a: </span>
          <Link
            to={generatePageUrl(1)}
            className={`pagination__quick-link ${
              isFirstPage ? "pagination__quick-link--disabled" : ""
            }`}
          >
            Primera
          </Link>
          <span className="pagination__separator">|</span>
          <Link
            to={generatePageUrl(totalPages)}
            className={`pagination__quick-link ${
              isLastPage ? "pagination__quick-link--disabled" : ""
            }`}
          >
            Última
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Pagination;

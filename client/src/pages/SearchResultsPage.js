import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../components/Pagination";
import ProductList from "../components/ProductList";
import { getApiUrl } from "../utils/api";

const SearchResultsPage = () => {
  const location = useLocation();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search") || "";
    const page = searchParams.get("page") || 1;

    setLoading(true);
    setError(null);

    const apiUrl = query.trim()
      ? getApiUrl(`/api/items?q=${query}&page=${page}`)
      : getApiUrl(`/api/items?page=${page}`);

    axios
      .get(apiUrl)
      .then((response) => {
        setResults(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [location.search]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!results || !results.items || results.items.length === 0) {
    return (
      <div className="container">
        <div className="container-search mt-30">
          <div className="no-results">
            <h2>No se encontraron resultados</h2>
            <p>Intenta con otros términos de búsqueda.</p>
          </div>
        </div>
      </div>
    );
  }

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");

  const pagination = results.pagination || {};
  const totalItems = pagination.total_items || results.items.length || 0;
  const currentPage = pagination.current_page || 1;
  const totalPages = pagination.total_pages || 1;

  return (
    <div className="container">
      <div className="container-search mt-30">
        <div className="search-results__header">
          <h1 className="search-results__title">
            {searchQuery
              ? `Resultados de búsqueda para "${searchQuery}"`
              : "Todos los productos"}
          </h1>
          <p className="search-results__count">
            {totalItems} resultado
            {totalItems !== 1 ? "s" : ""} encontrado
            {totalItems !== 1 ? "s" : ""}
          </p>
        </div>

        <ProductList items={results.items} />

        {pagination && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            searchQuery={searchQuery}
          />
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;

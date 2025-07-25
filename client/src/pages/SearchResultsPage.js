import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/ProductList";

const SearchResultsPage = () => {
  const location = useLocation();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("search");

    if (query) {
      axios
        .get(`http://localhost:3001/api/items?q=${query}`)
        .then((response) => {
          setResults(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [location.search]);

  console.log("SearchResultsPage", results);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="search-results">
      <Breadcrumb categories={results.categories} />
      <ProductList items={results.items} />
    </div>
  );
}

export default SearchResultsPage;

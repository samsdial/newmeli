import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchBox from "../components/SearchBox";

const HomePage = () => {
  const navigate = useNavigate();
  console.log("navigate", navigate);
  const [searchQuery, setSearchQuery] = useState("");

  console.log("searchQuery:.", searchQuery);

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("visited");
    if (!alreadyVisited) {
      alert("¡Bienvenido a Mercado Libre!");
      localStorage.setItem("visited", "true");
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/items?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="home-page">
      <div className="home-page__header">
        <h1>Mercado Libre</h1>
        <p>
          Encuentra los mejores productos en Mercado Libre.
        </p>
      </div>
      <SearchBox
        value={searchQuery}
        onChange={handleInputChange}
        onSubmit={handleSearch}
      />
    </div>
  );
};

export default HomePage;
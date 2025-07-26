import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchResultsPage from "./pages/SearchResultsPage";

const AppContent = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="app">
      <Header
        searchValue={searchQuery}
        onSearchChange={handleInputChange}
        onSearchSubmit={handleSearch}
      />
      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items/:id" element={<ProductDetailPage />} />
          <Route path="/items" element={<SearchResultsPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

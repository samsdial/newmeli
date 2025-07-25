import React from "react";


function SearchBox({ value, onChange, onSubmit }) {
  return (
    <form className="search-box" onSubmit={onSubmit}>
      <input
        type="text"
        className="search-box__input"
        placeholder="Buscar productos..."
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="search-box__button">
        Buscar
      </button>
    </form>
  );
}

export default SearchBox;

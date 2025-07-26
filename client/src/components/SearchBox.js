import React from "react";
import IconSearch from "../assets/images/icon_search.svg"

function SearchBox({ value, onChange, onSubmit }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <div className="search-form-box">
        <input
          type="text"
          className="search-form-box__input"
          placeholder="Buscar productos, marcas y más..."
          value={value}
          onChange={onChange}
        />
        <button type="submit" className="search-form-box__button">
          <img src={IconSearch} alt="Icon Search" />
        </button>
      </div>
    </form>
  );
}

export default SearchBox;

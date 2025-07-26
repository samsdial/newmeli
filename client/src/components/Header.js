import React from "react";
import LogoUrl from "../assets/images/logo_meli.png";
import SearchBox from "./SearchBox";
import Nav from "./Nav";

const Header = ({ searchValue, onSearchChange, onSearchSubmit }) => { 
  //
  return (
    <header className="header">
      <div className="header__container">
        {/* logo */}
        <div className="header__logo">
          <a href="/">
            <img src={LogoUrl} alt="Mercado Libre" />
          </a>
        </div>
        {/* search box */}
        <div className="header__search">
          <SearchBox
            value={searchValue}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}
          />
        </div>
      </div>
      <div className="header__container">
        <Nav />
      </div>
    </header>
  );
}

export default Header;

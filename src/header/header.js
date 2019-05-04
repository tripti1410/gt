import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="main-header">
      <a href="#" className="main-header__title"><h1 className="main-header__logo"></h1></a>
      <div className="main-header__links">
        <a href="#" className="main-header__link">Reset</a>
        <a href="#" className="main-header__link">GeekTrustHome</a>
      </div>
    </header> 
  )
}

export default Header;
import React from "react";
import "../styles/header.css";
import SearchBar from "./SearchBar";
import SearchFooter from "./SearchFooter";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="content">
          <div className="heading">
            <h1>Find Great Deals Customized</h1>
          </div>
          <div className="space-div">
            <h1>For Your Need</h1>
          </div>
          <SearchBar />
          <SearchFooter />
        </div>
      </div>
    </>
  );
};

export default Header;

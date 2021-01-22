import React from "react";
import { Link } from "react-router-dom";
import {} from "../styles/searchFooter.css";

const SearchFooter = () => {
  const onChangeValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="search-footer-container">
      <div className="radio-container" onChange={onChangeValue}>
        <input type="radio" defaultChecked value="Product" name="gender" />{" "}
        Product
        <input type="radio" value="Service" name="gender" /> Service
        <input type="radio" value="Jobs" name="gender" /> Jobs
      </div>
      <div className="advanced-search">
        <Link className="advanced-search-link" to="/advanced-search">
          Advanced Search
        </Link>
      </div>
    </div>
  );
};

export default SearchFooter;

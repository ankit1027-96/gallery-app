import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./css/footer.css";

const Footer = ({ setSearch }) => {
  const [value, setValue] = useState("");
  const space = value.replace(/\s+/g, "+");
  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  const resetSearch = () => {
    setValue("");
  };

  const callSearch = (e) => {
    e.preventDefault();
    setSearch(space);
    resetSearch();
  };

  return (
    <footer className="footerContainer">
      <div className="footer">
        <div className="footerText">
          <p className="copyright">© 2021 MINIMAL. ALL RIGHT RESERVED</p>
        </div>
        <div className="loadMoreButton">
          <button className="load-more">LOAD MORE...</button>
        </div>
        <div className="form">
          <form className="footerSearch">
            <input
              className="search"
              type="text"
              placeholder="SEARCH NOW"
              onChange={handleSearch}
              value={value}
            />
            <button type="submit" className="searchButton" onClick={callSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

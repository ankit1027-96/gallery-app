import {
  faDribbble,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./css/nav.css";
import { NavDropdown } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Nav = () => {
  return (
    <nav className="navbar header navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="title navbar-brand col-3" href="#">
          MINIMAL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="d-flex navList collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="col navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PAGES
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DROPDOWN
              </a>
              <ul className=" dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <ul className="d-flex col social justify-content-center align-items-center icons" aria-labelledby="navbarDropdown">
              <li>
                <a className="" href="#">
                  <FontAwesomeIcon icon={faFacebookF} className="me-4" />
                </a>
              </li>
              <li>
                <a className="" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>

              <li>
                <a className="" href="#">
                  <FontAwesomeIcon icon={faDribbble} className="ms-4" />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

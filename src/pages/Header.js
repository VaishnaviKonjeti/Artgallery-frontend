// Header.js
import React from "react";
import { Link } from "react-router-dom";
import { FaPalette, FaImage, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
        <Link className="navbar-brand" to="/">
          <span style={{ fontFamily: "cursive", fontSize: "24px" }}>
            Art Gallery
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/add-image">
                <button className="btn btn-outline-light my-3">
                  <FaImage className="mr-2" />
                  Add Image
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-category">
                <button className="btn btn-outline-light mx-3 my-3">
                  <FaPalette className="mr-2" />
                  Add Category
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <button className="btn btn-outline-light mx-3 my-3">
                  <FaSignInAlt className="mr-2" />
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

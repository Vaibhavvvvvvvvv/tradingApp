import React from 'react';
import { Link } from 'react-router-dom';
import './products/App.css'

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#FFF" }}
      >
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img
              src="media/images/Zerodha-Logo-1.png"
              style={{ width: "20%" }}
              alt="Logo"
            />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
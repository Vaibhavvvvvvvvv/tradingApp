import React from 'react';
import { Link } from 'react-router-dom';
import './products/App.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#FFF" }}>
        <div className="container-fluid d-flex align-items-center" style={{ height: "40px", padding: "0.5rem 1rem" }}>
          <Link className="navbar-brand" to="/" style={{ marginRight: "auto" }}>
            <img
              src="media/images/Zerodha-Logo-1.png"
              style={{ width: "150px", height: "auto" }}
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
            <ul className="navbar-nav ms-auto mb-lg-0">
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

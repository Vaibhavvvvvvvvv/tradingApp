import React from "react";
import './App.css'; // Make sure to import the CSS file

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-6 col-md-4 p-3 mt-5 d-flex flex-column align-items-center">
          <a href="https://www.smallcase.com" target="_blank" rel="noopener noreferrer">
            <img src="media/images/smallcase.jpg" className="img-fluid responsive-img " alt="Smallcase" />
          </a>
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 d-flex flex-column align-items-center">
          <a href="https://www.streak.tech" target="_blank" rel="noopener noreferrer">
            <img src="media/images/streak-logo.jpg" className="img-fluid responsive-img" alt="Streak" />
          </a>
          <p className="text-small text-muted mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 d-flex flex-column align-items-center">
          <a href="https://www.sensibull.com" target="_blank" rel="noopener noreferrer">
            <img src="media/images/sensibull.jpg" className="img-fluid responsive-img" alt="Sensibull" />
          </a>
          <p className="text-small text-muted mt-2">Options trading platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 d-flex flex-column align-items-center">
          <a href="https://www.zerodhafundhouse.com" target="_blank" rel="noopener noreferrer">
            <img src="media/images/zerodhafundhouse.jpg" className="img-fluid responsive-img" alt="Zerodha Fundhouse" />
          </a>
          <p className="text-small text-muted mt-2">Asset management</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 d-flex flex-column align-items-center">
          <a href="https://www.tijori.com" target="_blank" rel="noopener noreferrer">
            <img src="media/images/tijori.jpg" className="img-fluid responsive-img" alt="Tijori" />
          </a>
          <p className="text-small text-muted mt-2">Fundamental research platform</p>
        </div>
        <div className="col-6 col-md-4 p-3 mt-5 d-flex flex-column align-items-center">
          <a href="https://www.ditto.com" target="_blank" rel="noopener noreferrer">
            <img src="media/images/ditto-logo.jpg" className="img-fluid responsive-img" alt="Ditto" />
          </a>
          <p className="text-small text-muted mt-2">Insurance</p>
        </div>
        <div className="col-12 mt-5 d-flex justify-content-center">
          <button
            className="p-2 btn btn-primary fs-5"
            style={{ maxWidth: "300px" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 p-4">
          <img src="media/images/ZERODHA-10.png" className="img-fluid" alt="Zerodha"/>
        </div>
        <div className="col-md-6 p-4 mt-md-0 mt-5">
          <h1 className="display-4">Largest stock broker in India</h1>
          <p className="lead mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <ul className="list-unstyled">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="list-unstyled">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/presslogo.jpg" className="img-fluid mt-4" alt="Press Logo"/>
        </div>
      </div>
    </div>
  );
}

export default Awards;

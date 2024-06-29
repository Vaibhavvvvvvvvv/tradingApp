import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'bootstrap/dist/css/bootstrap.min.css';

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
          <img src="https://zerodha.com/varsity/wp-content/themes/varsity2//images/landing.png" className="img-fluid" alt="Varsity"/>
        </div>
        <div className="col-12 col-md-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="d-block mb-3" style={{ textDecoration: "none" }}>
            Varsity <ArrowForwardIosIcon/>
          </a>
          <p className="mt-4">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="d-block" style={{ textDecoration: "none" }}>
            TradingQ&A <ArrowForwardIosIcon/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OpenAccount = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mt-5">Open a Zerodha account</h1>
          <p>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
          <button
            className="btn btn-primary fs-5 mb-5 mx-auto"
            style={{ maxWidth: "200px" }}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;

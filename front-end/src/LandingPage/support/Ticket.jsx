import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TimelineIcon from "@mui/icons-material/Timeline";
import MoneyIcon from "@mui/icons-material/Money";
import AppsIcon from "@mui/icons-material/Apps";

function Ticket() {
  return (
    <div className="container mt-5">
      <h1 className="fs-3 text-center mb-4">To create a ticket, select a relevant topic</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 text-center">
        <div className="col">
          <div className="p-4 rounded shadow-sm bg-light">
            <h4 style={{ textAlign: "left" }}>
              <AccountCircleIcon sx={{ fontSize: 30 }} /> Account Opening
            </h4>
            <div className="mt-3">
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Getting started
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Online
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Offline
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Charges
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Company, Partnership and HUF
              </a>
              <a href="/" className="d-block text-decoration-none" style={{ textAlign: "left" }}>
                Non Resident Indian (NRI)
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="p-4 rounded shadow-sm bg-light">
            <h4 style={{ textAlign: "left" }}>
              <AppsIcon sx={{ fontSize: 30 }} /> Your Zerodha Account
            </h4>
            <div className="mt-3">
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Login credentials
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Your Profile
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Account modification and segment addition
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                CMR & DP ID
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Nomination
              </a>
              <a href="/" className="d-block text-decoration-none" style={{ textAlign: "left" }}>
                Transfer and conversion of shares
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="p-4 rounded shadow-sm bg-light">
            <h4 style={{ textAlign: "left" }}>
              <TrendingUpIcon sx={{ fontSize: 30 }} /> Trading and Markets
            </h4>
            <div className="mt-3">
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Trading FAQs
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Kite
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Margins
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Product and order types
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Corporate actions
              </a>
              <a href="/" className="d-block text-decoration-none" style={{ textAlign: "left" }}>
                Kite features
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="p-4 rounded shadow-sm bg-light">
            <h4 style={{ textAlign: "left" }}>
              <MoneyIcon sx={{ fontSize: 30 }} /> Funds
            </h4>
            <div className="mt-3">
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Fund withdrawal
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Adding funds
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Adding bank accounts
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                eMandates
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="p-4 rounded shadow-sm bg-light">
            <h4 style={{ textAlign: "left" }}>
              <TimelineIcon sx={{ fontSize: 30 }} /> Console
            </h4>
            <div className="mt-3">
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                IPO
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Portfolio
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Funds statement
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Profile
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Reports
              </a>
              <a href="/" className="d-block text-decoration-none" style={{ textAlign: "left" }}>
                Referral program
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="p-4 rounded shadow-sm bg-light">
            <h4 style={{ textAlign: "left" }}>
              <MonetizationOnIcon sx={{ fontSize: 30 }} /> Coin
            </h4>
            <div className="mt-3">
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Understanding mutual funds and Coin
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Coin app
              </a>
              <a href="/" className="d-block text-decoration-none mb-2" style={{ textAlign: "left" }}>
                Coin web
              </a>
              <a href="/" className="d-block text-decoration-none" style={{ textAlign: "left" }}>
                Transactions and reports
              </a>
              <a href="/" className="d-block text-decoration-none" style={{ textAlign: "left" }}>
                National Pension Scheme (NPS)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ticket;

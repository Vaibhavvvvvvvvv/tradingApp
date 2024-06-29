import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'bootstrap/dist/css/bootstrap.min.css';

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-3 p-md-5">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>
          <h2 className="fs-4 mb-3">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4 mb-3">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4 mb-3">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4 mb-3">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img src="media/images/stats.png" className="img-fluid mb-4" alt="Stats"/>
          <div className="text-center">
            <a href="#" className="mx-3 d-block d-md-inline-block" style={{ textDecoration: "none" }}>
              Explore our products <ArrowForwardIosIcon/>
            </a>
            <a href="#" className="mx-3 d-block d-md-inline-block" style={{ textDecoration: "none" }}>
              Try Kite demo <ArrowForwardIosIcon/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;

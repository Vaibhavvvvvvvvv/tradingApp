import React from 'react';

const Hero = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='pt-5'>
          <h1>Pricing</h1>
          <h5>Free equity investments and flat ₹20 intraday and F&O trades</h5>
        </div>
        <div className='row border-top'>
          <div className='col-12 col-md-4 text-center'>
            <img src='https://zerodha.com/static/images/pricing-eq.svg' alt='Free equity delivery' className='img-fluid' />
            <h2>Free equity delivery</h2>
            <p>All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className='col-12 col-md-4 text-center'>
            <img src='https://zerodha.com/static/images/other-trades.svg' alt='Intraday and F&O trades' className='img-fluid' />
            <h2>Intraday and F&O trades</h2>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='col-12 col-md-4 text-center'>
            <img src='https://zerodha.com/static/images/pricing-eq.svg' alt='Free direct MF' className='img-fluid' />
            <h2>Free direct MF</h2>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;

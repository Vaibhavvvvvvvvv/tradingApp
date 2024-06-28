import React from 'react';

const Hero = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <h2 className='text-center'>
          We pioneered the discount broking model in India.
        </h2>
        <h2 className='text-center'>
          Now, we are breaking ground with our technology.
        </h2>
      </div>
      <hr />
      <div className="row pt-5">
        <div className="col-lg-6 col-md-12 mb-4">
          <ul className="list-unstyled">
            <li>
              <p className="pt-3 text-start">
                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
              </p>
            </li>
            <li>
              <p className="pt-3 text-start">
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
              </p>
            </li>
            <li>
              <p className="pt-3 text-start">
                Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
              </p>
            </li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <ul className="list-unstyled">
            <li>
              <p className="pt-3 text-start">
                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
              </p>
            </li>
            <li>
              <p className="pt-3 text-start">
                Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
              </p>
            </li>
            <li>
              <p className="pt-3 text-start">
                And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='container pt-5'>
        <h2 className='text-center'>People</h2>
        <div className='row pt-5'>
          <div className='col-lg-6 col-md-12 mb-4 text-center'>
            <img 
              src='https://zerodha.com/static/images/nithin-kamath.jpg' 
              className="img-fluid rounded-circle" 
              style={{ width: "45%", height: "auto" }} 
              alt="Nithin Kamath"
            />
            <h6>Nithin Kamath</h6>
            <p>Founder & CEO</p>  
          </div>
          <div className='col-lg-6 col-md-12 mb-4'>
            <p className="text-start">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
              <br /><br />
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
              <br /><br />
              Playing basketball is his zen.
              <br /><br />
              Connect on Homepage / TradingQnA / Twitter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

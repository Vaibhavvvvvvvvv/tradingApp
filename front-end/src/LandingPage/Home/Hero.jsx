import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <div className='col-12'>
          <img src='media/images/landing.png' alt='image' className='img-fluid mb-4'/>
        </div>
        <div className='col-12'>
          <h1 className='mt-4 display-4'>Times have changed</h1>
        </div>
        <div className='col-12'>
          <p className='lead'>Kite is a sleek investment and trading platform built for modern times and sensibilities. Ground breaking innovations presented with excellent usability, investing in the stock markets has never been this easy. Really.</p>
        </div>
        <div className='col-12'>
          <button className="btn btn-primary fs-5 mb-5 mx-auto"
            style={{ maxWidth: "200px" }}>
            Sign-up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero;

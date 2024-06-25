import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='https://signup.zerodha.com/img/landing.46a77378.png' alt='image' className='mb-5'/>
      <h1 className='mt-5'>Times have changed</h1>
      <p>Kite is a sleek investment and trading platform built for modern times and sensibilities. Ground breaking innovations presented with excellent usability, investing in the stock markets has never been this easy. Really.</p>
      <button className='p-3 btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto" }}>Sign-up</button>
      </div>
    </div>
  )
}

export default Hero

import React from 'react'
import Hero from './Hero'
import LeftImg from './LeftImg'
import RightImg from './RightImg'
import Universe from './Universe'
const Products = () => {
    return (
        <>
        <Hero />
        <LeftImg
          imageURL="media/images/kite.jpg"
          productName="Kite"
          productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <RightImg
          imageURL="media/images/console.jpg"
          productName="Console"
          productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          learnMore=""
        />
        <LeftImg
          imageURL="media/images/coin.jpg"
          productName="Coin"
          productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <RightImg
          imageURL="media\images\kiteconnect.png"
          productName="Kite Connect API"
          productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          learnMore=""
        />
        <LeftImg
          imageURL="media\images\versity-products.jpg"
          productName="Varsity mobile"
          productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          tryDemo=""
          learnMore=""
          googlePlay=""
          appStore=""
        />
        <h5 className="text-center mt-5 mb-5"><b>
  Want to know more about our technology stack? Check out the <a href='' target='blank'> Zerodha.tech </a> blog.
  </b></h5>

        <Universe />
        
      </>
    )
}

export default Products

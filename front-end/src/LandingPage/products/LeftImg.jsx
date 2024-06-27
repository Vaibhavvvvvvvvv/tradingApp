// import React from "react";

// function LeftImg({
//   imageURL,
//   productName,
//   productDesription,
//   tryDemo,
//   learnMore,
//   googlePlay,
//   appStore,
// }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6">
//           <img src={imageURL} />
//         </div>
//         <div className="col-6 p-5 mt-5">
//           <h1>{productName}</h1>
//           <p>{productDesription}</p>
//           <div>
//             <a href={tryDemo}>Try Demo</a>
//             <a href={learnMore} style={{ marginLeft: "50px" }}>
//               Learn More
//             </a>
//           </div>
//           <div className="mt-3">
//             <a href={googlePlay}>
//               <img src="media\images\google.jpg" style={{ marginLeft: "30px", width:"50%"}} />
//             </a>
//             <a href={appStore}>
//               <img
//                 src="media\images\Appstore.jpg"
//                 style={{ marginLeft: "30px", width:"60%"}}
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftImg;

import React from "react";

function LeftImg({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>
        <div className="col-md-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "20px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/google.jpg" className="img-fluid" style={{ maxWidth: "40%" }} alt="Google Play" />
            </a>
            <a href={appStore} style={{ marginLeft: "20px" }}>
              <img src="media\images\Appstore.jpg" className="img-fluid" style={{ maxWidth: "50%" }} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImg;

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
//         <div className="col-md-6">
//           <img src={imageURL} className="img-fluid" alt="Product" />
//         </div>
//         <div className="col-md-6 p-5 mt-5">
//           <h1>{productName}</h1>
//           <p>{productDesription}</p>
//           <div>
//             <a href={tryDemo}>Try Demo</a>
//             <a href={learnMore} style={{ marginLeft: "20px" }}>
//               Learn More
//             </a>
//           </div>
//           <div className="mt-3">
//             <a href={googlePlay}>
//               <img src="media/images/google.jpg" className="img-fluid" style={{ maxWidth: "40%" }} alt="Google Play" />
//             </a>
//             <a href={appStore} style={{ marginLeft: "20px" }}>
//               <img src="media\images\Appstore.jpg" className="img-fluid" style={{ maxWidth: "50%" }} alt="App Store" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LeftImg;




import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function LeftImg({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img src={imageURL} className="img-fluid" alt="Product" />
        </div>
        <div className="col-12 col-md-6 p-3 p-md-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="btn btn-primary me-2">Try Demo</a>
            <a href={learnMore} className="btn btn-secondary">Learn More</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/google.jpg" className="img-fluid" style={{ maxWidth: "150px" }} alt="Google Play" />
            </a>
            <a href={appStore} className="ms-2">
              <img src="media/images/Appstore.jpg" className="img-fluid" style={{ maxWidth: "150px" }} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImg;

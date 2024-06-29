// import React from "react";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// function RightImg({ imageURL, productName, productDesription, learnMore }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6 p-5 mt-5">
//           <h1>{productName}</h1>
//           <p>{productDesription}</p>
//           <div>
//             <a href={learnMore}>Learn More <ArrowForwardIosIcon /></a>
//           </div>
//         </div>
//         <div className="col-6">
//           <img src={imageURL} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightImg;




import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'bootstrap/dist/css/bootstrap.min.css';

function RightImg({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 order-md-1 order-2 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <ArrowForwardIosIcon />
            </a>
          </div>
        </div>
        <div className="col-md-6 order-md-2 order-1">
          <img src={imageURL} className="img-fluid" alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightImg;

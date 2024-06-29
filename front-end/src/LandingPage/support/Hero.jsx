import React from "react";

function Hero() {
  return (
    <section
      className="container-fluid"
      id="supportHero"
      style={{
        backgroundColor: "#1E90FF",
        color: "white", 
        height: "100%",
        width: "100%", 
        backgroundSize: "cover", 
      }}
    >
      <div className="container">
        <div className="p-3">
          <h4 className="text-start">Support Portal</h4>
        </div>
        <div className="row p-3">
          <div className="col-lg-8 p-3">
            <h1 className="fs-3 text-start">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              type="text"
              placeholder="Eg. how do I activate F&O, why is my order getting rejected ..."
              className="form-control"
              style={{ padding: "10px", margin: "10px 0", maxWidth: "100%" }}
            />
            <div className="row">
              <div className="col-sm-4">
                <a href="#" className="text-decoration-none d-block text-white">Track account opening</a>
              </div>
              <div className="col-sm-4">
                <a href="#" className="text-decoration-none d-block text-white">Track segment activation</a>
              </div>
              <div className="col-sm-4">
                <a href="#" className="text-decoration-none d-block text-white">Intraday margins</a>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col">
                <a href="#" className="text-decoration-none d-block text-white">Kite user manual</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-3">
            <h1 className="fs-3 text-start">Featured</h1>
            <ol className="text-start">
              <li>
                <a href="#" className="text-decoration-none text-white">Latest Intraday leverages and Square-off timings</a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-white">Surveillance measure on scrips - June 2024</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";

export const Director = () => {

  return (
    <div id="director">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Director</h2>
              <h3 className="founder-name" style={{ marginTop: "30px" }}>Ankur Mam</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "right", marginRight: "30px" }} className="call-now-btn"> <button type="button" class="btn btn-primary btn-lg margin-1rem" style={{ width: "200px" }}>Call Now</button></div>
    </div>
  );
};

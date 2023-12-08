import React from "react";

export const Founder = (props) => {
  console.log('props', props);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="row" id="director">
        <div className="col-xs-12 col-md-6">
          <div className="row">
            <div className="col-xs-12 col-md-3">
              {" "}
              <img src="img/IMG-20231005-WA0005.jpg" className="img-responsive" alt="" style={{ width: "190px" }} />{" "}
            </div>
            <div className="col-xs-12 col-md-9">
              <div className="about-text">
                <h2>Director</h2>
                <h3 className="founder-name" style={{ marginTop: "30px" }}>Amit Kumar Sharma </h3>
                <p>
                  With a B. Tech degree from the National Institute of Technology (NIT), I bring a wealth of academic experience to the table. Having served as the Head of Vision Kota in Kota and the HOD of Mathematics at FIITJEE, I've honed my expertise over 16 years. My role as the All India Head in the Satellite Program, specializing in Live Classes for JEE Advanced, reflects my commitment to fostering educational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="row">
            <div className="col-xs-12 col-md-3">
              {" "}
              <img src="img/IMG-20231107-WA0013.jpg" className="img-responsive" alt="" style={{ width: "190px" }} />{" "}
            </div>
            <div className="col-xs-12 col-md-9">
              <div className="about-text">
                <h2>Director</h2>
                <h3 className="founder-name" style={{ marginTop: "30px" }}>Ankur Mam</h3>
                <p>
                  Armed with an M.Sc., M.Phil, and D. Pharma, I bring 15 years of experience to the realm of JEE Advanced and NEET examinations. My extensive expertise was cultivated through hands-on involvement at FIITJEE (SAL). This diverse experience uniquely positions me to contribute to the academic landscape, ensuring a holistic approach to education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

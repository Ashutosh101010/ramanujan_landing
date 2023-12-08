import React from "react";

export const Courses = (props) => {
  return (
    <div id="courses" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Courses</h2>
          <p style={{ color: "#fff", fontWeight: "bold" }}>
            Unlock your potential with our diverse range of courses tailored for academic excellence and future success.
          </p>
        </div>
        <div className="row">

          <div className="col-md-3">
            {" "}
            {/* <i className="fa fa-wordpress"></i> */}
            <img src="img/118-1188674_ielts-students-png-indian-coaching-students.png" style={{ width: "250px", height: "250px", padding: "20px", borderRadius: "30px" }} />
            <div className="service-desc">
              <h3 style={{ boxShadow: "0 4px 7px 0 lightblue, 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "8px" }}>IIT-JEE</h3>
              {/* <p>{d.text}</p> */}
            </div>
          </div>
          <div className="col-md-3">
            {" "}
            {/* <i className="fa fa-cart-arrow-down"></i> */}
            <img src="img/1658462197phpVg5eNe.jpeg" style={{ width: "250px", height: "250px", padding: "20px", borderRadius: "30px" }} />
            <div className="service-desc">
              <h3 style={{ boxShadow: "0 4px 7px 0 lightblue, 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "8px" }}>NEET</h3>
              {/* <p>{d.text}</p> */}
            </div>
          </div>
          <div className="col-md-3">
            {" "}
            {/* <i className="fa fa-cloud-download"></i> */}
            <img src="img/Study-Medicine-Abroad-410x260.jpg" style={{ width: "250px", height: "250px", padding: "20px", borderRadius: "30px" }} />
            <div className="service-desc">
              <h3 style={{ boxShadow: "0 4px 7px 0 lightblue, 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "8px" }}>NDA</h3>
              {/* <p>{d.text}</p> */}
            </div>
          </div>
          <div className="col-md-3">
            {" "}
            {/* <i className="fa fa-language"></i> */}
            <img src="img/How to prepare for Class X CBSE Boards 2.png" style={{ width: "250px", height: "250px", padding: "20px", borderRadius: "30px" }} />
            <div className="service-desc">
              <h3 style={{ boxShadow: "0 4px 7px 0 lightblue, 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: "8px" }}>Olympiads</h3>
              {/* <p>{d.text}</p> */}
            </div>
          </div>
          {/* <div><img src="img/about.jpg" className="img-responsive" alt="" style={{ width: "250px", height: "200px" }} /></div> */}
        </div>
      </div>
    </div>
  );
};

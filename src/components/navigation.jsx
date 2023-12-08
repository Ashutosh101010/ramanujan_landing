import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp';


export const Navigation = () => {
  const handleWhatsClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=+9977777764&text=Hey.++Thanks%21&type=phone_number&app_absent=0");
  }

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="img/Ramanujan PNG Logo.png" className="img-responsive" alt="" style={{ width: "150px" }} />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#menu" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#director" className="page-scroll">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#courses" className="page-scroll">
                Courses
              </a>
            </li>
            <li>
              <a href="#videos" className="page-scroll">
                <i className="fa fa-youtube" style={{ fontSize: "26px" }}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <FloatingWhatsApp
        onClick={handleWhatsClick}
        allowClickAway={false} allowEsc={false} chatOn={false} />
    </nav>
  );
};

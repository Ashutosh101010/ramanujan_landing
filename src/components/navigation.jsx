import { Button } from "@mui/material";
import React from "react";


export const Navigation = () => {

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
          <a className="page-scroll" href="#page-top">
            <img src="img/Image [header-logo] (1).png" className="img-responsive logo-image" alt="" style={{ width: "200px" }} />
          </a>{" "}
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right top-menubar">
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
              <a href="#videos" className="page-scroll">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#whyfast" className="page-scroll">
                Why FAST
              </a>
            </li>
            <li>
              <a href="#testseries" className="page-scroll">
               Test Series
              </a>
            </li>
            <li>
            <Button sx={{mt:1.5, background: "#DD2A3D", color: "#fff", fontWeight: "bold", padding: "11px 25px", fontSize: "12px", margin: "9px 20px 0"}}>Download App now</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

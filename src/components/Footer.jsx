import { Button, Grid } from "@mui/material";
import React from "react";

export const Footer = () => {


  return (
    <div>
      <div id="contact">

        <Grid container sx={{ alignItems: "center", justifyContent: "center" }} className="footer-first-section">
          <Grid item xs={12} sm={5} md={5} lg={5}>

            <img src="img/footelogo.png" alt="" style={{ margin: "5px", height: "60px" }}  />
            <img src="img/Join FAST, Clear Exam Fast.png" alt="" style={{marginTop: "10px"}} className="footer-second-img"/>
            

            <div className="section-title" style={{ margin: "8px 25px 8px 8px" }}>
              <p>
                Need more details? Our expert academic counsellors will be happy to patiently explain everything that you want to know.
              </p>
            </div>
            <div>
              <Button sx={{ background: "#DA251C", color: "#fff", fontWeight: "bold", padding: "15px", margin: "5px", fontSize: "10px" }}>
                Speak to an expert
              </Button>
            </div>
          </Grid>
          <Grid item xs={8} sm={3} md={3} lg={3}>
            <div className="contact-item">
              <h3 style={{ color: "#FBAE09" }}>Follow Us On</h3>

              <div className="row">
                <div className="social" style={{ marginLeft: "5px" }}>
                  <ul>
                    <li>
                      <a href={"https://www.facebook.com/Ramanujan777?mibextid=2JQ9oc"} target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={"https://instagram.com/ramanujanjeeacademy?igshid=OGQ5ZDc2ODk2ZA=="} target="_blank" rel="noreferrer">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={"https://youtube.com/@kotakipathshala6521?si=gSL1PNPz_uL5J3ZN"} target="_blank" rel="noreferrer">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href={"https://api.whatsapp.com/send/?phone=9977777764&text=Hi+Team%2C+is+there+any+related+service+available+%3F&type=phone_number&app_absent=0"} target="_blank" rel="noreferrer">
                        <i className="fa fa-whatsapp"></i>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
              <h3 style={{ color: "#FBAE09" }}>Contact Us</h3>
              <p style={{ display: "flex", marginBottom: 0 }}>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                <a href={`tel:${9977777764}`} target="_blank" style={{ cursor: "pointer", color: "#fff" }} rel="noreferrer">+91 98765 43210</a>

              </p>
              <p style={{ display: "flex" }}>
                <span>
                  <i className="fa fa-envelope-o"></i>
                </span>{" "}
                xxx@xxxxxx.com
              </p>
              {/* <h4 style={{ color: "#fff" }}> Ramanujan Academy</h4>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                12-B, Ratlam Kothi, Geeta Bhawan Square Indore, Pin: 452001
              </p> */}
            </div>
          </Grid>
          <Grid item xs={4} sm={2} md={2} lg={2}>
            <img src="img/Image [inline-block].png" alt="" style={{ marginTop: '-80px' }} className="footer-img-right" />
          </Grid>
        </Grid>
        <Grid container style={{ background: 'black', textAlign: 'center', padding: "10px" }}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <p style={{margin: 0}}>@ 2024 Fast Education Private Limited, All rights reserved.</p>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <p style={{margin: 0}}>Privasy Policy | Terms and Condition  |  Cancellation and Refund Policy</p>
          </Grid>
        </Grid>
        {/* <div className="row" style={{ background: 'black', padding: "12px", textAlign: 'center' }}>
          <div className="col-md-6">
           
          </div>
          <div className="col-md-6">
          
          </div>
        </div> */}
      </div>

      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div> */}
    </div>
  );
};

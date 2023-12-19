import React from "react";

export const Contact = () => {


  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Join Ramanujan</h2>
                <p>
                  Central India Best Faculty will help you to Crack JEE and NEET exam, Ramanujan academy is the best IIT and NEET coaching in Indore.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <img src="img/IMG_20200421_125416_530.jpg" style={{ width: "100%", height: "300px", padding: "20px", borderRadius: "30px" }} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <h4 style={{ color: "#fff" }}> Ramanujan Academy</h4>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                12-B, Ratlam Kothi, Geeta Bhawan Square Indore, Pin: 452001
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                <a href={`tel:${9977777764}`} target="_blank" style={{ cursor: "pointer", color: "#fff" }} rel="noreferrer">9977777764</a> <br />
                <a href={`tel:${9826182863}`} target="_blank" style={{ cursor: "pointer", color: "#fff" }} rel="noreferrer">9826182863</a>

              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                ramanujanjeeacademy@gmail.com
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <a href={"https://www.google.com/maps?q=22.718183517456055,75.88317108154297&z=17&hl=en"} rel="noreferrer" target="_blank" style={{ cursor: "pointer", color: "#fff" }}> <i className="fa fa-map-marker"></i> Visit Ramanuj </a>
                </span>{" "}
              </p>
            </div>

          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
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
          </div>
        </div>
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

import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";


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
            <img src="img/Ramanujan PNG Logo.png" className="img-responsive logo-image" alt="" style={{ width: "160px" }} />
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
      <a className="whatsapp_widget_wrapper" href={`tel:${9977777764}`} target="_blank" style={{
        bottom: "90px",
        alignItems: "flex-end",
        right: "15px",
        cursor: "pointer"
      }} rel="noreferrer">
        <i className="fa fa-phone calling-floating-btn"></i>
      </a>
      <WhatsAppWidget
        phoneNo="9977777764"
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="260px"
        autoOpen={false}
        allowClickAway={true}
        autoOpenTimer={5000}
        messageBox={false}
        messageBoxTxt="Hi Team, is there any related service available ?"
        iconSize="55"
        iconColor="white"
        iconBgColor="green"
        headerIcon="https://www.pdapps.net.in/_next/static/media/android-chrome-192x192.9a39c2c7.png"
        headerIconColor="pink"
        headerTxtColor="black"
        headerBgColor="green"
        headerTitle="RAMANUJAN"
        headerCaption="Online"
        bodyBgColor="#bbb"
        chatPersonName="Support"
        footerBgColor="#999"
        placeholder="Type a message.."
        btnBgColor="yellow"
        btnTxt="Start Chat"
        btnTxtColor="black"
      />
    </nav>
  );
};

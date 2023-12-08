import { Image } from "./image";
import React from "react";

export const VissionMission = (props) => {
  return (
    <div id="vissionmission" className="text-center">
      <div className="row" style={{ padding: '15rem 0 15rem 0', background: "#93351A", color: "#fff" }}>
        <div className="col-xs-12 col-md-4 col-lg-5">
          <div className="section-title">
            <h2 style={{ color: "#fff" }}>Vission Mission</h2>
          </div>
        </div>
        <div className="col-xs-12 col-md-8 col-lg-7">
          <p style={{ fontSize: "20px" }} id="vissionmission-paragraph">
            The Vision and Mission of both the Directors are to do work on the theme of Super- 30.

            They are Committed to do Rulfill Hard work Consistently, and ful-fill dream to of Indore. make it Super-30

            They are most experienced in our field (subjects). They spent Most of the time as a role of Leader in Biggest Coachings. of SET-JEE/NEET in India (kota).
          </p>
        </div>
      </div>
      <div className="row" style={{ padding: '14rem 0 14rem 0' }}>
        <div className="col-xs-12 col-md-5">
          <div className="section-title">
            <h2>Strength of Ramanujan Academy</h2>
          </div>
        </div>
        <div className="col-xs-12 col-md-7">
          <ul style={{ listStyle: "inside", fontSize: "20px" }} id="vissionmission-paragraph">
            <li style={{ margin: '15px' }}>Personal Attention on in the Batch of 30 Students.</li>
            <li style={{ margin: '15px' }}>Director's Monitering on each and every Student.</li>
            <li style={{ margin: '15px' }}>Kota's Best Study Material.</li>
            <li style={{ margin: '15px' }}>Maximum Namber tests in Budome.</li>
            <li style={{ margin: '15px' }}>Rapid test (Time Management).</li>
            <li style={{ margin: '15px' }}>Time to Time updates to parents.</li>
            <li style={{ margin: '15px' }}>Highest Selection rates in indore (IIT-JEE & NEET).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

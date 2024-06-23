import { Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import { pink } from '@mui/material/colors';

export const FtsFeature = () => {
  return (
    <div id="vissionmission" className="text-center" >
      <div className="row" style={{ position: "absolute", right: 0, margin: 0 }}>
        <div className="col-xs-12 col-md-12 col-lg-12">
          <img src="img/ft3.png" className="img-responsive logo-image" alt="" style={{ width: "100%", padding: "0 120px" }} />
        </div>
      </div>
      <div className="row" style={{ textAlign: "left", padding: "20px", position: "relative", top: 0, left: 0, top: 0, bottom: 0 }}>
        <div className="col-xs-12 col-md-5 col-lg-5 fts-mobile-col" style={{ marginLeft: "6%" }}>
          <Typography variant="h3" fontWeight={"bold"} sx={{ mb: 1 }} className="mobile-fts-heading"><span style={{ color: "#DD2A3D" }}>FTS</span> Feature</Typography>
          <p style={{ marginBottom: "30px" }} className="mobile-fts-heading">"“Right direction helps to drive right and reach the destination”. FAST Test Series guide you
            to the right direction and Expert guidance for achieving your goal."</p>
          <Grid container sx={{mb:1, mt:1}}>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={11} sx={{display: "flex", alignItems: 'center', color: "black", fontWeight: "500"}}>
              FAST Test Series is a pan India test series for CA Exams.
            </Grid>
          </Grid>
          <Grid container sx={{mb:1, mt:1}}>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={11} sx={{display: "flex", alignItems: 'center', color: "black", fontWeight: "500"}}>
              FAST Test Series is the path from “Being in CA” to “Being a CA”.
            </Grid>
          </Grid>
          <Grid container sx={{mb:1, mt:1}}>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={11} sx={{display: "flex", alignItems: 'center', color: "black", fontWeight: "500"}}>
              FAST Test Series aims to provide maximum benefits to the students
              in terms of preparation and guidance.
            </Grid>
          </Grid>
          <Grid container sx={{mb:1, mt:1}}>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={11} sx={{display: "flex", alignItems: 'center', color: "black", fontWeight: "500"}}>
              FAST Test Series conducting chapter wise and full syllabus test series
              for CA final (new & old course) and CA Intermediate.
            </Grid>
          </Grid>
          <Grid container sx={{mb:1, mt:1}}>
            <Grid item xs={1} sm={1} md={1} lg={1}>
              <Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={11} sx={{display: "flex", alignItems: 'center', color: "black", fontWeight: "500"}}>
              We have most experienced team (Chartered Accountants only)
              for making & checking of test papers.
            </Grid>
          </Grid>
          {/* <ul style={{ color: "black", textAlign: "left", fontWeight: "500", }}>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}><Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} /> </li>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}><Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} /></li>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}><Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} />
              </li>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}><Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} /></li>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}><Checkbox defaultChecked sx={{ color: pink[800], '&.Mui-checked': { color: pink[600], }, }} /></li>
          </ul>
          <ul style={{ color: "black", textAlign: "left", fontWeight: "500", }}>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}>FAST Test Series is a pan India test series for CA Exams.</li>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}>FAST Test Series is the path from “Being in CA” to “Being a CA”.</li>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}>FAST Test Series aims to provide maximum benefits to the students
              in terms of preparation and guidance.</li>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}>FAST Test Series conducting chapter wise and full syllabus test series
              for CA final (new & old course) and CA Intermediate.</li>
            <li style={{ marginTop: "5px", marginBottom: "5px" }}>We have most experienced team (Chartered Accountants only)
              for making & checking of test papers.</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

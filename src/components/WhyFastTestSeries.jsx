import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import backgroundImg from "../components/image/ft2.png";
import backgroundImg2 from "../components/image/Rectangle 2396.png";


export const WhyFastTestSeries = () => {

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="whyfast" className="text-center" sx={{ mt: 2, mb:10 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div style={{ padding: "0 120px", textAlign: "center" }}>
            <h2 className="whyfast-text" style={{ textTransform: "initial",
              display: "flex", alignItems: "center", textAlign: "left", fontWeight: "bold", marginBottom: "40px"
            }}>Why &nbsp; <img src="img/channels4_profile (1) 1.png" className="img-responsive logo-image" style={{marginTop: "5px"}} alt="" /> &nbsp; Test Series.</h2>
          </div>
        </Grid>
      </Grid>
      <Box className="background-image-why">
      <img src={backgroundImg2} className="" alt="" />
      </Box>
      <Grid className="background-image-why" container sx={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundPosition: "center top",
        backgroundRepeat: 'no-repeat',
       paddingBottom: '20px'
      }}>
        <Grid item xs={12} sm={7} md={7} lg={7}>
          {/* <img src="img/ft2.png" className="img-responsive logo-image why-fast-mobile" alt="" style={{ width: "100%" }} /> */}
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <div className="mobile-accordian">
            <Accordion sx={{textAlign: "left",
              marginBottom: "20px", padding: "10px", boxShadow: "none", borderRadius: "20px", borderTopLeftRadius: "20px !important", borderTopRightRadius: "20px !important", background: "#b9b9b92e", borderBottomRightRadius: "20px !important", borderBottomLeftRadius: "20px !important", '&:before': {
                display: 'none !important', // removes the default border
              },
            }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={expanded === 'panel1' ? <RemoveIcon sx={{ color: "black" }} fontSize="large" /> : <AddIcon sx={{ color: "black" }} fontSize="large" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h5" fontWeight={"bold"} sx={{textTransform: "initial"}}>Experienced Professional Team of makers & checkers.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "12px", textAlign: "left" }}>
                  Test papers are prepared and checked by Most Experienced team of Faculties / C.A.
                  who are experts in their respective subjects.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{textAlign: "left",
              marginBottom: "20px", padding: "10px", boxShadow: "none", borderRadius: "20px", borderTopLeftRadius: "20px !important", borderTopRightRadius: "20px !important", background: "#b9b9b92e", borderBottomRightRadius: "20px !important", borderBottomLeftRadius: "20px !important", '&:before': {
                display: 'none !important', // removes the default border
              },
            }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={expanded === 'panel2' ? <RemoveIcon sx={{ color: "black" }} fontSize="large" /> : <AddIcon sx={{ color: "black" }} fontSize="large" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h5" fontWeight={"bold"} sx={{textTransform: "initial"}}>Detailed Analysis of Every Answer.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "12px", textAlign: "left" }}>
                  Paper are evaluated by subject wise Experts and Question wise reviews
                  & Expert's comments to improve performance are provided.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{textAlign: "left",
              marginBottom: "20px", padding: "10px", boxShadow: "none", borderRadius: "20px", borderTopLeftRadius: "20px !important", borderTopRightRadius: "20px !important", background: "#b9b9b92e", borderBottomRightRadius: "20px !important", borderBottomLeftRadius: "20px !important", '&:before': {
                display: 'none !important', // removes the default border
              },
            }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={expanded === 'panel3' ? <RemoveIcon sx={{ color: "black" }} fontSize="large" /> : <AddIcon sx={{ color: "black" }} fontSize="large" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h5" fontWeight={"bold"} sx={{textTransform: "initial"}}>Detailed and Full Test series.</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "12px", textAlign: "left" }}>
                  Chapter wise and full syllabus test series for CA Final, CA Intermediate
                  and CA Foundation.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{textAlign: "left",
              marginBottom: "20px", padding: "10px", boxShadow: "none", borderRadius: "20px", borderTopLeftRadius: "20px !important", borderTopRightRadius: "20px !important", background: "#b9b9b92e", borderBottomRightRadius: "20px !important", borderBottomLeftRadius: "20px !important", '&:before': {
                display: 'none !important', // removes the default border
              },
            }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={expanded === 'panel4' ? <RemoveIcon sx={{ color: "black" }} fontSize="large" /> : <AddIcon sx={{ color: "black" }} fontSize="large" />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h5" fontWeight={"bold"} sx={{textTransform: "initial"}}>Counselling Session by Experts..</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontSize: "12px", textAlign: "left" }}>
                  In this process you will get Expert's guidance about your concept clarity,
                  mistake and proper presentation
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>


    </Box>
  );
};

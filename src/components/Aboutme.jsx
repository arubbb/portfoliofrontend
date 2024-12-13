import React, { useState } from "react";

import Intro from "./Intro";
import { useLocation } from "react-router-dom";
import MainSkills from "./MainSkills";
import "./Aboutme.css";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Opacity } from "@mui/icons-material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));


export default function AboutMe() {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  const Location = useLocation();
  const [hoveredLetter, setHoveredLetter] = useState(null);

  return (
    <>
      {Location.pathname === "/about" ? <Intro /> : null}
      {Location.pathname === "/about" ? <MainSkills /> : null}
      
      <div className="container Exper" data-aos="fade-up">
        <h2>Experience</h2>
        <a href="https://www.hud.ac.uk/">
          <span className="Company">University of Huddersfield</span>
        </a>
        <div className="container-duration">
          <span className="Duration">September 2022 - Present</span>
        </div>
        <br />
        <span className="Role"><b>Academic Representative</b></span>
        <p>
          Serving as a vital bridge between students and faculty, facilitating communication
          and implementing innovative feedback collection methods to improve course delivery.
        </p>
        
        <div className="accordion-container">
          <Accordion
            className="acc"
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <strong>Key Responsibilities & Achievements</strong>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>Facilitated communication between students and faculty</li>
                <li>Implemented innovative feedback collection methods</li>
                <li>Translated student feedback into actionable recommendations</li>
                <li>Monitored effectiveness of implemented changes</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <span className="Company">PRINCE2 Private Tutor</span>
        <div className="container-duration">
          <span className="Duration">January 2024 - Present</span>
        </div>
        <br />
        <span className="Role"><b>Self-employed</b></span>
        <p>
          Delivering expert PRINCE2 methodology tutoring and creating tailored study plans
          for individual students.
        </p>
      </div>


      <div className="container Education" data-aos="fade-up">
        <h2>Education</h2>
        <a href="https://www.hud.ac.uk/">
          <span className="University">University of Huddersfield, UK</span>
        </a>
        <br />
        <span className="Degree">BSc Artificial Intelligence & Computer Science</span>
        <div className="container-duration">
          <span className="Duration">2022 - Present</span>
        </div>

        <div className="accordion-container">
          <Accordion
            className="acc"
            expanded={expanded === "education1"}
            onChange={handleChange("education1")}
          >
            <AccordionSummary aria-controls="education1-content" id="education1-header">
              <strong>Key Modules</strong>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                <li>Algorithms and Data Structures</li>
                <li>Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Data Science</li>
                <li>Advanced Web Programming</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      

      <div className="container Interests" data-aos="fade-up">
        <h2>Extra-Curricular Activities</h2>
        <ul>
          <li>Calligraphy</li>
          <li>Poetry</li>
          <li>Global Tongue Society Committee Member</li>
        </ul>
      </div>
    </>
  );
}
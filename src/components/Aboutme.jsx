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

// ... (keep all imports and styled components the same)

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
        <a href="https://www.lcdwestyorkshire.nhs.uk/">
          <span className="Company">Local Care Direct NHS</span>
        </a>
        <div className="container-duration">
          <span className="Duration">September 2023 - September 2024</span>
        </div>
        <br />
        <span className="Role"><b>IT Support Analyst</b></span>
        <p>
          Skilled IT Support professional with experience in healthcare technology support,
          system management, and user training. Proven track record in troubleshooting,
          device deployment, and maintaining security protocols in a healthcare setting.
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
                <li>Provided front-line technical support for healthcare professionals</li>
                <li>Managed ticketing system for user requests</li>
                <li>Set up laptops using Intune for efficient deployment</li>
                <li>Managed smart card renewals for security compliance</li>
                <li>Implemented cybersecurity measures</li>
                <li>Delivered staff training on IT best practices</li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>

        <a href="https://www.lcdwestyorkshire.nhs.uk/">
          <span className="Company">Local Care Direct</span>
        </a>
        <div className="container-duration">
          <span className="Duration">October 2024 - Present</span>
        </div>
        <br />
        <span className="Role"><b>Receptionist</b></span>
        <p>
          First point of contact for patients and visitors, managing appointments and
          administrative tasks while maintaining healthcare compliance standards.
        </p>

        <a href="https://www.coop.co.uk/">
          <span className="Company">Co-op</span>
        </a>
        <div className="container-duration">
          <span className="Duration">2021 - 2023</span>
        </div>
        <br />
        <span className="Role"><b>Customer Team Member</b></span>
        <p>
          Provided excellent customer service while handling various responsibilities
          including product assistance and dispute resolution.
        </p>
      </div>

      <div className="container Education" data-aos="fade-up">
        <h2>Education</h2>
        <a href="https://www.hud.ac.uk/">
          <span className="University">University of Huddersfield, UK</span>
        </a>
        <br />
        <a href="https://courses.hud.ac.uk/full-time/undergraduate/computer-science-bsc-hons">
          <span className="Degree">BSc (Hons) Computer Science</span>
        </a>
        <div className="container-duration">
          <span className="Duration">September 2021 - Present</span>
        </div>
        <p>Predicted: 1st Class Honours</p>

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
                <li>Artificial Intelligence</li>
                <li>Algorithms & Data Structures</li>
                <li>Relational Databases & Web Integration</li>
                <li>Software Design & Development</li>
                <li>Object-Oriented Systems Development</li>
              </ul>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="acc"
            expanded={expanded === "education2"}
            onChange={handleChange("education2")}
          >
            <AccordionSummary aria-controls="education2-content" id="education2-header">
              <strong>Previous Education</strong>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <h4>A-Levels - New College, Bradford (2019-2021)</h4>
                <ul>
                  <li>Computer Science - A</li>
                  <li>Psychology - A</li>
                  <li>BTEC Applied Science - Distinction*</li>
                </ul>
                
                <h4>GCSEs - Bradford Girls' Grammar School (2015-2019)</h4>
                <ul>
                  <li>8 GCSEs including:</li>
                  <li>Mathematics (6)</li>
                  <li>English Language (6)</li>
                  <li>Computer Science (6)</li>
                </ul>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="container Interests" data-aos="fade-up">
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>Tech Repair Enthusiast</li>
          <li>Football</li>
          <li>Group Project Collaborator</li>
        </ul>
      </div>
    </>
  );
}

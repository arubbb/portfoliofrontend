import { useEffect } from "react";
import main from "../images/mainLogo1.png"; 
import { Link, useLocation } from "react-router-dom";
import { Github, Linkedin, MailPlus, NotepadText, House, Globe } from 'lucide-react';
import "./Intro.css";

export default function Intro() {
  const location = useLocation();
  useEffect(() => {
    console.log("Component mounted or updated");
  }, [location]);
  
  return (
    <div className="container">
      <h1
        data-aos="zoom-in"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <b>
          Hi, I&apos;m Umama <span id="wave-emoji">👋</span>
        </b>
      </h1>

      <img
        data-aos="fade-in"
        data-aos-delay="700"
        data-aos-duration="1000"
        className="imageMain"
        src={main}
        alt="profile"
      />
      <div className="icons">
        <a
          className="smallerIcon"
          data-aos="zoom-out"
          data-aos-delay="700"
          data-aos-duration="1000"
          href="https://maps.app.goo.gl/P55UiixbBLCS4gBp6"
        >
          <div className="location-container">
            <Globe size={22} className="icons" strokeWidth={1}/>
            <span id="man">Bradford, UK</span>
          </div>
        </a>
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-duration="1000"
        className="Introduction"
      >
        <div className='intro'>
          <p>
            I&apos;m a final-year Computer Science student at the University of
            Huddersfield, UK. I&apos;m passionate about technology and problem-solving.
            Currently working as an IT Support Analyst at Local Care Direct NHS.
          </p>
          <div
            className="icons"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <a href="mailto:umama2003@live.com">
              <MailPlus className="icon" strokeWidth={0.75}/>
            </a>
            <a
              href="http://linkedin.com/in/umama-aamir-034221213"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin strokeWidth={0.75} className="icon"/>
            </a>
          </div>
        </div>
        {
          location.pathname ==='/' ?(
            <Link className='read' to="/about">
              <NotepadText className="icons"/>Discover My Journey
            </Link>
          ) : (
            <Link to="/"><House className="HomeIcon"/></Link>
          )
        }
      </div>
    </div>
  );
}
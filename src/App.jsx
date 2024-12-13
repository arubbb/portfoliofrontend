import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'
// import { createContext, useState, useEffect } from 'react';
import Intro from './components/Intro'
import Projects from './components/Projects';

import Skills from './components/skills';
import AOS from "aos";
// import axios from 'axios';
import "aos/dist/aos.css";
import ProjectDetail from './components/ProjectDetails';
import AboutMe from './components/Aboutme';
import Footer from './components/Footer';
import ScrollToTop from './components/scrollToTop';
import ThemeChanger from './components/theme';
import AboutMeTest from './components/Aboutme-Intro';
// import moveTop from './components/ArrowTop'
// import Chatbot from './components/chatbot';

// will be included in future updates
// import GitHub from './components/github';
// Initialize AOS
// AOS.init({

//   startEvent: 'DOMContentLoaded',
//   initClassName: 'aos-init',
//   animatedClassName: 'aos-animate',
// });

// const UserContext = createContext();


function HomePage() {
  return (
    <>
  
      <Intro />
      {/* <moveTop/> */}
      {/* <GitHub/> */}
      <Skills />
      <Projects limit={3} />
      <AboutMe/>

    </>
  )
}

 function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: true,  // Add this to ensure that AOS animations work with CSS classes
      debounceDelay: 50,    // Delay for debounce
      throttleDelay: 99,    // Delay for throttle
      offset: 120,          // Offset (in px) from the original trigger point
      delay: 0,             // Values from 0 to 3000, with step 50ms
      duration: 400,        // Values from 0 to 3000, with step 50ms
      easing: 'ease',       // Default easing for AOS animations
      once: true,           // Whether animation should happen only once - while scrolling down
      mirror: false,        // Whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
    });

    // AOS refresh on window load to fix issues with animations on mobile
    window.addEventListener('load', AOS.refresh);

    return () => {
      window.removeEventListener('load', AOS.refresh);
    };
  }, []);



  return (
    <Router>
      <Header />
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/auth/github/callback" element={<AuthCallbackPage />} /> */}
        <Route path="/projects" element={<Projects />} />
       <Route path = "/project/:id" element = {<ProjectDetail/>} />
       <Route path='/about' element={<AboutMe/>} />
      {/* <Route path='/test' element={<AboutMeTest/>}/> */}
      </Routes>
      <ThemeChanger/>
      {/* <Chatbot /> */}
      <Footer/>
      <ScrollToTop/>
    </Router>
  )
}

export default App
import React from 'react'
import Fade from "react-reveal/Fade";

import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';

//components
import MyNavbar from "./components/my-navbar/my-navbar.component"
import MyCarousal from "./components/my-carousal/my-carousal.component"
import TitleMessage from "./components/title-message/title-message.component"
import About from './pages/about/about.component'
import Skills from './pages/skills/skills.component'
import Experience from './pages/experience/experience.component'
import ProjectTimeLine from './components/projects-timeline/projects-timeline.component'
import Contact from './pages/contact-form/contact-form.component'
import FooterPanel from './components/footer/footer.component' 

import './App.css'

const App=()=> {
  return (
    <div className="App" style={{ position: "relative" }}>
    <MyNavbar/>
    <MyCarousal/>
     <TitleMessage/>
     {/*about me section */}
     <div> 
     <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
        <Container className="container-box rounded">
        <Fade duration={500}>
      <About/>
      </Fade>
      </Container>
      </Parallax>
      </div>

      {/* skills section*/}
      <div>
      <Container className="container-box rounded">
        <Fade duration={500}>
      <Skills/>
      </Fade>
      </Container>
      </div>
      {/* experience section*/}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>

      {/* Project Time-line */}
      <div>
      <Container className="container-box rounded">
        <Fade duration={500}>
      <ProjectTimeLine/>
      </Fade>
      </Container>
    </div>
    {/* Contact section*/}
    <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <FooterPanel/>
    </div>
  );
}

export default App;

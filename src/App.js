import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import { AboutMe } from './components/AboutMe/AboutMe';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { Education } from './components/Education/Education';
import { Skill } from './components/Skill/Skill';
import { Project } from './components/Project/Project';
import { Blog } from './components/Blog/Blog';
import { Certification } from './components/Certification/Certification';
import { ContactMe } from './components/ContactMe/ContactMe';
import { Footer } from './components/Footer/Footer';
import { links } from './components/NavigationBar/links';

function App() {
  return (
    <main>
      <NavigationBar />
      <Container>
        <CssBaseline />
        <section id={links[0].urlId}>
          <AboutMe />
        </section>
        <section id={links[1].urlId}>
          <WorkExperience />
        </section>
        <section id={links[2].urlId}>
          <Education />
        </section>
        <section id={links[3].urlId}>
          <Skill />
        </section>
        <section id={links[4].urlId}>
          <Project />
        </section>
        <section id={links[5].urlId}>
          <Blog />
        </section>
        <section id={links[6].urlId}>
          <Certification />
        </section>
        <section id={links[7].urlId}>
          <ContactMe />
        </section>
        <Footer />
      </Container>
    </main>
  );
}

export default App;

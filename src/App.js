import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Education } from './components/Education/Education';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { Skills } from './components/Skills/Skills';
import { Certifications } from './components/Certifications/Certifications';

function App() {
  return (
    <Container>
      <CssBaseline />
      <AboutMe />
      <WorkExperience />
      <Education />
      <Skills />
      <Certifications />
    </Container>
  );
}

export default App;

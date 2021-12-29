import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Education } from './components/Education/Education';
import { WorkExperience } from './components/WorkExperience/WorkExperience';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <Container>
      <CssBaseline />
      <AboutMe />
      <WorkExperience />
      <Education />
      <Skills />
    </Container>
  );
}

export default App;

import { Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Education } from './components/Education/Education';
import { WorkExperience } from './components/WorkExperience/WorkExperience';

function App() {
  return (
    <Container>
      <CssBaseline />
      <AboutMe />
      <WorkExperience />
      <Education />
    </Container>
  );
}

export default App;

import { Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Education } from './components/Education/Education';

function App() {
  return (
    <Container>
      <CssBaseline />
      <AboutMe />
      <Education />
    </Container>
  );
}

export default App;

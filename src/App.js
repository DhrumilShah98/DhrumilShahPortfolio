import { Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import { AboutMe } from './components/AboutMe/AboutMe';
import { ContactMe } from './components/ContactMe/ContactMe';

function App() {
  return (
    <Container>
      <CssBaseline />
      <AboutMe />
      <ContactMe />
    </Container>
  );
}

export default App;

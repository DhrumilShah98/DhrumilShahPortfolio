import React from 'react';
import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import { ContactMe } from './components/ContactMe/ContactMe';

function App() {
  return (
    <React.Fragment>
      <AboutMe />
      <ContactMe />
    </React.Fragment>
  );
}

export default App;

import React from 'react';

import { Container } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import './App.css';

function App() {
  return (
    <Container>
      <h1>SAZAXA MEMBERS <PeopleIcon /></h1>
      <li>sazxa! <PersonIcon /></li>
      <li>wenodev! <PersonIcon /></li>
      <li>kkwondev! <PersonIcon /></li>
    </Container>
  );
}

export default App;

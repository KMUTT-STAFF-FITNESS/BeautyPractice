import React from 'react';
import './App.css';
import { Router } from '@reach/router'
import { Container, Row, Button } from 'react-bootstrap';
// import Game from './components/Game';
import PapaerRockSissor from './fame/paperRockSissor';

import TableExample from './table/TableExample';
import Sidebar from './table/core/Sidebar'
import TableEdit from './table/TableEdit';


function App() {

  return (
    <Router>
      <TableExample path="/"/>
      <TableEdit path="/beauty"/>
    </Router>
    // <div>
    //   <Container>
    //   <Row className="justify-content-md-center">
    //   <h1>Paper Rock Sissirs</h1>
    //   <br/>
    //   <Button variant="outline-secondary" onClick={() => this.}>Paper</Button> {''}
    //   <Button variant="outline-secondary">Rock</Button> {''}
    //   <Button variant="outline-secondary">Sissors</Button>

    //   </Row>
    //   </Container>
    // </div>
  );
}

export default App;

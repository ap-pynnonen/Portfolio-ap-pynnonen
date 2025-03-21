import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div style={{ backgroundImage: "url(/background-image-gradient2.jpg)",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        minHeight: '100vh',
        maxHeight: '100%' }}>
      <Container fluid>
      <Row>
       <Navbar />
      </Row>
      <Row>
        <Main />
      </Row>
      <Row>
        <Contact />
      </Row>
    </Container>
    </div>
  );
}

export default App;

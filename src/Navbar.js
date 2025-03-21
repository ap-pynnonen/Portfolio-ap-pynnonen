import React from "react";
import "./styles.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom"

export default function NavbarComponent() {

return (
  <Navbar className="nav-bg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link to="/" className="nav-font" style={{color: 'white'}}>Home</Link></Nav.Link>
          <Nav.Link><Link to="about" className="nav-font" style={{color: 'white'}}>About</Link></Nav.Link>
          <Nav.Link><Link to="skills" className="nav-font" style={{color: 'white'}}>Skills</Link></Nav.Link>
        <DropdownButton
         id="dropdown-button-dark"
         variant="dark"
         title="Portfolio"
          data-bs-theme="dark"
        >
          <Dropdown.Item><Link to="portfolio" className="nav-font" style={{color: 'white'}}>Portfolio</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link to="thesis" className="nav-font" style={{color: 'white'}}>Thesis</Link></Dropdown.Item>
          <Dropdown.Item><Link to="practicaltraining2" className="nav-font" style={{color: 'white'}}>Practical training Neuwo</Link></Dropdown.Item>
          <Dropdown.Item><Link to="practicaltraining1" className="nav-font" style={{color: 'white'}}>Practical training JAMK</Link></Dropdown.Item>
          <Dropdown.Item><Link to="bonskydigital" className="nav-font" style={{color: 'white'}}>Bonsky Digital OY</Link></Dropdown.Item>
          <Dropdown.Item><Link to="gameproject" className="nav-font" style={{color: 'white'}}>Game project</Link></Dropdown.Item>
          <Dropdown.Item><Link to="algorithm" className="nav-font" style={{color: 'white'}}>Algorithms</Link></Dropdown.Item>
          <Dropdown.Item><Link to="3dmodel" className="nav-font" style={{color: 'white'}}>3D modeling course project</Link></Dropdown.Item>
          <Dropdown.Item><Link to="fireballanimation" className="nav-font" style={{color: 'white'}}>Fireball animation 2D animation</Link></Dropdown.Item>
          <Dropdown.Item><Link to="webproject" className="nav-font" style={{color: 'white'}}>Web Project 2 course</Link></Dropdown.Item>
          <Dropdown.Item><Link to="webproject1" className="nav-font" style={{color: 'white'}}>Web Project 1 course</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link to="operationmetro" className="nav-font" style={{color: 'white'}}>Game level Operationmetro</Link></Dropdown.Item>
        </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
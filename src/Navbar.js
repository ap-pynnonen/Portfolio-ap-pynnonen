import React from "react";
import "./styles.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from "react-router-dom"
import { LangSwitch } from "./LangSwitch";
import { useLocalization } from './LocalizationProvider';

export default function NavbarComponent() {
 const { t } = useLocalization();
return (
  <Navbar className="nav-bg">
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LangSwitch /> 
          <Nav.Link><Link to="/" className="nav-font" style={{color: 'white'}}>{t("navbar.home")}</Link></Nav.Link>
          <Nav.Link><Link to="about" className="nav-font" style={{color: 'white'}}>{t("navbar.about")}</Link></Nav.Link>
          <Nav.Link><Link to="skills" className="nav-font" style={{color: 'white'}}>{t("navbar.skills")}</Link></Nav.Link>
        <DropdownButton
         id="dropdown-button-dark"
         variant="dark"
         title="Portfolio"
          data-bs-theme="dark"
        >
          <Dropdown.Item><Link to="portfolio" className="nav-font" style={{color: 'white'}}>{t("navbar.portfolio")}</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link to="thesis" className="nav-font" style={{color: 'white'}}>{t("navbar.thesis")}</Link></Dropdown.Item>
          <Dropdown.Item><Link to="practicaltraining2" className="nav-font" style={{color: 'white'}}>{t("navbar.practical2")}</Link></Dropdown.Item>
          <Dropdown.Item><Link to="practicaltraining1" className="nav-font" style={{color: 'white'}}>{t("navbar.practical1")}</Link></Dropdown.Item>
          <Dropdown.Item><Link to="bonskydigital" className="nav-font" style={{color: 'white'}}>{t("navbar.bonsky")}</Link></Dropdown.Item>
          <Dropdown.Item><Link to="gameproject" className="nav-font" style={{color: 'white'}}>{t("navbar.gameproject")}</Link></Dropdown.Item>
          <Dropdown.Item><Link to="algorithm" className="nav-font" style={{color: 'white'}}>{t("navbar.algorithms")}</Link></Dropdown.Item>
          <Dropdown.Item><Link to="3dmodel" className="nav-font" style={{color: 'white'}}>{t("navbar.3dmodeling")}</Link></Dropdown.Item>
          <Dropdown.Item><Link to="fireballanimation" className="nav-font" style={{color: 'white'}}>{t("navbar.animation")}</Link></Dropdown.Item>
          <Dropdown.Item><Link to="webproject" className="nav-font" style={{color: 'white'}}>{t("navbar.webproject2")}</Link></Dropdown.Item>
          <Dropdown.Item><Link to="webproject1" className="nav-font" style={{color: 'white'}}>{t("navbar.webproject1")}</Link></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item><Link to="operationmetro" className="nav-font" style={{color: 'white'}}>{t("navbar.gamelevel")}</Link></Dropdown.Item>
        </DropdownButton>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "./Button";
import '../style/Topbar.css';
import topbarlogo from "../images/logo/logo_white.png";

function Topbar() {
  const location = useLocation();
  const isMargin = useMediaQuery({ query: "(min-width: 995px)" });
  
  const [activeLink, setActiveLink] = useState('/');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
    setIsNavbarOpen(false);
  }, [location.pathname]);

  return (
    <Navbar expand="lg" sticky="top" className="navbar-custom" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={topbarlogo}
            width="242px"
            height="50px"
            className="d-inline-block"
            alt="dacos x solux Hackathon Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"
        onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' in={isNavbarOpen}>
        <Nav>
          <Nav.Link as={Link} to="/" className={`nav-link ${activeLink === '/' ? 'active-link' : ''}`}>
              ABOUT
          </Nav.Link>
          <Nav.Link as={Link} to="/timeline" className={`nav-link ${activeLink === '/timeline' ? 'active-link' : ''}`}>
              TIMELINE
          </Nav.Link>
          <Nav.Link as={Link} to="/hackathon" className={`nav-link ${activeLink === '/hackathon' ? 'active-link' : ''}`}>
              HACKATHON
          </Nav.Link>
          <Nav.Link as={Link} to="/faq" className={`nav-link ${activeLink === '/faq' ? 'active-link' : ''}`}>
              FAQ
          </Nav.Link>
          <Button
            style={{ marginLeft: isMargin ? '20px' : '10px', width: isMargin? "90px" : "", marginRight: isMargin ? '20px' : '10px' }}
            onClick={() => {
              window.open("https://linktr.ee/DxSHackathon");
            }}
          >
            지원하기
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;

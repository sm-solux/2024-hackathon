import React from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../style/Topbar.css';

function Topbar() {
  const location = useLocation();
  const isMargin = useMediaQuery({ query: "(min-width: 995px)" });

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">DACOSxSOLUX HACKATHON</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link
              href="/"
              className={location.pathname === '/' ? 'active-link' : ''}
            >
              ABOUT
            </Nav.Link>
            <Nav.Link
              href="/timeline"
              className={location.pathname === '/timeline' ? 'active-link' : ''}
            >
              TIMELINE
            </Nav.Link>
            <Nav.Link
              href="/hackathon"
              className={location.pathname === '/hackathon' ? 'active-link' : ''}
            >
              HACKATHON
            </Nav.Link>
            <Nav.Link
              href="/faq"
              className={location.pathname === '/faq' ? 'active-link' : ''}
            >
              FAQ
            </Nav.Link>
            <Button
              variant='outline-light'
              style={{ marginLeft: isMargin ? '20px' : '0' }}
              href='#'>지원하기</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;

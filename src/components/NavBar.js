import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link font-serif' : 'navbar-link font-serif'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link font-serif' : 'navbar-link font-serif' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link font-serif' : 'navbar-link font-serif'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link font-serif' : 'navbar-link text-white font-serif'} onClick={() => onUpdateActiveLink('connect')}> Let’s Connect</Nav.Link>
            </Nav>
            <span className="navbar-text">
        
              <div className="social-icon space-x-4">
              <a href="https://www.linkedin.com/in/mbenaoui/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/mohamed.benaouija.5/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/mohamed_benaou/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

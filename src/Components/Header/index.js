import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../style.css';
import './style.css';
import Logo from './../../Assets/MACAUBAS-FM-300x102 LOGO.png';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function Header(){

        const [navbar, setNavbar] = useState(false);
      
        const changeBackground = () => {
          if (window.scrollY >= 120) {
            setNavbar(true);
          } else {
            setNavbar(false);
          }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', changeBackground);
        }, []);


    return(
        <Navbar collapseOnSelect expand="lg" className={navbar ? 'Header fixed-top' : 'Header'}>
        <Container>
          <Navbar.Brand>
            <Link to='/'><img src={Logo} width={180}/></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <NavDropdown title="Programação" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>Notícias</Nav.Link>
              <Nav.Link>Quem Somos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Ao Vivo</Nav.Link>
              <Nav.Link eventKey={2}>
                Contato
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
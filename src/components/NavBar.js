import { Dropdown } from "bootstrap";
import React from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



class NavBar extends React.Component {
    render(){
        return( 
        
            <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="#home">La Oportunidad</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <NavDropdown title="Categorías" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                        Ropa
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                       Electrodomésticos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                        Computación
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        Consolas
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Button variant="primary" onClick={() => console.log("Primary")}>
                    Log In
                </Button>
        
              </Navbar.Collapse>
            </Container>
          </Navbar>

        
        );
    }
}

export default NavBar;


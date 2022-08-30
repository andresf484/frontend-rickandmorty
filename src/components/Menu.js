import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import './Menu.css';

const Menu = () => {
    return (
        <div>
            <Navbar className="navbar-background" variant="dark" expand="lg">
                <Container fluid className="container-fluid-menu">
                    <Navbar.Brand href="#">
                        <img className="logo" src="/img/Logo-RandM.png" alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll></Nav>
                        <Nav>
                            <Nav.Link href="#">
                                <img className="navbar-icon" src="/img/Icono de campana.png" alt="Campana" />
                            </Nav.Link>
                            <Nav.Link href="#">
                                <img className="navbar-icon" src="/img/Home.png" alt="Home" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu
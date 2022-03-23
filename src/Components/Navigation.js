import React from 'react'
import { Navbar, Container,  Offcanvas, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './StyledComponents/Navigation.css'

function Navigation() {
    return (
        <div>
            <Navbar className="shadow"  collapseOnSelect expand="md">
                <Container>
                    <Navbar.Brand href="#">BIT33</Navbar.Brand>
                    <Navbar.Collapse id="offcanvasNavbar">
                    <Nav className="ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link  className="nav-link" to="about">About</Link>
                            <Link  className="nav-link" to="skills">Skills</Link>
                            <Link  className="nav-link" to="work">works</Link>
                            <Link  className="nav-link" to="contact">Contact</Link>
                    </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar responsive-navbar-nav"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">BIT33</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="text-center">
                            <Nav className="justify-content-end flex-grow-1 pe-3 ">
                            <Nav.Link href="/" className="text-black">Home</Nav.Link>
                            <Nav.Link href="about" className="text-black">About</Nav.Link>
                            <Nav.Link href="skills" className="text-black">Skills</Nav.Link>
                            <Nav.Link href="work" className="text-black">Works</Nav.Link>
                            <Nav.Link href="contact" className="text-black">Contact</Nav.Link>
                            
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                   
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation

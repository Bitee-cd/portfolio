import React from 'react'
import { Navbar, Container,  Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './StyledComponents/Navigation.css'

function Navigation() {
    return (
        <div>
            <Navbar className="shadow"  expand="lg">
                <Container>
                    <Navbar.Brand href="#">BIT33</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link  className="nav-link" to="about">About</Link>
                            <Link  className="nav-link" to="skills">Skills</Link>
                            <Link  className="nav-link" to="work">works</Link>
                            <Link  className="nav-link" to="contact">Contact</Link>
                    </Nav>
                    </Navbar.Collapse>
                    
                   
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation

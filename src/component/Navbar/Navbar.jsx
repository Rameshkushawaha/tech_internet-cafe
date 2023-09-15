import React from 'react'
import {Container, Nav, Navbar } from 'react-bootstrap'


function NavbarDesign() {
    return (
        <div>

          <section className='section1'>
          <Navbar className='navbar'>
                <Container>
                    <Navbar.Brand href="/">Tech Internet Cafe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ml-auto" >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
          </section>
            
        </div>
    )
}

export default NavbarDesign
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
// import './Navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavHashLink to="/" style={{textDecoration: 'none', color: 'white', fontSize: '1.2em'}}>Saptapan</NavHashLink>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto my-2 my-lg-0 .anime"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <NavHashLink to="/" className="mx-2" style={{textDecoration: 'none', color: 'white'}}>Home</NavHashLink>
                            <NavHashLink to="/home/#projects" className="mx-2" style={{textDecoration: 'none', color: 'white'}}>Projects</NavHashLink>
                            <NavHashLink to="/blogs" className="mx-2" style={{textDecoration: 'none', color: 'white'}}>Blogs</NavHashLink>
                            <NavHashLink to="/home/#contact" className="mx-2" style={{textDecoration: 'none', color: 'white'}}>Contact</NavHashLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;
"use client"
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'; // Import Bootstrap components

export default function NavComponents() {
    return (
        <div style={{ position: 'fixed', top: 0, width: '100%' }}> {/* Add fixed positioning */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Utilidades PDF</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Merge</Nav.Link>
                            <Nav.Link href="#link">Split</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

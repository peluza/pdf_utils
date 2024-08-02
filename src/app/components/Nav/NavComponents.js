"use client"
import useCurrentSection from '@/hooks/CurrentSection/useCurrentSection';
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavComponents() {
    const { setCurrentSection } = useCurrentSection();

    const handleSplit = () => {
      setCurrentSection('split');
    };
  
    const handleMerge = () => {
      setCurrentSection('merge');
    };

    const handleHome = () => {
        setCurrentSection('home');
      };

    return (
        <div style={{ position: 'fixed', top: 0, width: '100%' }}> {/* Add fixed positioning */}
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand onClick={handleHome}>Utilidades PDF</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={handleMerge}>Merge</Nav.Link>
                            <Nav.Link onClick={handleSplit}>Split</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

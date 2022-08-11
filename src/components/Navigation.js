import React from "react";
import Logo from '../img/Logo.png';

import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigation = () =>{
    return (
        <div className="navigation">
            <Navbar bg='light' expand="lg">
                <Nav className="me-auto">
                    <Nav.Link href="/"><img src={Logo} alt="Logo projet"/></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation;
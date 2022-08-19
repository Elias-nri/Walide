import React from "react";
import Logo from '../img/Logo.png';


import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () =>{
    return (
        <div className="navigation1">
            <Navbar expand="lg">
                <Nav className="me-auto">
                    <Nav.Link href="/"><img src={Logo} height='50em' alt=""/></Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Navigation;
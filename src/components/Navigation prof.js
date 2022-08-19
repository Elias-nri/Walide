import React from "react";
import Logo from '../img/Logo.png';
import Gautier from '../img/gautier.jpg';


import { Navbar, Nav } from 'react-bootstrap';

const NavigationProf = () =>{
    return (
        <div className="navigation1">
            <Navbar>
                <Nav>
                    <Nav.Link href="/"><img src={Logo} height='50em' alt=""/></Nav.Link>
                    <div className="profilprof">
                    <div className="pProfilProf">
                        <p>Gautier</p>
                        <p>Delache</p>
                    </div>
                        <img src={Gautier} height='50em' alt=""/>
                    </div>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavigationProf;
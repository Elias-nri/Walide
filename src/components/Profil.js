import React from "react";
import Photoprofil from '../img/pierre.jpg';
import notion from '../img/notion.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';
import figma from '../img/figma.png';
import github from '../img/github.png';

const Profil = () =>{
    return (
        <div className="sidebar">
            <aside className="sidebar1">
                <img src={Photoprofil} width='100%' alt=""/>
                <h6><br>
                </br>Badault<br>
                </br>Pierre<br>
                </br>Promo2023<br>
                </br>OCRES<br>
                </br>pierre.badault@edu.ece.fr<br>
                </br>065368596<br>
                </br>
                <div className="logo">
                    <img src={notion} height='25em'></img>
                    <img src={linkedin} height='20em'></img>
                    <img src={facebook} height='20em'></img>
                    <img src={figma} height='20em'></img>
                    <img src={github} height='20em'></img>
                </div>
                
                </h6>
            </aside>
        </div>
        
    )
}

export default Profil;
import React from "react";
import Photoprofil from '../img/pierre.jpg';
import notion from '../img/notion.png';
import linkedin from '../img/linkedin.png';
import facebook from '../img/facebook.png';
import figma from '../img/figma.png';
import github from '../img/github.png';

const Profileleve = () =>{
    return (
        <div className="sidebar">
            <aside className="sidebar1">
                <img src={Photoprofil} width='100%' alt=""/>
                <div className="modifprofil">
                    <h7>Modifier le profil</h7>
                </div>
                <h6>Badault<br>
                </br>Pierre<br>
                </br>Promo2023<br>
                </br>OCRES<br>
                </br>pierre.badault@edu.ece.fr<br>
                </br>065368596<br>
                </br></h6>
                <div className="logo">
                    <img src={notion} height='25em'></img>
                    <img src={linkedin} height='20em'></img>
                    <img src={facebook} height='20em'></img>
                    <img src={figma} height='20em'></img>
                    <img src={github} height='20em'></img>
                </div>   
            </aside>
        </div>
        
    )
}

export default Profileleve;
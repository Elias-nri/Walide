import React from "react";
import Photoprofil from '../img/pierre.jpg';

const Profil = () =>{
    return (
        <aside className="sidebar">
            <img src={Photoprofil} height='200px' alt=""/>
            <h6>Badault<br>
            </br>Pierre<br>
            </br>Promo2023<br>
            </br>OCRES<br>
            </br>pierre.badault@edu.ece.fr<br>
            </br>065368596</h6>
        </aside>
    )
}

export default Profil;
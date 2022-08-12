import React from "react";
import Photoprofil from '../img/pierre.jpg';

const Profil = () =>{
    return (
        <div className="sidebar">
            <aside className="sidebar1">
                <img src={Photoprofil} width='100%' alt=""/>
                <h6>Badault<br>
                </br>Pierre<br>
                </br>Promo2023<br>
                </br>OCRES<br>
                </br>pierre.badault@edu.ece.fr<br>
                </br>065368596</h6>
            </aside>
        </div>
        
    )
}

export default Profil;
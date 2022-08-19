import { render } from "@testing-library/react";
import React from "react";
import Fleche from '../img/fleche.png';

class MenuDeroulant extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick(){
        let menuderoulant = document.getElementById("liste");
        if(getComputedStyle(menuderoulant).display != "none"){
            menuderoulant.style.display = "none";
        }
        else{
            menuderoulant.style.display = "flex";
        }
    }

    handleClick1(){
        let menuderoulant = document.getElementById("liste1");
        if(getComputedStyle(menuderoulant).display != "none"){
            menuderoulant.style.display = "none";
        }
        else{
            menuderoulant.style.display = "flex";
        }
    }

    handleClick2(){
        let menuderoulant = document.getElementById("liste2");
        if(getComputedStyle(menuderoulant).display != "none"){
            menuderoulant.style.display = "none";
        }
        else{
            menuderoulant.style.display = "flex";
        }
    }

    render(){
        return (
            <div className="sidebar">
                <div className="sidebar2">
                    <h3>Mes cours</h3>
                </div>
                <aside className="sidebar1">
                    <div style={{display:"flex"}}>
                        <button id='bderoulant' onClick={this.handleClick}><img src={Fleche} height='20em' alt=""/></button>
                        <h5>Accueil</h5>
                    </div>
                    <div className="liste" id="liste" style={{display:"none"}}>
                        <ul>
                            <li className="objet">Validation de compétence</li>
                            <li className="objet">Création de cours</li>
                        </ul>
                    </div>
                </aside>
                <aside className="sidebar1">
                    <div style={{display:"flex"}}>
                        <button id='bderoulant' onClick={this.handleClick1}><img src={Fleche} height='20em' alt=""/></button><h5>ING4 OCRES TD4</h5>
                    </div>
                    <div className="liste1" id="liste1" style={{display:"none"}}>
                        <ul>
                            <li className="objet"><a href="/Pageetudiant">Pierre Badault</a></li>
                            <li className="objet">Théric Phéron</li>
                            <li className="objet">Elias Nouri</li>
                        </ul>
                    </div>
                    <div style={{display:"flex"}}>
                        <button id='bderoulant' onClick={this.handleClick2}><img src={Fleche} height='20em' alt=""/></button>
                        <h5>ING4 OCRES TD6</h5>
                    </div>
                    <div className="liste1" id="liste2" style={{display:"none"}}>
                        <ul>
                            <li className="objet">Nom d'élève</li>
                            <li className="objet">Nom d'élève</li>
                            <li className="objet">Nom d'élève</li>
                        </ul>
                    </div>
                </aside>
            </div>
            
        )
    }
}



export default MenuDeroulant ;
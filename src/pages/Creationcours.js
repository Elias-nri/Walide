import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Row, Col, Container } from "react-bootstrap";
import NavigationProf from "../components/Navigation prof";
import Profilprof from "../components/Profil proffesseur";
import Retour from '../img/retour.png';
import Plus from '../img/plus.png';

const Creacours = () => {
    return (
        <div>
            <NavigationProf />
            <div style={{display:"flex"}}>
                <Profilprof/>
                <div className="titre">
                    <img src={Retour} height='50em' alt=""/>
                    <h1>Création d'un cours</h1>
                    <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <form>
                                <div>
                                    <label>
                                        <h4>Nom du cours :</h4>
                                        <input type="text" className="zonetexte"/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <h4>Description du cours :</h4>
                                        <textarea className="zonetexte"/>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <h4>Date de validation :</h4>
                                        <input type="date" className="zonetexte"/>
                                    </label>
                                </div>
                                <br></br>
                                <h3>Compétences aquises :</h3>
                                <div>
                                    <label>
                                        <h4>Nom de la compétence :</h4>
                                        <input type="text" className="zonetexte"/>
                                    </label>
                                </div>
                                <div className="ajoutcomp">
                                    <img src={Plus} height='40em' alt=""/>
                                    <h6>Ajouter une compétence</h6>
                                </div>
                                <div>
                                    <button type="submit" className="boutonajout">Ajouter</button>
                                </div>
                            </form>
                            
                        </Col>
                    </Row>
                    
                    </Container>
                </div>
            </div>  
        </div>

    )
}

export default Creacours;
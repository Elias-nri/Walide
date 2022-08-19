import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Row, Col, Container } from "react-bootstrap";
import NavigationProf from "../components/Navigation prof";
import Profilprof from "../components/Profil proffesseur";
import Retour from '../img/retour.png';


const Appreciationetudiant = () => {
    return (
        <div>
            <NavigationProf />
            <div style={{display:"flex"}}>
                <Profilprof/>
                <div className="titre">
                    <img src={Retour} height='50em' alt=""/>
                    <h1>Profil de l'étudiant : Pierre Badault</h1>
                    <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <form>
                                <div className="blocCom">
                                    <div>
                                        <label>
                                            <h4>Ajouter une appréciation :</h4>
                                            <textarea className="zonetexte"/>
                                        </label>
                                    </div>
                                    <div style={{textAlign: "right"}}>
                                        <button type="submit" className="boutonenregistrement">Enregistrer</button>
                                    </div>
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

export default Appreciationetudiant;
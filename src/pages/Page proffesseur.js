import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Row, Col, Container } from "react-bootstrap";
import NavigationProf from "../components/Navigation prof";
import Profilprof from "../components/Profil proffesseur";

const Pageprof = () => {
    return (
        <div>
            <NavigationProf />
            <div style={{display:"flex"}}>
                <Profilprof/>
                <div className="titre">
                    <h1>Accueil</h1>
                    <Container>
                    <Row>
                        <Col xs={6} md={3} className="bloc">
                        <h4>Validation de compétence</h4>
                        <div className="progbar">
                            <a href="/Creationcours"><h7>Suivant</h7></a>  
                        </div>
                        </Col>
                        <Col xs={6} md={3} className="bloc">
                        <h4>Création de cours</h4>
                        <div className="progbar">
                            <h7>Suivant</h7>
                        </div>
                        </Col>
                        <Col xs={6} md={3} className="bloc">
                        <h4>A trouver</h4>
                        <div className="progbar">
                            <h7>Suivant</h7>
                        </div>
                        </Col>
                    </Row>
                    
                    </Container>
                </div>
            </div>  
        </div>

    )
}

export default Pageprof;
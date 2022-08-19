import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Row, Col, Container } from "react-bootstrap";
import NavigationProf from "../components/Navigation prof";
import Profilprof from "../components/Profil proffesseur";
import Retour from '../img/retour.png';

const Pageetudiant = () => {
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
                        <Col xs={6} md={3} className="bloc">
                        <h4>Titre du cours</h4>
                        <div className="progbar">
                            <a href="/Pageappreetudiant"><h7>Suivant</h7></a>  
                        </div>
                        </Col>
                        <Col xs={6} md={3} className="bloc">
                        <h4>Titre du cours</h4>
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

export default Pageetudiant;
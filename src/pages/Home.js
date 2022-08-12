import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Row, Col, Container } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Profil from "../components/Profil";

const Home = () => {
    return (
        <div>
            <Navigation />
            <div style={{display:"flex"}}>
                <Profil/>
                <div className="titre">
                    <h1>Cours mis en avant</h1>
                    <Container>
                    <Row>
                        <Col xs={6} md={3} className="bloc">
                        <h5>Réseau IP</h5>
                        <h6>Antoine sewerin</h6>
                        <div className="progbar">
                            <h7>100%</h7>
                        </div>
                        </Col>
                        <Col xs={6} md={3} className="bloc">
                        <h5>UX/UI</h5>
                        <h6>Gautier delache</h6>
                        <div className="progbar">
                            <h7>100%</h7>
                        </div>
                        </Col>
                        <Col xs={6} md={3} className="bloc">
                        <h5>Gamification</h5>
                        <h6>Jacques rossard</h6>
                        <div className="progbar">
                            <h7>100%</h7>
                        </div>
                        </Col>
                    </Row>
                    
                    </Container>
                </div>
            </div>  
        </div>

    )
}

export default Home;
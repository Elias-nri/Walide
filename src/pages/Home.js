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
            <Profil/>
            <div className="titre">
                <h1>Cours mis en avant</h1>
                <Container>
                <Row>
                    <Col xs={6} md={4}>
                    xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                    xs=6 md=4
                    </Col>
                    <Col xs={6} md={4}>
                    xs=6 md=4
                    </Col>
                </Row>
                {/* <Row lg md xs="4">
                    <Col xs md lg="1" style={{backgroundColor: 'yellow',}}>
                        <p>Garage</p>
                    </Col>
                    <Col xs md lg="11"style={{backgroundColor: 'yellow',}}>
                        <p>Maison</p>
                    </Col>
                </Row> */}
                </Container>
            </div>
        </div>

    )
}

export default Home;
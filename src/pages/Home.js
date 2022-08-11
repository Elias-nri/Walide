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
                <Container>
                <Row>
                    <Col xs={6} md={8} lg={6}>
                        xs=12 md=8
                    </Col>
                    <Col xs={6} md={4} lg={6}>
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
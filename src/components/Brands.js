import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Brastemp from '../assets/images/brastemp.png';
import CompraCerta from '../assets/images/compra-certa.png';
import Consul from '../assets/images/consul.png';
import TheBar from '../assets/images/thebar.png';
import '../styles/Brands.scss';

class Brands extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col className="title"><h3>Nossas principais lojas VTEX</h3></Col>
                            <Col><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Col>
                        </Row>
                    </Col>
                    <Col><img src={Brastemp} alt="Brastemp" /></Col>
                    <Col><img src={CompraCerta} alt="Compra Certa" /></Col>
                    <Col><img src={Consul} alt="Consul" /></Col>
                    <Col><img src={TheBar} alt="The Bar" /></Col>
                </Row>
            </Container>
        );
    }
}

export default Brands;
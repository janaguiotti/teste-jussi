import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Jussi from '../assets/images/image-jussi.png';
import '../styles/About.scss';

class About extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col className="text">
                        <h2>Olá, somos a Jüssi</h2>
                        <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando 
                        o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente 
                        para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience 
                        Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                        <Button variant="outline-secondary" size="lg">Conheça a Jüssi</Button>
                    </Col>
                    <Col className="image">
                        <img src={Jussi} alt="Jussi" /> 
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default About;
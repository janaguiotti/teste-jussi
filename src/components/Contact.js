import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.scss';

class Contact extends React.Component {
    render() {
        return (
            <Container className="contact">
                <Row>
                    <Col>
                        <h2>Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h5>Entre em contato</h5>
                        <h4><a href="mailto:comercial@jussi.com.br">comercial@jussi.com.br</a></h4>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Contact;
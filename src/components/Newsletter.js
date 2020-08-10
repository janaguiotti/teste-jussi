import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import AspasVerde from '../assets/images/aspas-verde.png';
import '../styles/Newsletter.scss';

class Newsletter extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><h2><img src={AspasVerde} alt="Aspas" /> receba novidades da nossa área de produtos digitais.</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control className="news-input" size="lg" type="text" placeholder="Digite seu e-mail" />
                        </Form.Group>
                        <Button className="news-button" variant="primary" type="submit">
                            CADASTRAR
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Newsletter;
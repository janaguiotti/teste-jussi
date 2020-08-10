import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import AspasVerde from '../assets/images/aspas-verde.png';
import '../styles/Newsletter.scss';

class Newsletter extends React.Component {
    render() {
        return (
            <Container className="subscribe">
                <Row>
                    <Col><h2><img src={AspasVerde} alt="Aspas" /> receba novidades da nossa área de produtos digitais.</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Digite seu e-mail"
                                aria-label="Digite seu e-mail"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary">CADASTRAR</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Newsletter;
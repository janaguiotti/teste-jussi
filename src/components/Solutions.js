import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import AspasVerde from '../assets/images/aspas-verde.png';
import '../styles/Solutions.scss';

class Solutions extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h2><img src={AspasVerde} alt="Aspas" /> Nossas soluções</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="product">
                                    <p>P1</p>
                                </div>
                                <Card.Title>Nome do Produto #1</Card.Title>
                                <Card.Text>
                                <h4>Descrição do produto #1</h4>
                                <ul>
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                                </Card.Text>
                                <Button variant="success">Ver solução</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="product">
                                    <p>P2</p>
                                </div>
                                <Card.Title>Nome do Produto #2</Card.Title>
                                <Card.Text>
                                <h4>Descrição do produto #2</h4>
                                <ul>
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                                </Card.Text>
                                <Button variant="success">Ver solução</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="product">
                                    <p>P3</p>
                                </div>
                                <Card.Title>Nome do Produto #3</Card.Title>
                                <Card.Text>
                                <h4>Descrição do produto #3</h4>
                                <ul>
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                                </Card.Text>
                                <Button variant="success">Ver solução</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <div className="product">
                                    <p>P4</p>
                                </div>
                                <Card.Title>Nome do Produto #4</Card.Title>
                                <Card.Text>
                                <h4>Descrição do produto #4</h4>
                                <ul>
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul>
                                </Card.Text>
                                <Button variant="success">Ver solução</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Solutions;
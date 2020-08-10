import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Aspas from '../assets/images/aspas.png';
import Batedeira from '../assets/images/batedeira.png';
import Geladeira from '../assets/images/geladeira.png';
import Bebida from '../assets/images/bebida.png';
import '../styles/Promotion.scss';

class PromotionBanner extends React.Component {
    render() {
        return (
            <Container fluid className="banner">
                <Row>
                    <Col>
                        <div className="slogan">
                            <div className="aspas">
                                <img src={Aspas} alt="Aspas" />
                            </div>
                            <h1>Criamos lojas que vendem mais.</h1>
                            <h2>A Jüssi é especialista na criação de lojas usando a plataforma VTEX. 
                                Precisa criar sua loja ou migrar de plataforma?
                            </h2>
                            <Button variant="outline-secondary" size="lg">Veja nossas soluções</Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="card-item-1">
                            <img src={Batedeira} alt="Batedeira" />
                            <Button variant="outline-danger">Comprar em 12x</Button>
                        </div>
                        <div className="card-item-1">
                            <img src={Geladeira} alt="Geladeira" />
                            <Button variant="outline-danger">Mais Detalhes</Button>
                        </div>
                        <div className="card-item-1">
                            <img src={Bebida} alt="Bebida" />
                            <Button variant="outline-danger">Adicionar à sacola</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PromotionBanner;
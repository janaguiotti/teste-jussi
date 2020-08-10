import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WppCompany from '../assets/images/wppcompany.png';
import Facebook from '../assets/images/facebook.png';
import Instagram from '../assets/images/instagram.png';
import Linkedin from '../assets/images/linkedin.png';
import '../styles/Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <Container>
                <Row className="copyright">
                    <Col className="pull-left">
                        <img src={WppCompany} alt="Wpp Company" />
                    </Col>
                    <Col className="pull-right">
                        <ul className="social-media">
                            <li>
                                <a href="https://facebook.com">
                                    <img src={Facebook} alt="Facebook" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com">
                                    <img src={Instagram} alt="Instagram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com">
                                    <img src={Linkedin} alt="Linkedin" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;
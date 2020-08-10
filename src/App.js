import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import Navigation from './components/Navigation';
import PromotionBanner from './components/PromotionBanner';
import Brands from './components/Navigation';
import Solutions from './components/Solutions';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      
      <Container fluid className="landing-page">
        <header>
          <Navigation />
        </header>
        <main>
          <section>
            <Row className="big-banner">
              <Col>
                <PromotionBanner />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="brands">
              <Col>
                <Brands />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="solutions">
              <Col>
                <Solutions />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="about-us">
              <Col>
                <About />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="contact-us">
              <Col>
                <Contact />
              </Col>
            </Row>
          </section>
          <section>
            <Row className="newsletter">
              <Col>
                <Newsletter />
              </Col>
            </Row>
          </section>
        </main>
        
        <footer>
          <Footer />
        </footer>
      </Container>
    );
  }
}

export default App;

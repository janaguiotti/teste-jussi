import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.scss';
import Navigation from './components/Navigation'


class App extends React.Component {
  render() {
    return (
      
      <Container fluid>
        <header>
          <Navigation />
        </header>
        <Row>
          teste
        </Row>
        <footer>

        </footer>
      </Container>
    );
  }
}

export default App;

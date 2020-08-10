import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import Search from './Search';
import Logo from '../assets/images/logo.png';
import '../styles/Navigation.scss';

class Navigation extends React.Component {
    render() {
        return (
            <Navbar expand="lg" bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="Jussi" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Nossas soluções</Nav.Link>
                        <Nav.Link href="#link">Conheça a Jüssi</Nav.Link>
                    </Nav>
                    <Search />
                    <Nav className="mr-auto">
                        <Nav.Link href="#link">Login</Nav.Link>
                        <Nav.Link href="#link">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;

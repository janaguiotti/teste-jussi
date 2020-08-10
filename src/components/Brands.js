import React from 'react';
import Brastemp from '../assets/images/brastemp.png';
import CompraCerta from '../assets/images/compra-certa.png';
import Consul from '../assets/images/consul.png';
import TheBar from '../assets/images/thebar.png';
import '../styles/Brands.scss';

class Brands extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <div className="grid-item">
                    <div className="grid-container">
                        <div className="grid-item">
                            <div className="title"><h3>Nossas principais lojas VTEX</h3></div>
                        </div>
                        <div className="grid-item">
                            <div className="icon"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="image"><img src={Brastemp} alt="Brastemp" /></div>
                </div>
                <div className="grid-item">
                    <div className="image"><img src={CompraCerta} alt="Compra Certa" /></div>
                </div>
                <div className="grid-item">
                    <div className="image"><img src={Consul} alt="Consul" /></div>
                </div>
                <div className="grid-item">
                    <div className="image"><img src={TheBar} alt="The Bar" /></div>
                </div>
            </div>
        );
    }
}

export default Brands;
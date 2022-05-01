import React from 'react';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="container">
            <h1 className="title">Pc Midi Center</h1>
            <ul className="nav">
                <li><a href="#">Sintetizadores</a></li>
                <li><a href="#">Controladores Midi</a></li>
                <li><a href="#">Interfaces de Audio</a></li>
                <li><a href="#">Monitoreo</a></li>
            </ul>
            <CartWidget cant='3' />
        </div>
    );
};

export default NavBar;
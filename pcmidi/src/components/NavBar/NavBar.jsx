import React from 'react';
import './NavBar.css'

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
        </div>
    );
};

export default NavBar;
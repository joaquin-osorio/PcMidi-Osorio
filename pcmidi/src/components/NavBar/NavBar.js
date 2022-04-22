//import React from 'react';
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

function navBar() {
    return(
        <div className="menu-container">
            <ul className="menu">
                <li href="#">Pc Midi Center</li>
                <li href="#">Teclados</li>
                <li href="#">Guitarras</li>
                <li href="#">Contacto</li>
            </ul>
            <CartWidget className="menu" />
        </div>
    );
}

export default navBar;
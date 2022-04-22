//import React from 'react';
import "./CartWidget.css"
import carrito from './icono.jpeg';

function CartWidget() {
    return(
        <div className="cartContainer">
            <img src={carrito} className="cartImg" alt=""></img>
            <p>4</p>
        </div>
    );
}

export default CartWidget;
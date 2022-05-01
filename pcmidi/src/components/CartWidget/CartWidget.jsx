import React from 'react';
import logo from './icono.jpeg'
import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <div className='cart'>
            <img src={logo} className='cartLogo'/>
            <p className='cartCant'>{props.cant}</p> 
        </div>
    );
};

export default CartWidget;
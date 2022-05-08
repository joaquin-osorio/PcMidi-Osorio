import React from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ title, pictureURL, price, description }) => {
    return (
        <div className="ItemDetailBox">
            <img src={pictureURL} alt={title} />
            <div className="derecha">
                <h1>{title}</h1>
                <p>${price}</p>
                <p>en 12x ${(price/12).toFixed(2) /* Funcion toFixed para limitar la cantidad de decimales */}</p> 
                <p className="description">{description}</p>
                <ItemCount className="itemCount" initial={1} stock={10} />
            </div>
        </div>


    );  
};

export default ItemDetail;
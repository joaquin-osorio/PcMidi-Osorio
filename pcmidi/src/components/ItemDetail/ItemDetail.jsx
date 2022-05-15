import React, {useState} from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'


const ItemDetail = ({ title, pictureURL, price, description }) => {

    const [quantity, setQuantity] = useState(null);

    const addHandler = quantityToAdd => {
        setQuantity(quantityToAdd);
        console.log(quantityToAdd);
    }

    return (
        <div className="ItemDetailBox">
            <img src={pictureURL} alt={title} />
            <div className="derecha">
                <h1>{title}</h1>
                <p>${price}</p>
                <p>en 12x ${(price/12).toFixed(2) /* Funcion toFixed para limitar la cantidad de decimales */}</p> 
                <p className="description">{description}</p>
                {
                    quantity ? <Link to={'/cart'} className='buyButton'>Continuar con la compra</Link> : <ItemCount className="itemCount" initial={1} stock={10} onAdd={addHandler} />
                }
                
                
            </div>
        </div>


    );  
};

export default ItemDetail;
import React from 'react';
import { Link } from 'react-router-dom'
import './Item.css'

const Item = (props) => {
    return (
        <div className="itemContainer">
            <h1 className="itemTitle">{props.title}</h1>
            <img className="itemImg" src={props.pictureURL}></img>
            <p className="itemPrice">{'$'+props.price}</p>
            <Link to={'/item/'+props.id} className="itemButton">Ver Detalles</Link>
        </div>
    );
};

export default Item;
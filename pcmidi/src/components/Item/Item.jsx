import React from 'react';
import './Item.css'

const Item = (props) => {
    return (
        <div className="itemContainer">
            <h1 className="itemTitle">{props.title}</h1>
            <img className="itemImg" src={props.pictureURL}></img>
            <p className="itemPrice">{props.price}</p>
            <button className="itemButton">Ver Detalles</button>
        </div>
    );
};

export default Item;
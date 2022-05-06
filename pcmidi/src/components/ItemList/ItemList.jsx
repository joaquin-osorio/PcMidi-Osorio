import React, {useState, useEffect} from 'react';
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = (props) => {
    console.log(props.productos);
    return (
        <div className="itemsContainer">
          {props.productos.map(prod => <Item title={prod.title} pictureURL={prod.pictureURL} price={prod.price}/>)}
        </div>
    );
};

export default ItemList;
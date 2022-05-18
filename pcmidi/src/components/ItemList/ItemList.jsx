import React, {useState, useEffect} from 'react';
import './ItemList.css'
import Item from '../Item/Item';

const ItemList = (props) => {
    return (
        <div className="itemsContainer">
          {props.productos.map(prod => <Item className='item' key={prod.id} title={prod.title} pictureURL={prod.pictureURL} price={prod.price} id={prod.id}/>)}
        </div>
    );
};

export default ItemList;
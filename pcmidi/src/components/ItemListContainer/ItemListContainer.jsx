import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={5} />
        </div>
    );
};

export default ItemListContainer;
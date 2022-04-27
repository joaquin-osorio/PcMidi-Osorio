//import React from 'react';
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer() {
    return(
        <div>
            <p>Lista de articulos de la tienda</p>
            <ItemCount stock="5" initial="1"></ItemCount>
        </div>
    );
}

export default ItemListContainer;
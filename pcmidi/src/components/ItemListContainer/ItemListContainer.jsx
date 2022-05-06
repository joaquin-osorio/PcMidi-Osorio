import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import getData from '../../services/getData';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect (() => {
        //Callback Function
        getData
            .then(res => {
                setProducts(res);
            })
    }, [])

    return (
        <div>
            {/* <h1>{props.greeting}</h1>
            <ItemCount initial={1} stock={5} /> */}
            <ItemList productos={products}/>
        </div>
    );
};

export default ItemListContainer;
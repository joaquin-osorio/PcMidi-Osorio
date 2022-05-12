import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import getData from '../../services/getData';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { id } = useParams();

    useEffect (() => {
        //Callback Function
        console.log(id);
        getData
            .then(res => {
                setProducts(id ? res.filter(prod => prod.catId == id) : res);
            })
    }, [id])

    return (
        <div className="itemListContainer">
            <ItemList productos={products}/>
        </div>
    );
};

export default ItemListContainer;
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, getFirestore, query, where, limit } from "firebase/firestore"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { id } = useParams();

    const getData = (cat) => {
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        const q = query(itemCollection, where('catId', '==', Number(cat)));
        //cat ? return getDocs(q) : return getDocs(itemCollection);
        if(cat){
            return getDocs(q);
        } else{
            return getDocs(itemCollection);
        }
    }

    useEffect (() => {
        getData(id)
            .then(snapshot => {
                setProducts(snapshot.docs.map(doc => { return {...doc.data(), id: doc.id} }))
            })

    }, [id])

    return (
        <div className="itemListContainer">
            <ItemList productos={products}/>
        </div>
    );
};

export default ItemListContainer;
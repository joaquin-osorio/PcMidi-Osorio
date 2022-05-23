import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where, limit } from "firebase/firestore"



const ItemDetailContainer = () => {

    const [item, setItem] = useState([{}]);
    const { id } = useParams();

    const getProduct = () => {
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        return getDocs(itemCollection);
    }


    useEffect(() => {
        getProduct()
            .then(snapshot => {
                const products = snapshot.docs.map(doc => { return {...doc.data(), id: doc.id} });
                setItem(products.filter(i => i.id == id));
            })
    }, [id]);

    return (
        <div>
            <ItemDetail
                item={item[0]}
                title={item[0].title} 
                price={item[0].price} 
                pictureURL={item[0].picURL}
                description={item[0].desc}
                />
        </div>
    );
};

export default ItemDetailContainer;
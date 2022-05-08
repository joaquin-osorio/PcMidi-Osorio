import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import getItem from '../../services/getItem';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {
        getItem
            .then(res => {
                setItem(res);
            })
    }, []);

    return (
        <div>
            <ItemDetail 
                title={item.title} 
                price={item.price} 
                pictureURL={item.pictureURL}
                description={item.description}
                />
        </div>
    );
};

export default ItemDetailContainer;
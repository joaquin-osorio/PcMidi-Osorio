import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import getData from '../../services/getData';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getData
            .then(res => {
                setItem(res[id]);
                console.log(id);
            })
    }, [id]);

    return (
        <div>
            <ItemDetail
                title={item.title} 
                price={item.price} 
                pictureURL={item.pictureURL}
                description={item.desc}
                />
        </div>
    );
};

export default ItemDetailContainer;
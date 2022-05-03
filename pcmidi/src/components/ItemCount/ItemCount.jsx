import React, {useState} from 'react';
import './ItemCount.css'

const ItemCount = ({initial, stock}) => {
    const [n, setN] = useState(initial);
    return (
        <div className="itemCountContainer">
            <div className="inputContainer">
                <button className="opButton" onClick={()=>setN(n > 1 ? n - 1 : n)}>-</button>
                <input type="text" value={n}/>
                <button className="opButton" onClick={()=>setN(n < stock ? n + 1 : n)}>+</button>
            </div>
            <button className="cartButton">Añadir al Carrito</button>
        </div>
    );
};

export default ItemCount;
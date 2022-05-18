import { createContext, useState } from "react";

const cartContext = createContext({
    products: []
});

export const CartContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);

    const addProduct = (product, quantity) => {
        // setProductList([product, ...productList]);
        let tempArray = [];
        for (let i = 0; i < quantity; i++){
            tempArray.push(product);
        }
        setProductList([...tempArray, ...productList]);
    }

    const removeProduct = (id) => {
        setProductList(productList.filter(i => i.id !== id));
    }

    const clear = () =>{
        setProductList([]);
    }

    const isInCart = (id) => {
        if (productList.filter(i => i.id == id).length > 0){
            return true;
        }
        else{
            return false;
        }
    }

    return(
        <cartContext.Provider value={{
            products: productList,
            addProduct: addProduct,
            removeProduct: removeProduct,
            clear: clear,
            isInCart: isInCart
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext
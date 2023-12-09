import { useContext } from 'react';
import ShoppingCartContext from "./ShoppingCart.Context"


const useShoppingCart = () => {
    const shoppingCartContext = useContext(ShoppingCartContext);
/* 
    if ( shoppingCartContext === null ){
        throw new Error("useShoppingCart() can be use only in the context of a <ShoppingCartProvider> component");
    } */

    return shoppingCartContext;
}

export default useShoppingCart;
import { createContext } from "react";
import { ShoppingCartContext } from "./ShoppingCart.types";

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export default ShoppingCartContext;

import { useContext } from "react";
import { DataContext, CartContext } from "./allContext";

export const useData = () => useContext(DataContext);
export const useCart = () => useContext(CartContext);

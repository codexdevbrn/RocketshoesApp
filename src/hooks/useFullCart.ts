import { useMemo } from "react";
import { ProductTypes } from "../@types/productTypes";
import { useCart } from "./useCart";
import { useProducts } from "./useProducts";



export interface FullCartItem {
  product: ProductTypes;
  amount: number;
}

export function useFullCart(): FullCartItem[] | null {
  const products = useProducts();
  const cartItems = useCart();

  const fullCartItems = useMemo((): FullCartItem[] | null => {
    if (!products) {
      return [];
    }
    return (
      cartItems
        .map(item => ({
          amount: item.amount,
          product: products.find(product => product.id === item.productsId)!,
        }))
    );
  }, [cartItems, products]);

  return fullCartItems;
}
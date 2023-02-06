import { fetchWrapper } from "./fetchWrapper";
import { ProductTypes, StockTypes } from "../@types/productTypes";

export interface ProductsResponse {
  products: Array<ProductTypes>
}

export interface StockAmount {
  stock: Array<StockTypes>
}

export function fetchProducts(options?: RequestInit) {
  return fetchWrapper<ProductsResponse>('http://localhost:3333/products', options);
}

export function fetchStock(options?: RequestInit) {
  return fetchWrapper<StockAmount>('http://localhost:3333/stock', options);
}
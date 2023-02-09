import { fetchWrapper } from "./fetchWrapper";
import { ProductTypes, StockTypes } from "../@types/productTypes";

export interface ProductsResponse {
  products: ProductTypes[]
}

export interface StockResponse {
  stock: Array<StockTypes>
}

export function fetchProducts(options?: RequestInit) {
  return fetchWrapper<ProductsResponse>(`http://10.1.12.203:3333/products`, options);
}

export function fetchStock(options?: RequestInit) {
  return fetchWrapper<StockResponse>('http://10.1.12.203:3333/stock', options);
}
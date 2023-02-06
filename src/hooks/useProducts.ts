import { useSelector } from "../features/hooks/hook";
import { selectProducts } from "../features/cart/productSlice";

export function useProducts() {
  return useSelector(selectProducts);
}
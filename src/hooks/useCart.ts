import { useSelector } from "../features/hooks/hook";
import { selectCartItems} from "../features/cart/cartSlice";

export function useCart() {
  return useSelector(selectCartItems);
}
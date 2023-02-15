import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductTypes } from '../../@types/productTypes';
import type { RootState } from '../store';

interface CartItem {
  productsId: ProductTypes['id']
  amount: number;
}

export interface CartState {
  item: CartItem[]
}

const initialState: CartState = {
  item: [],
}


type AddToCart = PayloadAction<{ productsId: ProductTypes['id'] }>;
type RemoveToCart = PayloadAction<{ productsId: ProductTypes['id'] }>;
type UpdateCartQuantity = PayloadAction<{
  productsId: ProductTypes['id'];
  amount: number;
}>;

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: AddToCart) => {
      const { productsId } = action.payload;

      const isAlreadyInCart = state.item.some(
        item => item.productsId === productsId,
      );

      if (!isAlreadyInCart) {
        state.item.push({
          productsId,
          amount: 1,
        });
      }
    },
    removeProduct: (state, action: RemoveToCart) => {
      state.item = state.item.filter(
        item => item.productsId !== action.payload.productsId,
      );

    },
    updatedAmount: (state, action: UpdateCartQuantity) => {
      const { productsId, amount } = action.payload;

      const stateInitial = state.item.findIndex(item => item.productsId === productsId);

      if (stateInitial >= 0) {
        state.item[stateInitial].amount = amount;
      }
    }
  },
}
);

export const cartSliceName = cartSlice.name;
export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
export const selectCartItems = (state: RootState) => state.cart.item;
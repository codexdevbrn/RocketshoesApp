import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../service/api';

interface CartProps {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
};

interface CartState {
  products: CartProps[]
  amount: 0
}

export const fetchProducts = createAsyncThunk('products/feth', async () => {
  try {
    const response = await api.get<CartProps[]>('products');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState: CartState = {
  products: [],
  amount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload.product);
    },
    removeItem: (state, action) => {
      const productIndex = state.products.findIndex(
        product => product.id === action.payload.id);

      if (productIndex >= 0) {
        state.products.splice(productIndex, 1);
      }
    },
    updatedSucess: (state, action) => {
      const productIndex = state.products.findIndex(product => product.id === action.payload.id);

      if (productIndex >= 0) {
        state.products[productIndex].amount = Number(action.payload.amount);
      }

    }
  },
});

export const { addProduct, removeItem, updatedSucess } = cartSlice.actions
export const cartReducer = cartSlice.reducer;
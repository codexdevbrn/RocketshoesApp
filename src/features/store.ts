import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit"
import { cartReducer, cartSliceName } from "./cart/cartSlice"
import { productsReducer, productsSliceName } from "./cart/productSlice";

const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: {
    [cartSliceName]: cartReducer,
    [productsSliceName]: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
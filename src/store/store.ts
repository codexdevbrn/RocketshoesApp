import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from '@redux-saga/core'
import { cartReducer } from "../features/cart/cartSlice"

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    product: cartReducer,
  }, middleware: [sagaMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
import { put, select, all, call, takeLatest } from 'redux-saga/effects';
import api from '../service/api';
import { addProduct, updatedSucess } from '../features/cart/cartSlice';
/* import { formatPrice } from '../utils/format'; */
import { Alert } from 'react-native';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware()

function* addToCart(action: ReturnType<typeof addProduct>) {
  const products = yield select(state => state.products.data);
  const productExists = products.find(product => product.id === action.payload);

  if (!productExists) {
    try {
      const stock = yield call(api.get, `/stock/${action.payload}`);

      const stockAmount = stock.data.amount;
      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if (amount > stockAmount) {
        Alert.alert('Quantidade solicitada fora de estoque');
        return;
      }

      if (productExists) {
        yield put(addProduct(action.payload.id));
      } else {
        const response = yield call(api.get, `/products/${action.payload.id}`);

        const data = {
          ...response.data,
          amount: 1,
          /* priceFormatted: formatPrice(response.data.price), */
        };
        yield put(addProduct(data));
      }
    } catch (e) {
      /* yield put(e.message); */
    }
  }
}

/* function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
} */

function* productSaga() {
  yield takeLatest(addProduct.type, addToCart)
}

function* rootSaga() {
  yield all([productSaga()]);
}

sagaMiddleware.run(rootSaga);

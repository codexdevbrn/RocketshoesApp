import React, {useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';

import { useDispatch } from 'react-redux';
import { useProducts } from '../../hooks/useProducts';
import { productsActions } from '../../features/cart/productSlice';

import api from '../../utils/fecthProducts';

import { Product } from '../../components/Product';
import { formatPrice } from '../../utils/format';

function Home() {

  const products = useProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/products').then(
      response => {
        dispatch(
          productsActions.setProducts({
            products: response.data.map((product: { price: number; }) => ({
              ...product,
              price: formatPrice(product.price),
            }))
          })
        )
      }
    ).catch(error => {
      console.log(error)
    });
  }, [dispatch]);

  console.log(products)
  return (
    <SafeAreaView>
      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product product={item} />
        )}
        horizontal />
    </SafeAreaView>
  );
}

export default Home;
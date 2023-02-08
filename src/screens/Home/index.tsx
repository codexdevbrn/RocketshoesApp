import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { useProducts } from '../../hooks/useProducts';

import { fetchProducts } from '../../utils/fecthProducts';
import { productsActions } from '../../features/cart/productSlice';

import { Product } from '../../components/Product';


function Home() {

  const products = useProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts({ signal: controller.signal }).then(
      response => {
        dispatch(
          productsActions.setProducts({
            products: response.products.map(product => ({
              ...product,
              price: Number(product.price),
            }))
          })
        )
      }
    ).catch(error => {
      console.log(error)
    });

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <SafeAreaView>
      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Product product={item} amount={0} />
        )}
        horizontal />
    </SafeAreaView>
  );
}

export default Home;

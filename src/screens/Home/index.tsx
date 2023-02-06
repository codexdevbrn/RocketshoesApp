import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { useProducts } from '../../hooks/useProducts';
import {  } from '../../features/cart/cartSlice';

import {
  Product,
  ProductImg,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

import { formatPrice } from '../../utils/format';
import { fetchProducts } from '../../utils/fecthProducts';
import { productsActions } from '../../features/cart/productSlice';


function Home() {

  const [productsLoad, setProductsLoad] = useState([]);

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

  function renderProduct({ item }) {
    return (
      <Product key={item.id}>
        <ProductImg source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
      <ProductPrice>{formatPrice(item.price)}</ProductPrice>
        <AddButton onPress={() => handleAddProduct}>
          <ProductAmount>
            <Entypo name='shopping-cart' color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}
            </ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={productsLoad}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
        horizontal />
    </SafeAreaView>
  );
}

export default Home;

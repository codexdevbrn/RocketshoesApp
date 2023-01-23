import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hook';
import { addProduct } from '../../features/cart/cartSlice';

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

function Home() {

  const { products, amount } = useAppSelector((state) => state.product);
  const dispatch = useDispatch();

  function handleAddProduct() {
    dispatch(addProduct(products));
  }

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
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
        horizontal />
    </SafeAreaView>
  );
}

export default Home;

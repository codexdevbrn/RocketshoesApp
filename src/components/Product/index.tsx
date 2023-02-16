import React from 'react';
import {
  AddButton,
  AddButtonText,
  ProductAmount,
  ProductAmountText,
  ProductImg,
  ProductPrice,
  ProductTitle,
  Products
} from './styles';

import { formattedValue } from '../../utils/format';
import { useDispatch } from '../../features/hooks/hook';
import { ProductTypes } from '../../@types/productTypes';
import { cartActions } from '../../features/cart/cartSlice';

import { useFullCart } from '../../hooks/useFullCart';
import Entypo from 'react-native-vector-icons/Entypo'

export interface ProductProps {
  product: ProductTypes;
}

export function Product({ product }: ProductProps) {

  const cart = useFullCart();
  const dispatch = useDispatch();

  function handleAddProduct() {
    dispatch(cartActions.addProduct({
      productsId: product.id,
    }),
    );
  }
  return (
    <>
      <Products key={product.title}>
        <ProductImg source={{ uri: product.image }} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{formattedValue(product.price)}</ProductPrice>
        <AddButton onPress={handleAddProduct}>
          <ProductAmount>
            <Entypo name='shopping-cart' color="#FFF" size={20} />
            <ProductAmountText>{cart?.length || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Products>
    </>
  );
}
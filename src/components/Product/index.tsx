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

import { formatPrice } from '../../utils/format';
import { useDispatch } from '../../features/hooks/hook';
import { ProductTypes } from '../../@types/productTypes';
import { cartActions } from '../../features/cart/cartSlice';
import * as Entypo from 'react-native-vector-icons/Entypo';
import { useCart } from '../../hooks/useCart';

export interface ProductProps {
  product: ProductTypes;

}

export function Product( {product}: ProductProps) {

  const cart = useCart();
  const dispatch = useDispatch();

  function handleAddProduct() {
    dispatch(cartActions.addProduct({
      productsId: product.id,
    }))
  }
  return (
    <>
      <Products key={product.title}>
        <ProductImg source={{ uri: product.image }} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>{formatPrice(product.price)}</ProductPrice>
        {/* <AddButton onPress={() => handleAddProduct}>
          <ProductAmount>
            <Entypo name='shopping-cart' color="#FFF" size={20} />
            <ProductAmountText>{amount[product.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton> */}
      </Products>
    </>
  );
}
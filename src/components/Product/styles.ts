import styled from 'styled-components/native';
import { THEME } from '../../theme';
import { darken } from 'polished';

export const Products = styled.View`
  background: ${THEME.COLORS.WHITE};
  padding: 10px;
  margin: 15px;
  border-radius: 4px;
  width: 220px;
`;

export const ProductImg = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: ${THEME.COLORS.PRIMARY};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.03, THEME.COLORS.PRIMARY)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
import { formatNumber } from 'react-native-currency-input';

export function formattedValue(price: number){
  if (isNaN(price)) {
    return 'Invalid value';
  }
 return formatNumber(price, {
  separator: ',',
  prefix: 'R$ ',
  precision: 2,
  delimiter: '.',
  signPosition: 'beforePrefix',
})};
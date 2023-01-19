import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';
import { THEME } from '../../theme';
import { Entypo } from '@expo/vector-icons';
import { Image, Container, CartButton } from './styles';

export function Header() {
  const navigation = useNavigation();

  function goBackHome() {
    navigation.navigate('home');
  }

  function goToCart() {
    navigation.navigate('cart');
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => goBackHome}>
        <Image source={logoImg} />
      </TouchableOpacity>
      <CartButton onPress={() => goToCart}>
        <Entypo
          name='shopping-basket'
          size={30}
          color={THEME.COLORS.WHITE}
        />
      </CartButton>
    </Container>
  );
}
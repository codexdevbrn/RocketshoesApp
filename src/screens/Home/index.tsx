import { Container } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { formatPrice } from '../../utils/format';

import { Header } from '../../components/Header';

export function Home() {
  return (
    <Container>
      <Background>
        <SafeAreaView>
          <Header />
        </SafeAreaView>
      </Background>
    </Container>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import { Cart } from '../screens/Cart';
import { Header } from '../components/Header';

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        header: () => <Header />
      }}
    >
      <Screen name='home' component={Home} />
      <Screen name='cart' component={Cart} />
    </Navigator>
  );
}

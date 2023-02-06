import React, { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { Provider } from 'react-redux';
import './src/config/ReactotronConfig';

import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { store } from './src/features/store';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <>
      <Provider store={store}>
        <Background>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          {fontsLoaded ? <Routes /> : <Loading />}
        </Background>
      </Provider>
    </>
  );
}

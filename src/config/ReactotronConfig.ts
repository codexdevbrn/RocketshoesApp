import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin({ except: [''] }))
    .useReactNative()
    .connect();

  tron.clear!();
  console.tron = tron;
}
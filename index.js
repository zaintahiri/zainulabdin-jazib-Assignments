/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import messaging from '@react-native-firebase/messaging';
// const store = createStore(
//     allReducers,
//   );

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  messaging().getInitialNotification(
    async remoteMessage => {
        console.log('Message handled in the Kill mood', remoteMessage);
      }
  );
const AppRedux=()=>(
    <Provider store={store}>
        <App />
    </Provider>
)
AppRegistry.registerComponent(appName, () => AppRedux);

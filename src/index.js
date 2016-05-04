import {Actions, Scene, Router} from 'react-native-router-flux';
import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native';
import Login from './components/Login.js';
import Counter from './components/Counter.js';

class Carly extends React.Component {
  render() {
      return <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login"/>
      </Scene>
      </Router>
    }
}

AppRegistry.registerComponent('Carly', () => Carly);

// import React, { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import App from './containers/App';
// import configureStore from './configureStore';

// const store = configureStore();

// const Carly = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// AppRegistry.registerComponent('Carly', () => Carly);


import App from './containers/App';
import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import StatusBar from 'StatusBar'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './configureStore';

const store = configureStore();

const Carly = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


AppRegistry.registerComponent('Carly', () => Carly);

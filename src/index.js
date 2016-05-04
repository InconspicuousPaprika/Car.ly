import {Actions, Scene, Router} from 'react-native-router-flux';
import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Counter from './components/Counter.js';

class Carly extends React.Component {
  render() {
	  return <Router>
      <Scene key="root">
       	<Scene key="signin" component={Signup} title="Signup"/>
      	<Scene key="login" component={Login} title="Login"/>
      	<Scene key="counter" component={Counter} title="Counter"/>
      </Scene>
	  </Router>
	}
}

AppRegistry.registerComponent('Carly', () => Carly);



//import signupSubmitAction from '../actions/signupSubmitAction.js';
import signupAction from '../actions/signupActions.js';
import { validateSignup } from '../actions/signupSubmitAction';
import { connect } from 'react-redux';
import renderScene from '../index.js';
import App from '../containers/App.js';
import { Scene, Router, Actions } from 'react-native-router-flux'

import React, {
  Component,
  PropTypes,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  StatusBar
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  title: {
    marginBottom: 100,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontFamily: ''
  },
  emailInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#2c3e50',
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#e74c3c'
  },
  image: {
    alignSelf: 'center',
    marginBottom: 40
  },
  passwordInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginTop: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#2c3e50',
    backgroundColor: '#fff',
    borderRadius: 8,
    color: '#e74c3c'
  },

  placeholder: {
    color: '#e74c3c'
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },

  button: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#2c3e50',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  buttonSignUp: {
    color: 'red'
  },

  orText: {
    textAlign: 'center',
  },
});

@connect(state => ({
  signup: state.signup
}))

export default class Signup extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    signup: PropTypes.object.isRequired
  }

  handleChangeEmail(event) {
    let email = event.nativeEvent.text;
    this.props.dispatch(signupAction({ email: email }));
  }

  handleChangePassword(event) {
    let password = event.nativeEvent.text.trim();
    this.props.dispatch(signupAction({ password: password }));
  }

  handleSubmit() {
    this.props.dispatch(validateSignup({email: this.props.signup.email, password: this.props.signup.password}));
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image 
          style={styles.image}
          source={require('../assets/images/carly_logo_transparent.png')}
        />
        <TextInput placeholder={'email'} onChange={this.handleChangeEmail.bind(this)} autoCorrect={false} style={styles.emailInput}/>
        <TextInput placeholder={'password'} secureTextEntry={true} autoCorrect={false} onChange={this.handleChangePassword.bind(this)} style={styles.passwordInput}/>
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}><Text style={styles.buttonText}>Sign Up</Text></TouchableHighlight>
      </View>
    );
  }
}

module.exports = Signup;

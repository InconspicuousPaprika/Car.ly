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
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 2,
    padding: 0,
    width:300,
    marginTop: 400,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 100,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
    fontFamily: ''
  },
  emailInput: {
    height: 35,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
    color: 'white'
  },
  image: {
    alignSelf: 'center',
    marginBottom: 40
  },
  passwordInput: {
    height: 35,
    padding: 4,
    marginRight: 5,
    marginTop: 10,
    fontSize: 23,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 8,
    color: 'white'
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
    borderWidth: 3,
    borderRadius: 8,
    borderColor:'white',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  orText: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5
  },
  alertText: {
    textAlign: 'center',
    color: 'white'
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    textDecorationLine: 'underline'
  }
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

  handleLogin() {
    Actions.Login();
  }

  handleSubmit() {
    this.props.dispatch(validateSignup({email: this.props.signup.email, password: this.props.signup.password}));
  }

  render() {
    var text = this.props.signup.validSignup ? null : 'You already have an account!';
    return (
        <Image 
          source={require('../assets/images/carlytrip.jpg')}
          style={styles.container}
        >
        <View style={styles.mainContainer}>
        <Text style={[this.props.signup.validSignup ? null : styles.alertText]}>{text}</Text>
        <TextInput placeholder={'email'} 
        onChange={this.handleChangeEmail.bind(this)} 
        autoCorrect={false} 
        style={styles.emailInput}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        />
        <TextInput placeholder={'password'} 
        secureTextEntry={true} 
        autoCorrect={false} 
        onChange={this.handleChangePassword.bind(this)} 
        style={styles.passwordInput}
        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
        />
        <TouchableHighlight style={styles.button} 
        onPress={this.handleSubmit.bind(this)}>
        <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
        <Text style={styles.orText}>
        Already have an account?</Text>
        <TouchableHighlight onPress={this.handleLogin.bind(this)}>
        <Text style={styles.loginText}>Login</Text></TouchableHighlight>
        </View>
        </Image>
    );
  }
}

module.exports = Signup;

import loginActions from '../actions/loginActions';
import faceBookAction from '../actions/faceBookAction';
import favoritesActions from '../actions/favoritesActions';
import { connect } from 'react-redux';
import { validateLogin } from '../actions/sendPostDataLoginAction';
import { Actions } from 'react-native-router-flux';
import FBLogin from './fbLogin';
// var FBLogin = require('react-native-facebook-login');
// var FBLoginManager = require('NativeModules').FBLoginManager;
// var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
// import FBLogin from './FBL.js';


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
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  emailInput: {
    height: 35,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 3,
    borderColor: 'white',

    borderRadius: 8,
    color: '#e74c3c'
  },
  image: {
    alignSelf: 'center',
    marginBottom: 40,
    height: 200,

  },
  passwordInput: {
    height: 35,
    padding: 4,
    marginRight: 5,
    marginTop: 10,
    fontSize: 23,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 8,
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
  },
  orText: {
    textAlign: 'center',
  },

  alertText: {
    textAlign: 'center',
    color: 'red'
  }
});


@connect(state => ({
  login: state.login,
  favorites: state.favorites
}))


export default class Login extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired
  }


  handleChangeEmail(event) {
    let email = event.nativeEvent.text;
    this.props.dispatch(loginActions({ email: email }));
  }

  handleChangePassword(event) {
    let password = event.nativeEvent.text.trim();
    this.props.dispatch(loginActions({ password: password }));
  }

  handleSignup() {
    Actions.SignUp();
  }

  handleSubmit() {
    this.props.dispatch(validateLogin({email: this.props.login.email, password: this.props.login.password}));
    this.retrieveFavorites();
  }

  retrieveFavorites() {
    favorite = this.props.favorites;
    dispatch = this.props.dispatch;
    userEmail = this.props.login.email || this.props.login.facebookId;
    console.log('in retrieveFavorites', "email", userEmail);
    return fetch('http://localhost:3000/api/carly/favorites/'+userEmail, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      console.log("favorites", data.favorites);
      dispatch(favoritesActions({favoritesList: data.favorites}));
    })
  }

  render() {
    var text = this.props.login.isValidLogin ? null : 'Invalid email or password';
    return (
      <Image
      source={require('../assets/images/carlytrip.jpg')}
      style={styles.container}
      >
      <View style={styles.mainContainer}>
      <Text style={[this.props.login.isValidLogin ? null : styles.alertText]}>{text}</Text>
      <TextInput placeholder={'email'}
      autoCapitalize={'none'}
      onChange={this.handleChangeEmail.bind(this)}
      autoCorrect={false}
      style={styles.emailInput}
      />
      <TextInput placeholder={'password'}
      secureTextEntry={true}
      autoCorrect={false}
      onChange={this.handleChangePassword.bind(this)}
      style={styles.passwordInput}
      />
      <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
      <Text style={styles.buttonText}>Sign In</Text></TouchableHighlight>
      <Text style={styles.orText}>Or</Text>
      <FBLogin />
      <Text style={styles.orText}>
      Don't have an account yet?</Text>
      <TouchableHighlight onPress={this.handleSignup.bind(this)}>
      <Text style={styles.orText}>Signup</Text></TouchableHighlight>
      </View>
    </Image>


    );
  }
}
module.exports = Login;

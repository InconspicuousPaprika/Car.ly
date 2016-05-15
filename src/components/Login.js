import loginActions from '../actions/loginActions';
import { connect } from 'react-redux';
import { validateLogin } from '../actions/sendPostDataLoginAction';
import { Actions } from 'react-native-router-flux';

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
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#583759'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
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
  orText: {
    textAlign: 'center',
  }
});


@connect(state => ({
  login: state.login
}))

// class Alert extends Component {
//   handleAlert() {
//     if (!this.props.login.isValidLogin) {

//     }
//   }

//   render() {
//     return (  
//       <Text style={styles.alert}>Invalid email or password!</Text>
//     )
//   }
// }


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
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image 
          style={styles.image}
          source={require('../assets/images/carly_logo_transparent.png')}
        />
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
        <Text style={styles.orText}>
        Don't have an account yet?</Text> 
        <TouchableHighlight onPress={this.handleSignup.bind(this)}>
        <Text style={styles.orText}>Signup</Text></TouchableHighlight>
      </View>
    );
  }
}
module.exports = Login;

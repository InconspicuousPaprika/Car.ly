import loginActions from '../actions/loginActions';
import { connect } from 'react-redux';
import React, {
  Component,
  PropTypes,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image
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
    borderColor: '#48BBEC',
    backgroundColor: '#48BBEC',
    borderRadius: 8,
    color: 'white'
  },

  passwordInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    marginTop: 10,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#48BBEC',
    backgroundColor: '#48BBEC',
    borderRadius: 8,
    color: 'white'
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  orText: {
    textAlign: 'center',
  },
});


@connect(state => ({
  login: state.login
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
    let password = event.nativeEvent.text;
    let isPassword = true;
    this.props.dispatch(loginActions({ password: password, isPassword: isPassword }));
  }

  handleSubmit(event) {}

  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput placeholder={'email'}
          onChange={this.handleChangeEmail.bind(this)}
          style={styles.emailInput}
        />
        <TextInput placeholder={'password'}
          secureTextEntry={this.props.login.isPassword}
          onChange={this.handleChangePassword.bind(this)}
          style={styles.passwordInput}
        />
        <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text></TouchableHighlight>
        <Text style={styles.orText}>Or</Text>
        <Text style={styles.orText}>
        Don't have an account yet? Signup</Text>
      </View>
    );
  }
}
module.exports = Login;

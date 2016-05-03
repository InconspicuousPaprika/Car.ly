var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image
} = React;

var styles = StyleSheet.create({
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

class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: 'email',
      password: 'password',
      isLoading: false,
      error: false,
      isPassword: false
    }
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.nativeEvent.text,
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.nativeEvent.text, 
      isPassword: true
    });
  }

  handleSubmit(){
    this.setState({value: ''});
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput value={this.state.email} onChange={this.handleChangeEmail.bind(this)} style={styles.emailInput}/>
        <TextInput value={this.state.password} secureTextEntry={this.state.isPassword} onChange={this.handleChangePassword.bind(this)} style={styles.passwordInput}/>
        <TouchableHighlight style={styles.button}><Text style={styles.buttonText}>Sign In</Text></TouchableHighlight>
        <Text style={styles.orText}>Or</Text>
      </View>
    );
  }
}

module.exports = Login;





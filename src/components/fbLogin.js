var FBLoginManager = require('NativeModules').FBLoginManager;
import { getFacebookId, facebookSignIn, validateFBLogin} from '../actions/faceBookAction';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { isValidUser } from '../actions/sendPostDataLoginAction';

import React, {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  Component,
  PropTypes,
} from 'react-native';

@connect(state => ({
  fbLogin: state.login,
}))

export default class FbLogin extends Component {
 
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    fbLogin: PropTypes.object.isRequired,
  }

  updateView() {
    var _this = this;
    FBLoginManager.getCredentials(function(error, data){
      if (!error) {
        Actions.Search();
      } else {
        Actions.Login();
      }
    });
  }

  handleLogin() {
    var _this = this;
    FBLoginManager.login(function(error, data){
      if (!error) {
        _this.updateView();
        _this.props.dispatch(getFacebookId({facebookId: data.credentials.userId}));
        _this.props.dispatch(validateFBLogin({userId: _this.props.fbLogin.facebookId}));
      } else {
        console.log(error, data);
      }
    });
  }

  handleLogout() {
    var _this = this;
    FBLoginManager.logout(function(error, data){
      if (!error) {
        _this.props.dispatch(facebookSignIn({facebookId: null}))
      } else {
        console.log(error, data);
      }
    });
  }

  onPress(){
    var _this = this;
    _this.props.fbLogin.facebookId
      ? this.handleLogout()
      : this.handleLogin();

    this.props.onPress && this.props.onPress();
  }

  render() {
    var text = this.props.fbLogin.facebookId ? "Log out" : "Log in with Facebook";
    return (
      <View style={this.props.style}>
        <TouchableHighlight
          style={styles.container}
          onPress={this.onPress.bind(this)}
        >
          <View style={styles.FBLoginButton}>
            <Image style={styles.FBLogo} source={require('../assets/images/FB-f-Logo__white_144.png')} />
            <Text style={[styles.FBLoginButtonText, this.props.fbLogin.facebookId ? styles.FBLoginButtonTextLoggedIn : styles.FBLoginButtonTextLoggedOut]}
              numberOfLines={1}>{text}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FBLoginButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    height: 30,
    width: 175,
    paddingLeft: 2,

    backgroundColor: 'rgb(66,93,174)',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'rgb(66,93,174)',

    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  FBLoginButtonText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Helvetica neue',
    fontSize: 14.2,
  },
  FBLoginButtonTextLoggedIn: {
    marginLeft: 5,
  },
  FBLoginButtonTextLoggedOut: {
    marginLeft: 18,
  },
  FBLogo: {
    position: 'absolute',
    height: 14,
    width: 14,

    left: 7,
    top: 7,
  },
});

module.exports = FbLogin;
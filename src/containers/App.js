import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/Search';
import * as CounterActions from '../actions/searchActions';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Results from '../components/Results';

@connect(
  state => ({
  	login: state.login,
    signup: state.signup,
    counter: state.counter
  }),
  dispatch => bindActionCreators(CounterActions, dispatch)
)

export default class App extends Results {}


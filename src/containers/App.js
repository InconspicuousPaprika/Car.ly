import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import * as CounterActions from '../actions/searchActions';
import Login from '../components/Login';

@connect(
  state => ({
  	login: state.login,
    counter: state.counter
  }),
  dispatch => bindActionCreators(CounterActions, dispatch)
)
export default class App extends Counter {}

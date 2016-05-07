import { combineReducers } from 'redux';
import counter from './counter';
import search from './search';
import login from './login';
import signup from './signup';

export default combineReducers({
  counter,
  search,
  signup,
  login
});

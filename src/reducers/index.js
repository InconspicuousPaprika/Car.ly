import { combineReducers } from 'redux';
import search from './search';
import login from './login';
import signup from './signup';
import favorites from './favorites';

export default combineReducers({
  search,
  signup,
  login,
  favorites
});

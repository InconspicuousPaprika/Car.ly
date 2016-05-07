import { combineReducers } from 'redux';
import search from './search';
import login from './login';


export default combineReducers({
  search,
  login
});

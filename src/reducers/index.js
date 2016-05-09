import { combineReducers } from 'redux';
import search from './search';
import login from './login';
import signup from './signup';
import photos from './photos';

export default combineReducers({
  search,
  signup,
  login,
  photos
});

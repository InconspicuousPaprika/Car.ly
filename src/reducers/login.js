import { handleActions } from 'redux-actions';
import {SIGN_IN} from '../actions/loginActions.js';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: false,
  isPassword: false
}

export default handleActions ({
  SIGN_IN: (state, payload) => ({
    ...state,
    ...payload.payload
  })
}, initialState);






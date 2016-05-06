import {SIGN_IN_EMAIL, SIGN_IN_PASSWORD, SIGN_UP_EMAIL, SIGN_UP_PASSWORD} from '../actions/loginActions.js';
import { handleActions } from 'redux-actions';


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





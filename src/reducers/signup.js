import { handleActions } from 'redux-actions';
import {SIGN_UP} from '../actions/signupActions.js';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: false,
  isPassword: false
}

export default handleActions ({
  SIGN_UP: (state, payload) => ({
    ...state,
    ...payload.payload
  })
}, initialState);
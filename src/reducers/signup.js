import { handleActions } from 'redux-actions';
import {SIGN_UP} from '../actions/signupActions.js';
import {SIGN_UP_SUBMIT} from '../actions/signupSubmitAction.js';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: false,
  isPassword: false,
  signedUp: false
}

export default handleActions ({
  SIGN_UP: (state, payload) => ({
    ...state,
    ...payload.payload
  })
}, initialState);

export default handleActions ({
  SIGN_UP_SUBMIT: (state, payload) => ({
    ...state,
    ...payload.payload
  })
}, initialState);
import { handleActions } from 'redux-actions';
import {SIGN_UP} from '../actions/signupActions.js';
import {VALID_SIGNUP, INVALID_SIGNUP, SEND_POST_SIGNUP} from '../actions/signupSubmitAction.js';

const initialState = {
  email: '',
  password: '',
  validSignup: false
}

export default handleActions ({
  SIGN_UP: (state, payload) => ({
    ...state,
    ...payload.payload
  }),

  SEND_POST_SIGNUP: (state, payload) => ({
    ...state,
    ...payload.signupField
  }),

  VALID_SIGNUP: (state, payload) => ({
    ...state,
    ...payload.signUpResponse
  }),

  INVALID_SIGNUP: (state, payload) => ({
    ...state,
    ...payload.signUpResponse
  }),

}, initialState);

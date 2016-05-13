import { handleActions } from 'redux-actions';
import {SIGN_IN} from '../actions/loginActions.js';
import {SEND_POST_LOGIN, VALID_USER, INVALID_USER} from '../actions/sendPostDataLoginAction.js'

const initialState = {
  email: '',
  password: '',
  isValidLogin: false,
}

export default handleActions ({
  SIGN_IN: (state, payload) => ({
    ...state,
    ...payload.payload
  }),

  SEND_POST_LOGIN: (state, payload) => ({
    ...state,
    ...payload.loginFields
  }),

  VALID_USER: (state, payload) => ({
    ...state,
    ...payload.validLogin
  }),

  INVALID_USER: (state, payload) => ({
    ...state,
    ...payload.validLogin
  }),
}, initialState)






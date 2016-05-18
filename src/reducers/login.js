import { handleActions } from 'redux-actions';
import {SIGN_IN} from '../actions/loginActions.js';
import {SEND_POST_LOGIN, VALID_USER, INVALID_USER} from '../actions/sendPostDataLoginAction.js';
import {FACEBOOK_SIGNIN, FACEBOOK_ID} from '../actions/faceBookAction.js';

const initialState = {
  email: '',
  password: '',
  user: null,
  isValidLogin: false,
  facebookId: null,
  signedInWithFacebook: null
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

  FACEBOOK_ID: (state, payload) => ({
    ...state,
    ...payload.user_id
  }),

  FACEBOOK_SIGNIN: (state, payload) => ({
    ...state,
    ...payload.user
  })

}, initialState)






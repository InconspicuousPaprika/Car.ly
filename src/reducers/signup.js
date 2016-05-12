import { handleActions } from 'redux-actions';
import {SIGN_UP} from '../actions/signupActions.js';
import {SIGN_UP_SUBMIT} from '../actions/signupSubmitAction.js';

const initialState = {
  email: '',
  password: '',
  signedUp: false
}

export default handleActions ({
  SIGN_UP: (state, payload) => ({
    ...state,
    ...payload.payload
  }),

  SIGN_UP_SUBMIT: (state, payload) => ({
    ...state,
    ...state
  })
}, initialState);

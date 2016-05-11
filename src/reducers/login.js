import { handleActions } from 'redux-actions';
import {SIGN_IN} from '../actions/loginActions.js';
import {SEND_POST_LOGIN} from '../actions/sendPostDataLoginAction.js'

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
  }),

	SEND_POST_LOGIN: (state, payload) => ({
		...state,
		...payload.payload
	})
}, initialState);






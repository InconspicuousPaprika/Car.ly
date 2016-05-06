import {SIGN_IN_EMAIL, SIGN_IN_PASSWORD, SIGN_UP_EMAIL, SIGN_UP_PASSWORD} from '../actions/loginActions.js';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: false,
  isPassword: false
}

simpleAction = {
  type: 'SOME_TYPE',
  email: 'someeamil@somewhere.com',
}

function SignIn(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      })
    default:
      return state
  }
}




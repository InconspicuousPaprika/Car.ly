import {loginActions} from '../actions/loginActions.js';

const initialState = {
  email: '',
  password: '',
  isLoading: false,
  error: false,
  isPassword: false
}

function SignIn(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_EMAIL:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}




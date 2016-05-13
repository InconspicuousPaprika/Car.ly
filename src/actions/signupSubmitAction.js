import { createAction } from 'redux-actions';
import backend from '../service/backend.js';

export const VALID_SIGNUP = 'VALID_SIGNUP';
export const INVALID_SIGNUP = 'INVALID_SIGNUP';
export const SEND_POST_SIGNUP = 'SEND_POST_SIGNUP';

export function newUser(signUpResponse) {
	return {
		type: VALID_SIGNUP,
    signUpResponse,
	}
}

export function userAlreadyExists(signUpResponse) {
	return {
		type: INVALID_SIGNUP,
    signUpResponse
	}
}

export function sendPostSignup(signupField) {
	return {
		type: SEND_POST_SIGNUP,
		signupField
	}
}

export function validateSignup(signupField) {
  return dispatch => {
    dispatch(sendPostSignup(signupField))
    return fetch('http://localhost:3000/api/carly/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signupField.email,
        password: signupField.password,
      })
    }).then(function(response) {
    	if (response.status === 201) {
    		dispatch(newUser({validSignup: true}))
    	} else {
    		dispatch(userAlreadyExists({validSignup: false}))
    	}
    })
  }
}



//export default createAction('SIGN_UP_SUBMIT', async (emailAndPassword) => await backend.submitUserData(emailAndPassword));
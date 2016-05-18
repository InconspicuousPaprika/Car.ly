import { createAction } from 'redux-actions';

export const FACEBOOK_SIGNIN = 'FACEBOOK_SIGNIN';
export const FACEBOOK_ID = 'FACEBOOK_ID';


export function getFacebookId(user_id) {
	return {
		type: FACEBOOK_ID,
		user_id
	}
}

export function facebookSignIn(attemptedFBLogin) {
	return {
		type: FACEBOOK_SIGNIN,
    attemptedFBLogin
	}
}


export function validateFBLogin(userInfo) {
  return dispatch => {
    dispatch(facebookSignIn(userInfo))
    return fetch('http://localhost:3000/api/carly/users/FbLogin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: userInfo.userId
      })
    }).then((response) => response.json());
  }
}




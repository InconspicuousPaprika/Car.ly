import { createAction } from 'redux-actions';

export const FACEBOOK_SIGNIN = 'FACEBOOK_SIGNIN';
export const FACEBOOK_ID = 'FACEBOOK_ID';


export function getFacebookId(user_id) {
	return {
		type: FACEBOOK_ID,
		user_id
	}
}

export function facebookSignIn(user) {
	return {
		type: FACEBOOK_SIGNIN,
		user
	}
}


// export function validateFBLogin(userInfo) {
//   return dispatch => {
//     dispatch(facebookSignIn(userInfo))
//     return fetch('http://localhost:3000/api/carly/users/FbLogin', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: emailAndPassword.email,
//         password: emailAndPassword.password,
//       })
//     }).then((response) => response.json())
//       .then((responseData) => {
//         console.log(JSON.stringify(responseData.token));
//         if (responseData.success) {
//           dispatch(isValidUser({isValidLogin: true}));
//           AsyncStorage.setItem('key', JSON.stringify(responseData.token));
//           Actions.Search();
//       	} else {
//       		dispatch(InvalidUser({isValidLogin: false}))
//       	}
//       })
//       .done();
//   }
// }




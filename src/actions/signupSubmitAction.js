import { createAction } from 'redux-actions';
import backend from '../service/backend.js';

// export 'VALID_SIGNUP';
// export 'INVALID_SIGNUP';
// export 'ATTEMPTED_SIGNUP';


// function signUpPost(userData) {
//   return {
//     type: 'ATTEMPTED_SIGNUP',

//   }
// }


export default createAction('SIGN_UP_SUBMIT', async (emailAndPassword) => await backend.submitUserData(emailAndPassword));


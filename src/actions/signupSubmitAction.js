import { createAction } from 'redux-actions';
import backend from '../service/backend.js';
import thunk from 'redux-thunk';
// export default createAction('SIGN_UP_SUBMIT', async (emailAndPassword) => 
//     { console.log("HELLO", await backend.submitUserData(emailAndPassword));
//     await backend.submitUserData(emailAndPassword)});

export default createAction('SIGN_UP_SUBMIT', (emailAndPassword) => backend.submitUserData(emailAndPassword));


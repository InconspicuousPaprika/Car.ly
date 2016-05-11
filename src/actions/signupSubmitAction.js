import { createAction } from 'redux-actions';
import backend from '../service/backend.js';
// import thunk from 'redux-thunk';

export default createAction('SIGN_UP_SUBMIT', async (emailAndPassword) => await backend.submitUserData(emailAndPassword));


import { createAction } from 'redux-actions';
import backend from '../service/backend.js';

export default createAction('SIGN_UP', (signUpFields) => signUpFields);

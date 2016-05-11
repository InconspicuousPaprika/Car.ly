import { createAction } from 'redux-actions';
import backend from '../service/backend.js';

export default createAction('SEND_POST_LOGIN', async (loginFields) => await backend.login(loginFields));
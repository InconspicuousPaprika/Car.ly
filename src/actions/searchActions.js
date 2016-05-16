import { createAction } from 'redux-actions';
import backend from '../service/backend.js';


export default createAction(
  'GET_CARDATA',
  async (searchQuery) => await Promise.all([backend.getCarData(searchQuery), backend.getTrueCarData(searchQuery)])
);

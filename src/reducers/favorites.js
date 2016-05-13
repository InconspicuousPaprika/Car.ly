import { handleActions } from 'redux-actions';
import {MAKE_FAVORITE} from '../actions/resultsListActions.js';

const initialState = {
  favorite: '',
  isLoading: false,
}

export default handleActions ({
  MAKE_FAVORITE: (state, payload) => ({
    ...state,
    ...payload.payload
  }),
}, initialState);// import { handleActions } from 'redux-actions';

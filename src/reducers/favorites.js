import { handleActions } from 'redux-actions';
import {MAKE_FAVORITE} from '../actions/resultsListActions.js';
import {MAKE_FAVORITES} from '../actions/favoritesActions.js';

const initialState = {
  favorite: '',
  favorites: [],
  isLoading: false,
}

export default handleActions ({
  MAKE_FAVORITE: (state, payload) => ({
    ...state,
    ...payload.payload
  }),
  MAKE_FAVORITES: (state, payload) => ({
    ...state,
    ...payload.payload
  }),
}, initialState);// import { handleActions } from 'redux-actions';

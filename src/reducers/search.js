import { handleActions } from 'redux-actions';

const initialState = {
  cars: [],
  loading: true,
};


export default handleActions({
  GET_CARDATA: (state, { payload }) => ({ ...state, cars: payload, loading: false })
}, initialState);

import { handleActions } from 'redux-actions';

const initialState = {
  query: {
    carMake: 'cadillac',
    modelIndex: 3,
    value: 0,
    sliderLeft:1990,
    sliderRight:2017,
    minPrice:1000,
    maxPrice:150000,
    zipcode:'',
    model: ''
  },
  loading: true,
};


export default handleActions({
  GET_CARDATA: (state, { payload }) => ({
    ...state,
    carMake: payload.carmake || 'cadillac',
    modelIndex: payload.modelIndex || 3,
    value: payload.value || 0,
    sliderLeft: payload.sliderLeft || 1990,
    sliderRight: payload.sliderRight || 2017,
    minPrice: payload.minPrice || 1000,
    maxPrice: payload.maxPrice || 150000,
    zipcode: payload.zipcode || '',
    model: payload.model || ''
  }),
  SET_QUERY: (state, { payload }) => ({ ...state, ...payload })
}, initialState);

import { handleActions } from 'redux-actions';

const initialState = {
  query: {
    carMake: 'cadillac',
    value: 0,
    startYear:1990,
    endYear:2017,
    minPrice:1000,
    maxPrice:150000,
    zipcode:'',
    model: false
  },
  loading: true,
};


export default handleActions({
  GET_CARDATA: (state, { payload }) => ({
    ...state,
    carMake: payload.carmake,
    value: payload.value,
    sliderLeft: payload.sliderLeft,
    sliderRight: payload.sliderRight,
    minPrice: payload.minPrice,
    maxPrice: payload.maxPrice,
    zipcode: payload.zipcode,
    model: payload.model
  }),
  SET_QUERY: (state, payload) => ({ ...state, query:Object.assign({}, state.query, payload.payload )})
}, initialState);

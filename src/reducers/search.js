import { handleActions } from 'redux-actions';

const initialState = {
  carMake: 'cadillac',
  value: 0,
  startYear:1990,
  endYear:2017,
  minPrice:1000,
  maxPrice:150000,
  zipcode:'',
  model: 'Fleetwood',
  loading: false,
  modelIndex: 3,
  searchResults:[],
  allCars: {
    amc: {
      name: 'AMC',
      models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
    },
    alfa: {
      name: 'Alfa-Romeo',
      models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
    },
    aston: {
      name: 'Aston Martin',
      models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
    },
    audi: {
      name: 'Audi',
      models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
    },
    austin: {
      name: 'Austin',
      models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
    },
    borgward: {
      name: 'Borgward',
      models: ['Hansa', 'Isabella', 'P100'],
    },
    buick: {
      name: 'Buick',
      models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
      'Roadmaster', 'Skylark'],
    },
    cadillac: {
      name: 'Cadillac',
      models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
    },
    chevrolet: {
      name: 'Chevrolet',
      models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
      'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
    }
  }
};


export default handleActions({
  // GET_CARDATA: (state, { payload }) => ({
  //   ...state,
  //   ...payload.payload
  // }),
  GET_CARDATA: (state, action ) => ({ ...state, searchResults:[...action.payload.extractorData.data[0].group]}),
  SET_QUERY: (state, action) => ({
    ...state,
    ...action.payload })
}, initialState);

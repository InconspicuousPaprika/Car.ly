import { createAction } from 'redux-actions';
import backend from '../service/backend.js';


export default createAction(
  'GET_CARDATA',
   async (searchQuery) => await backend.getCarData(searchQuery)
);
// Actions:
// Logout
// Search with filters:
    // Make
    // Model
    // Miles
    // Year
    // Used vs New

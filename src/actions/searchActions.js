import { createAction } from 'redux-actions';
import backend from '../service/backend.js';


export default createAction(
  'GET_CARDATA',
  async (searchQuery) => {
    var rawResults = await Promise.all([backend.getCarData(searchQuery), backend.getTrueCarData(searchQuery)]);
    var combinedResults = rawResults.reduce((a,b)=>a.extractorData.data[0].group.concat(b.extractorData.data[0].group));
    console.log(rawResults);
    console.log(combinedResults);
    return combinedResults;
}
);

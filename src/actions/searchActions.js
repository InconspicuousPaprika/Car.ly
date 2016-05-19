import { createAction } from 'redux-actions';
import backend from '../service/backend.js';


export default createAction(
  'GET_CARDATA',
  async (searchQuery) => {
    var rawResults = await Promise.all([backend.getAutoTempestData(searchQuery)]);
    var combinedResults = rawResults.reduce((a,b)=>a.extractorData.data[0].group.concat(b.extractorData.data[0].group));
    return combinedResults.extractorData.data[0].group;
  });

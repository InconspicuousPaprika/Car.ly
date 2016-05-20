import { createAction } from 'redux-actions';
import backend from '../service/backend.js';

export default createAction(
  'GET_CARDATA',
  async (searchQuery) => {
    var rawResults = await Promise.all([backend.getAutoTempestData(searchQuery), backend.getTrueCarData(searchQuery)]);
    var combinedResults = rawResults.reduce((a,b)=>a.extractorData.data[0].group.concat(b.extractorData.data[0].group));
<<<<<<< d3f314e476758c53f3ead4e934a57b38912402af
    return combinedResults;
  });
=======
    return combinedResults.extractorData.data[0].group;
  }
);


>>>>>>> Added activity monitor

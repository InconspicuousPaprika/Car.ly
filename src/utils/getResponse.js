import Promise from 'bluebird';
import { ACTIVITY_INDICATOR, loading, CAR_DATA_REQUEST, requestedData} from '../actions/activityMonitoring.js';
import { Actions } from 'react-native-router-flux';
import { createAction } from 'redux-actions';


module.exports = {
  getResponse(response) {
  return Promise.resolve(response)
    .then((res) => res)
    .catch((err) => console.log(err));
  },

  getResponseJSON(response) {
  return Promise.resolve(response.json())
    .then((res) => {
    	console.log('RESP', res)
    	console.log(typeof res.pageData.statusCode);	
    	if (res.pageData.statusCode === 200) {
    		console.log('HIT');
    		Actions.Results();
    	} 
  	})
    .catch((err) => console.log(err));
  }
};


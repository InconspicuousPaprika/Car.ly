import config from '../../config.js';
import Search from '../components/Counter.js';
const {
  autotraderExtractor,
} = config;


module.exports = {
  getCarData(searchQuery) {
    console.log(searchQuery.model);
    return fetch(autotraderExtractor+`&url=http%3A%2F%2Fwww.autotrader.com%2Fcars-for-sale%2FUsed%2BCars%2F${searchQuery.carMake}%2F${searchQuery.model}%2F${searchQuery.zipcode}%3FendYear%3D${searchQuery.sliderRight}%26`, {
      method: 'GET',
    }).then((response)=> {
    return response.json();
    }).then((data) => {
    console.log(data);
    //  callback(data.extractorData.data[0].group);
    }).catch((err)=> {
      console.log('Error ', err);
    });
    }
    };

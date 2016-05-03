import config from '../../config.js';
import Search from '../components/Counter.js';
const {
  autotraderExtractor,
} = config;


module.exports = {
  getCarData(searchQuery) {
    return fetch(autotraderExtractor+`&url=http%3A%2F%2Fwww.autotrader.com%2Fcars-for-sale%2FUsed%2BCars%2F
      ${searchQuery.carMake}%2F
      ${searchQuery.carModel}%2F
      ${searchQuery.location.city}%2B
      ${searchQuery.location.zipcode}%3FendYear%3D
      ${searchQuery.location.maxPrice}%26`, {
        method: 'GET',
      }).then((res) => res.json());
  }
};

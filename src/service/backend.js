import fetch from 'node-fetch';
import config from '../../config.js';
const {
  autotraderExtractor,
} = config;


export default {

  getCarData(searchQuery) {
    return fetch(autotraderExtractor+`&url=http%3A%2F%2Fwww.autotrader.com%2Fcars-for-sale%2FUsed%2BCars%2F
      ${searchQuery.make}%2F
      ${searchQuery.model}%2F
      ${searchQuery.location.city}%2B
      ${searchQuery.location.zipcode}%3FendYear%3D
      ${searchQuery.location.endyear}%26`, {
        method: 'GET',
      }).then((res) => res.json());
  }
};

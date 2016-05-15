import Search from '../components/Search.js';
import getResponse from '../utils/getResponse';
import Promise from 'bluebird';
import React, { 
  AsyncStorage
} from 'react-native';


const autotraderExtractor = 'https://extraction.import.io/query/extractor/10caeb52-8a7c-45e9-9b87-b7082e199bce?_apikey=b8fa373b0b434ad58fe76cdba905bacd23afd0851eb1106f7091d985439eb6b540f6fa1a812be1cc126dd8ff85787b589fd469e76783efb262c7a2ca47170e594a3e0ee1e9a4176ea435e6c4c5050b65'



module.exports = {

  getCarData(searchQuery) {
    searchQuery.zipcode = 30022
    console.log(autotraderExtractor+
      `&url=http%3A%2F%2Fwww.autotrader.com%2Fcars-for-sale%2FUsed%2BCars%2F`+
      `${searchQuery.carMake}%2F`+
      `${searchQuery.model}%2F`+
      `${searchQuery.zipcode}%3FendYear%3D`+
      `${searchQuery.endYear}`);
    return fetch(autotraderExtractor+
      `&url=http%3A%2F%2Fwww.autotrader.com%2Fcars-for-sale%2FUsed%2BCars%2F`+
      `${searchQuery.carMake}%2F`+
      `${searchQuery.model}%2F`+
      `${searchQuery.zipcode}%3FendYear%3D`+
      `${searchQuery.endYear}`,{
        method:'GET',
      }).then(getResponse);
  },

  submitUserData(emailAndPassword) {
    return fetch('http://localhost:3000/api/carly/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailAndPassword.email,
        password: emailAndPassword.password,
      })
    }).then(getResponse)
  },

  login(emailAndPassword) {
    return fetch('http://localhost:3000/api/carly/users/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailAndPassword.email,
        password: emailAndPassword.password,
      })
    }).then(getResponse)
  }

  // obtainUserData(email) {
  //   return fetch('http://localhost:3000/api/carly/users/getID', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       email: email
  //     })
  //   }).then ((response) => {
  //     console.log('THE FUCKING RESPONSE', response.json());
  //     return response.json();
  //   }).catch((err) => {
  //     console.log('Error', err);
  //   })
  // }
};

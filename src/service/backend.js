// import config from '../../config.js';
import Search from '../components/Search.js';
// const {
//   autotraderExtractor,
// } = config;


module.exports = {

  // getCarData(searchQuery) {
  //   return fetch(`https://extraction.import.io/query/extractor/10caeb52-8a7c-45e9-9b87-b7082e199bce?_apikey=b8fa373b0b434ad58fe76cdba905bacd23afd0851eb1106f7091d985439eb6b540f6fa1a812be1cc126dd8ff85787b589fd469e76783efb262c7a2ca47170e594a3e0ee1e9a4176ea435e6c4c5050b65&url=http%3A%2F%2Fwww.autotrader.com%2Fcars-for-sale%2FUsed%2BCars%2F${searchQuery.carMake}%2F${searchQuery.model}%2F${searchQuery.zipcode}%3FendYear%3D${searchQuery.endYear}%26`, {
  //     method: 'GET',
  //   }).then(getResponse);
  // }

  getCarData(searchQuery) {
    return fetch(`https://extraction.import.io/query/extractor/10caeb52-8a7c-45e9-9b87-b7082e199bce?_apikey=b8fa373b0b434ad58fe76cdba905bacd23afd0851eb1106f7091d985439eb6b540f6fa1a812be1cc126dd8ff85787b589fd469e76783efb262c7a2ca47170e594a3e0ee1e9a4176ea435e6c4c5050b65&url=http%3A%2F%2Fwww.autotrader.com%2Fcars-for-sale%2FUsed%2BCars%2F${searchQuery.carMake}%2F${searchQuery.model}%2F${searchQuery.zipcode}%3FendYear%3D${searchQuery.endYear}%26`, {
      method: 'GET',
    }).then((response)=> {
      return response.json();
    }).then((data) => {
      console.log(data);
    //  callback(data.extractorData.data[0].group);
    // console.log(data.extractorData.data[0].group);
     return data.extractorData.data[0].group;
    }).catch((err)=> {
      console.log('Error ', err);
    });
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
    }).then ((response) => {
      console.log('THE FUCKING RESPONSE', response.json());
      return response.json();
    }).catch((err) => {
      console.log('Error', err);
    })
  }
};



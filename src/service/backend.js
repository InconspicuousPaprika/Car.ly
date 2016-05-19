import Search from '../components/Search.js';
import util from '../utils/getResponse';
import Promise from 'bluebird';
import React, {
  AsyncStorage
} from 'react-native';


const autotraderExtractor = 'https://extraction.import.io/query/extractor/10caeb52-8a7c-45e9-9b87-b7082e199bce?_apikey=b8fa373b0b434ad58fe76cdba905bacd23afd0851eb1106f7091d985439eb6b540f6fa1a812be1cc126dd8ff85787b589fd469e76783efb262c7a2ca47170e594a3e0ee1e9a4176ea435e6c4c5050b65'
const ebayExtractor = 'https://extraction.import.io/query/extractor/a2661922-6b18-4d16-add1-69773936241c?_apikey=b8fa373b0b434ad58fe76cdba905bacd23afd0851eb1106f7091d985439eb6b540f6fa1a812be1cc126dd8ff85787b589fd469e76783efb262c7a2ca47170e594a3e0ee1e9a4176ea435e6c4c5050b65'
const trueCarExtractor = 'https://extraction.import.io/query/extractor/61a0b22e-1197-438a-a49f-708c96696255?_apikey=b8fa373b0b434ad58fe76cdba905bacd23afd0851eb1106f7091d985439eb6b540f6fa1a812be1cc126dd8ff85787b589fd469e76783efb262c7a2ca47170e594a3e0ee1e9a4176ea435e6c4c5050b65'
const autoTempestExtractor = 'https://extraction.import.io/query/extractor/7a187e3b-9866-4a06-9bc9-69aeaef41f6e?_apikey=1a5572df59da4a00b33882c4ddd3fea53d9fb3033ae4ef5acd816c003c4988faa31e4f8d8359fdf2fc90fa779e8dbe76adc576eefcabfa2f66d52df4fe1f0a6cd610915ef3b0f81f1772133575adbbcc'

module.exports = {

  getCarData(searchQuery) {
    return fetch(autotraderExtractor+
      `&url=http%3A%2F%2Fwww.autotrader.com%2Fcars-for-sale%2FUsed%2BCars%2F`+
      `${searchQuery.carMake}%2F`+
      `${searchQuery.model}%2F`+
      `${searchQuery.zipcode}%3FendYear%3D`+
      `${searchQuery.endYear}`,{
        method:'GET',
      }).then(util.getResponseJSON);
  },

  getAutoTempestData(searchQuery) {
   searchQuery.zipcode = 30022;
   console.log('inside autoTempestExtractor');
   console.log(autoTempestExtractor+
`&url=http%3A%2F%2Fwww.autotempest.com%2Fresults%2F%3Fmake%3D`+
`${searchQuery.carMake}%26model%3D`+
`${searchQuery.model}%26radius%3D300%26zip%3D`+
`${searchQuery.zipcode}%26keywords%3D%26minyear%3D`+
`${searchQuery.startYear}%26maxyear%3D`+
`${searchQuery.endYear}%26domesticonly%3D1%26minprice%3D`+
`${searchQuery.minPrice}%26maxprice%3D`+
`${searchQuery.maxPrice}%26minmiles%3D%26maxmiles%3D%26transmission%3Dany%26bodystyle%3Dany%26saleby%3Dany`);
   return fetch(autoTempestExtractor+
`&url=http%3A%2F%2Fwww.autotempest.com%2Fresults%2F%3Fmake%3D`+
`${searchQuery.carMake}%26model%3D`+
`${searchQuery.model}%26radius%3D300%26zip%3D`+
`${searchQuery.zipcode}%26keywords%3D%26minyear%3D`+
`${searchQuery.startYear}%26maxyear%3D`+
`${searchQuery.endYear}%26domesticonly%3D1%26minprice%3D`+
`${searchQuery.minPrice}%26maxprice%3D`+
`${searchQuery.maxPrice}%26minmiles%3D%26maxmiles%3D%26transmission%3Dany%26bodystyle%3Dany%26saleby%3Dany`,{
        method:'GET',
      }).then(util.getResponseJSON);
  },

  getTrueCarData(searchQuery) {
    searchQuery.zipcode = 30022;
    return fetch(trueCarExtractor+
       `&url=https%3A%2F%2Fwww.truecar.com%2Fused-cars-for-sale%2Flistings%2F`+
       `${searchQuery.make}%2F`+
       `${searchQuery.model}%2Fyear-`+
       `${searchQuery.startYear}-${searchQuery.endYear}%2Flocation-`+
       `${searchQuery.zipcode}%2Fprice-`+
       `${searchQuery.minPrice}-${searchQuery.maxPrice}`,{
         method:'GET',
       }).then(util.getResponseJSON);
 },
 
 getEbayData(searchQuery){
   var year = '';
   for (var i = searchQuery.startYear; i < searchQuery.endYear; i+=1000) {
     year+=`%7C${i}`
   }
   return fetch(ebayExtractor+
     `&url=http%3A%2F%2Fwww.ebay.com%2Fsch%2FCars-Trucks%2F6001%2Fi.html%3F_fpos%3D`+
     `${searchQuery.zipcode}%26LH_Distance%3D`+
     `${searchQuery.zipcode}..200%26_fspt%3D1%26_dcat%3D6001%26makeval%3D$`+
     `${searchQuery.carMake}%26modelval%3D$`+
     `${searchQuery.model}%26Model%252520Year%3D`+
     `${year}%7C`+
     `${searchQuery.endYear}%26_sadis%3D25%26_stpos%3D$`+
     `${searchQuery.zipcode}%26LH_BIN%3D1%26_nkw%3D$`+
     `${searchQuery.carMake}%2520`+
     `${searchQuery.model}%26LH_PrefLoc%3D99%26_pppn%3Dr1%26scp%3Dce0`, {
       method:'GET',
     }).then(util.getResponseJSON)
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
    }).then(util.getResponse)
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
    }).then(util.getResponse)
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

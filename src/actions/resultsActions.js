import { createAction } from 'redux-actions';
import * as types from '../constants/searchActionTypes';
import photoSearch from '../api/photoSearch';
// import backend from '../service/backend.js';
import Promise from 'bluebird';

  function submitCarData(carData) {
    console.log('in submitCarData', carData);
    return fetch('http://localhost:3000/api/carly/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_email: carData.user_email,
        image: carData.image,
        make: carData.make,
        model: carData.model,
        year: carData.model,
        price: carData.model
      })
    })
      // .then(getResponse)
  }


function sendtoDB(response) {
 return Promise.resolve(response.json())
  .then((res) => {
    console.log("insendtoDB", res['id']);
    // const entry = getState().photos.photos[index];
    const carFields = {
      user_id: res['id'],
      image: 'entry.image[0].src',
      purchase_url:  'www.cars.com',
      make:  'Ford',
      model:  'Explorer',
    }; 
    submitCarData(carFields);
  })
}

export default createAction('SIGN_IN', (signInFields) => signInFields);

function searchWithPhotoAPI(keyword, page, dispatch) {
  if (page >= 2) {
    dispatch({
      type: types.SEARCH_PENDING_FOR_NEXT,
    });
  }else {
    dispatch({
      type: types.SEARCH_PENDING,
    });
  }

  photoSearch(keyword, page, (data) => {
    dispatch({
      type: types.SEARCH_DONE,
      photos: data,
      page,
      keyword,
    });
  });
}

function obtainUserData(email) {
    fetch('http://localhost:3000/api/carly/users/getID', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    }).then(sendtoDB)
  }

export function searchNextPageAction() {
  return (dispatch, getState) =>{
    const page = getState().photos.page + 1;
    const keyword = getState().photos.keyword;
    searchWithPhotoAPI(keyword, page, dispatch);
  };
}

export function searchPhotoAction(keyword, page = 1) {
  return (dispatch) => {
    searchWithPhotoAPI(keyword, page, dispatch);
  };
}

export function saveFavorite(item, index) {
  return (dispatch, getState) =>{  // event.preventDefault();
    console.log("test message");
    console.log('entryData', item);
    console.log('entryData', index);
    const entry = getState().photos.photos[index];
    const email = getState().signup.email || getState().login.email || "Test2";
    console.log(entry);
    console.log(email);
    obtainUserData(email);
    // console.log('id in saveFavorite', id);
  //   Promise.resolve(response.json())
  // .then((res) => console.log(res, (typeof res)))
        // dispatch({
    //   type: types.SEARCH_SAVE,
    //   entry: entryData
    // });
  }
}

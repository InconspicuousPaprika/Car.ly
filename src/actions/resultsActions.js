import * as types from '../constants/searchActionTypes';
import photoSearch from '../api/photoSearch';
// import backend from '../service/backend.js';

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
    }).then ((response) => {
      console.log('response', response);
      console.log('response.json', response.json());
      return response.json();
    }).catch((err) => {
      console.log('Error', err);
    })
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
    console.log(obtainUserData(email));
    // dispatch({
    //   type: types.SEARCH_SAVE,
    //   entry: entryData
    // });
  }
}

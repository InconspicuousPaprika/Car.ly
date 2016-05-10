import * as types from '../constants/searchActionTypes';
import photoSearch from '../api/photoSearch';

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

export function savePhoto(item, index) {
  // event.preventDefault();
  console.log("test message");
  console.log('entryData', item);
  console.log('entryData', index);
  const entry = getState().photos[index];
  console.log(entry);
  // dispatch({
  //   type: types.SEARCH_SAVE,
  //   entry: entryData
  // });
}

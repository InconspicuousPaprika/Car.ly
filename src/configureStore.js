import Immutable from 'immutable';
import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import promiseMiddleware from 'redux-promise';

const middlewares = [thunk];

let enhancer;
if (__DEV__) {
  const installDevTools = require('immutable-devtools');
  installDevTools(Immutable);

  const devTools = require('remote-redux-devtools');
  enhancer = compose(
    applyMiddleware(...middlewares, promiseMiddleware),
    devTools({
      name: Platform.OS,
      hostname: 'localhost',
      port: 5678
    })
  );
} else {
  enhancer = applyMiddleware(...middlewares);
}

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      // combines all the reducers in the file and attaches it to
      store.replaceReducer(require('./reducers'));
    });
  }
  return store;
}

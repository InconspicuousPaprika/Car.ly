import App from './containers/App';
import React, {AppRegistry, Navigator, StyleSheet, Text, View} from 'react-native';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Counter from './components/Counter.js';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './configureStore';

const store = configureStore();

const Carly = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
  //   <Navigator
  //     initialRoute={{name: 'Login', index: 0}}
  //     renderScene={(route, navigator) =>
  //       <Login
  //         name={route.name}
  //         onForward={() => {
  //           var nextIndex = route.index + 1;
  //           navigator.push({
  //             name: 'Login ' + nextIndex,
  //             index: nextIndex,
  //           });
  //         }}
  //       />
  //     }
  //   />
  // </Provider>
// )



// class Carly extends React.Component {
//   render() {
//     return (
//       <Navigator
//           initialRoute={{name: 'Login', index: 0}}
//           renderScene={(route, navigator) =>
//             <Login
//               name={route.name}
//               onForward={() => {
//                 var nextIndex = route.index + 1;
//                 navigator.push({
//                   name: 'Login ' + nextIndex,
//                   index: nextIndex,
//                 });
//               }}
//             />
//           }
//         />
//     )
//   }
// }

AppRegistry.registerComponent('Carly', () => Carly);

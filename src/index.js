<<<<<<< HEAD
import App from './containers/App';
=======
>>>>>>> fc52f35bee5b190734cc4e7cae9d5fa91770f4b2
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
<<<<<<< HEAD
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
=======
    <Navigator
      initialRoute={{name: 'Login', index: 0}}
      renderScene={(route, navigator) =>
        <Login
          name={route.name}
          onForward={() => {
            var nextIndex = route.index + 1;
            navigator.push({
              name: 'Login ' + nextIndex,
              index: nextIndex,
            });
          }}
        />
      }
    />
  </Provider>
)
>>>>>>> fc52f35bee5b190734cc4e7cae9d5fa91770f4b2



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

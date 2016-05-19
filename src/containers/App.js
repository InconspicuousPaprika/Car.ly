import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBar
} = React;
import TabBarItemIOS from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux'
import Search from '../components/Search';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Results from '../components/Results';
// import Results from '../components/resultsList';
import Favorites from '../components/Favorite';
import favoritesTab from '../assets/images/TabBar-Favorite-Icon@3x.png'
import activeFav from '../assets/images/TabBar-Favorite-Icon-Active@3x.png'
import searchTab from '../assets/images/TabBar-House-Icon@3x.png'
import activeSearch from '../assets/images/TabBar-House-Icon-Active@3x.png'

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene type="push" key="Login" initial={true} direction='horizontal' component={Login} duration={100} title='Login' />
    <Scene type="push" key="Search" component={Search} panHandlers={null} />
    <Scene type="push" key="SignUp" component={Signup} direction='horizontal' duration={100} title='Signup' />
    <Scene type="push" key="Results" component={Results} direction='horizontal' duration={100} title='Results'backTitle="Search" panHandlers={null}/>
    <Scene type="push" key="Favorites" component={Favorites} direction='horizontal' duration={100} title='Favorites'backTitle="Results" panHandlers={null}/>
    <Scene type="push" key="Login"  direction='horizontal' component={Login} title='Login'backTitle="Signup" />
  </Scene>
);


const App = () => (
 <View style={{ flex: 1 }}>
  <StatusBar
    translucent={true}
    backgroundColor="rgba(0, 0, 0, 0.2)"
    barStyle="light-content"
    hidden={true}
    showHideTransition="slide"
  />
  <Router scenes={scenes} />

 </View>
)


const styles = StyleSheet.create({
  tabbar: {
    width: 375,
    height: 49,
    shadowColor: 'black',
     shadowOffset: { height: -2, width: 0 },
     shadowOpacity: 0.05,
     shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default App;

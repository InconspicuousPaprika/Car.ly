
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
import favoritesTab from '../assets/images/TabBar-Favorite-Icon@3x.png'
import activeFav from '../assets/images/TabBar-Favorite-Icon-Active@3x.png'
import searchTab from '../assets/images/TabBar-House-Icon@3x.png'
import activeSearch from '../assets/images/TabBar-House-Icon-Active@3x.png'

const scenes = Actions.create(
  <Scene key="root" >
    <Scene type="replace" key="Search" initial={true} component={Search} />
    <Scene type="replace" key="SignUp" direction="horizontal" component={Signup} />
    <Scene type="replace" key="Favorites" component={Search}/>
    <Scene type="replace" key="Login" component={Login} />
  </Scene>
);


const App = () => (
 <View style={{ flex: 1 }}>
  <StatusBar
    hidden={false}
    showHideTransition="slide"
    animated={true}
  />
  <Router scenes={scenes} />
  <View style={styles.tabbar}>
  <TabBarIOS  style={{ flex:1 }}>
  <TabBarIOS.Item
    title="Search"
    onPress={()=> Actions.SignUp()}
    icon={searchTab}
    selectedIcon={activeSearch}>
  </TabBarIOS.Item>
    <TabBarIOS.Item
      title="Favorites"
      onPress={''}
      icon={favoritesTab}
      selectedIcon={activeFav}>
    </TabBarIOS.Item>
  </TabBarIOS >
  </View>
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

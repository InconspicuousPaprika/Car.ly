import React, {
  StyleSheet,
  Component,
  View,
  Text,
  Image,
  LinkingIOS,
  ListView,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import Immutable from 'immutable';
import _ from 'underscore';
import { connect } from 'react-redux';
import sendtoDB from '../actions/resultsActions';
import resultsListActions from '../actions/resultsListActions';
import favoritesActions from '../actions/favoritesActions';
import HeaderContainer from './common/HeaderContainer.js';
import Icon from 'react-native-vector-icons/Ionicons';
import ListViewer from './common/ListViewer.js';
import fakeData from '../assets/fakeData.js';
import Swipeout from 'react-native-swipeout';

@connect(state => ({
  query: state.search,
  results: state.search.searchResults,
  login: state.login,
  signup: state.signup,
  favorites: state.favorites.favoritesList,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))

export default class FavoritesList extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    query: React.PropTypes.object.isRequired,
    results: React.PropTypes.array.isRequired,
    login: React.PropTypes.object.isRequired,
    signup: React.PropTypes.object.isRequired,
    favorites: React.PropTypes.array.isRequired
  };

  // constructor(props){
  //   super(props);
  // }
  //

  convertScale(url) {
    if(url.includes('autotrader')) {
      url = 'http://images.autotrader.com/scaler/400/300/'+url.slice(42);
    } 
    // else if (url.includes('ebay')){
    //   url = ''
    // }
    return url;
  }

  submitCarData(id) {
    console.log('in submitCarData', "id.id", id.id);
    console.log("favorites", favorites);
    console.log("carQuery", carQuery);
    return fetch('http://localhost:3000/api/carly/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: id.id,
        image: favorites.image,
        make: carQuery.carMake,
        model: carQuery.model,
        year: carQuery.endYear,
        price: favorites.price,
        purchase_url: favorites.purchase_url
      })
    })
      // .then(getResponse)
  }

  obtainUserData(email, item) {
    console.log("in obtain user data");
    console.log("email", email);
    console.log("item", item);
    return fetch('http://localhost:3000/api/carly/users/getID', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    }).then(res => res.json())
    .then(data => {
      console.log("ID", data);
      return data;
    }).then(this.submitCarData)
        // dispatch({
    //   type: types.SEARCH_SAVE,
    //   entry: entryData
    // });
  }

  deleteFavorite(item) {
    console.log('in deleteFavorite', "item", item);
    favorite = this.props.favorites;
    dispatch = this.props.dispatch;
    userEmail = this.props.login.email || this.props.signup.email || this.props.login.facebookId;
    return fetch('http://localhost:3000/api/carly/favorites', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: item.id
      })
    }).then(res => {
      console.log("response from SF: ", res);
      console.log("email", this.props.login.email);
      console.log("global email", userEmail);
      return fetch('http://localhost:3000/api/carly/favorites/'+userEmail, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .then(data => {
        console.log("favorites", data.favorites);
        dispatch(favoritesActions({favoritesList: data.favorites}));
        renderFavorites();
      })
    })
  }

  // handleClick(item) {
  //   Linking.canOpenURL(item.purchase_url).then(supported => {
  //     if (supported) {
  //       Linking.openURL(item.purchase_url);
  //     } else {
  //       console.log('Don\'t know how to open URI: ' + item.purchase_url);
  //     }
  //   });
  // }

  renderFavorites(){
    let d = this.deleteFavorite;
    let s = this.convertScale;
    let self = this;
    const { query, convertScale, favorites, results, login, signup, dispatch, CAR_MAKES_AND_MODELS } = this.props;


    return (
      _.map(favorites, (item, index) => {
        return (
          <Swipeout right={[
            {
              text: 'Delete',
              backgroundColor: 'red',
              onPress:d.bind(self,item)
            }
          ]}>
          <View>
          <Image
         key={`PhotoItem_${item.id}`}
         style={styles.image}
         source={{uri: s(item.image)}}
         />
          <View>
            <Text>{item.make}</Text>
            <Text>{item.model}</Text>
            <Text>{item.year}</Text>
            <Text>{item.price}</Text>
            <Text onPress={() => LinkingIOS.openURL(item.purchase_url)}>{item.purchase_url}</Text>
          </View>
          </View>
          </Swipeout>
        );
      })
    )
  }

  render() {
    const {favorites} = this.props;
    const leftItem = {
      title: 'ios-car',
      icon: 'ios-car',
    }
    return (
      <HeaderContainer
        title="Favorites"
        // parallaxContent={profilePicture}
        backgroundImage={require('../assets/images/main-background.png')}
        backgroundColor={'#A8D769'}
        // onSegmentChange={this.handleSegmentChanged}
        leftItem={leftItem}>
        <ListViewer
        renderEmptyList={this.renderFavorites.bind(this)}
        >
        </ListViewer>

      </HeaderContainer>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width:100,
    height:100,
    flex: 1
  },
  button: {
    height: 50,
    backgroundColor: '#3D3D46',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom:10
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center'
  }
});

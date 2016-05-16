import React, {
  StyleSheet,
  Component,
  View,
  Text,
  Image,
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

@connect(state => ({
  query: state.search,
  results: state.search.searchResults,
  login: state.login,
  signup: state.signup,
  favorites: state.favorites,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))

export default class ResultsList extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    query: React.PropTypes.object.isRequired,
    results: React.PropTypes.object.isRequired,
    login: React.PropTypes.object.isRequired,
    signup: React.PropTypes.object.isRequired,
    favorites: React.PropTypes.object.isRequired
  };
  // constructor(props){
  //   super(props);
  // }
  // 

  dispatch = this.props.dispatch;

  convertScale(url) {
    let newurl = 'http://images.autotrader.com/scaler/400/300/'+url.slice(42);
    return newurl;
  }

  saveFavorite(item) {
    console.log('in submitCarData', "item", item);
    console.log('email', this.props.login.email);
    userEmail = this.props.login.email;
    dispatch = this.props.dispatch;
    const newFavorite = {
        users_email: this.props.login.email,
        image: item.image[0].src,
        make: this.props.query.carMake,
        model: this.props.query.model,
        year: this.props.query.endYear,
        price: item.price[0].text
    };
    console.log(newFavorite);
    return fetch('http://localhost:3000/api/carly/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFavorite)
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
      })
    })       
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
    .then(id => {
      console.log("favs", id);
      userID = id.id; 
      console.log("fn", this.submitCarData);
      return id;
    }).then(this.submitCarData)
  }

  obtainUserFavorites(res) {
    console.log("in obtain user Favorites");
    console.log("res", res);
    console.log("userID", userID);
    return fetch('http://localhost:3000/api/carly/favorites', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userID
      })
    }).then(res => res.json())
    .then(data => {
      console.log("favorites", data); 
      return data;
    }).then(this.favoritesToState)
  }

  favoritesToState(data){
    this.props.dispatch(favoritesActions({favorites: data}));
  }

  // saveFavorite(item) {
  //   console.log("in save favorite", "item", item);
  //   const email = this.props.login.email
  //   console.log("email", email);
  //   this.obtainUserData(email, item);
  //   const favorite = {
  //     image: item.image["0"].src,
  //     make: this.props.query.carMake,
  //     model: this.props.query.model,
  //     year: this.props.query.endYear,
  //     price: item["price"]["0"].text
  //   }
  //   console.log(this);
  //   console.log(this.props.query.carMake);
  //   console.log(this.props.query.endYear);
  //   console.log(this.props.query.model);
  //   console.log(this.props.login.email);
  //   console.log(item);
  //   console.log(favorite);
  //   this.props.dispatch(resultsListActions({favorite: favorite}));
  //   favorites = this.props.favorites;
  //   carQuery = this.props.query;
  //   dispatch = this.props.dispatch;
  //   console.log("this.props.favorites", this.props.favorites);
  //   console.log("favorites", favorites);
  //   console.log("carQuery", carQuery);
  // }

  render() {
    console.log(this.props.results);
    const { query, convertScale, results, login, signup, dispatch, CAR_MAKES_AND_MODELS } = this.props;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        {
          _.map(this.props.results, function(item, index) {
            return (
              <TouchableWithoutFeedback onPress={this.saveFavorite.bind(this, item)}>
                <View>
                <Image
                  key={`PhotoItem_${item["vehicleTitle"]["0"].title}`}
                  style={styles.image}
                  source={{uri: this.convertScale(item.image["0"].src)}}
                />
                <Text>{item["vehicleTitle"]["0"].text}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }, this)
        }
      </ScrollView>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width:414,
    height:310,
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

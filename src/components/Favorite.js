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
  favorites: state.favorites.favoritesList,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))

export default class FavoritesList extends Component {
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

  convertScale(url) {
    let newurl = 'http://images.autotrader.com/scaler/400/300/'+url.slice(42);
    return newurl;
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
        price: favorites.price
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
    userEmail = this.props.login.email;
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
      })
    })
  }

  render() {
    console.log(favorites);
    const { query, convertScale, results, login, signup, dispatch, favorites, CAR_MAKES_AND_MODELS } = this.props;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        {
          _.map(favorites, function(item, index) {
            return (
              <TouchableWithoutFeedback onPress={this.deleteFavorite.bind(this, item)}>
                <View>
                <Image
                  key={`PhotoItem_${item.id}`}
                  style={styles.image}
                  source={{uri: this.convertScale(item.image)}}
                />
                <Text>{item.make}</Text>
                <Text>{item.model}</Text>
                <Text>{item.year}</Text>
                <Text>{item.price}</Text>
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

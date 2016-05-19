'use strict';

import SwipeCards from 'react-native-swipe-cards';
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
import Card from './Card';
import NoMoreCards from './NoMoreCards';
import globalVariables from '../styles/globalVariables.js'
import ListViewer from './common/ListViewer.js';
import HeaderContainer from './common/HeaderContainer.js';
import Icon from 'react-native-vector-icons/Ionicons';
import fakeData from '../assets/fakeData.js';
var Header = require('./common/Header');
var ParallaxBackground = require('./common/ParallaxBackground');
import ActionButton from 'react-native-action-button';





@connect(state => ({
  query: state.search,
  cards: state.search.searchResults,
  login: state.login,
  signup: state.signup,
  favorites: state.favorites.favoritesList,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))

export default class Results extends Component{
  // static propTypes = {
  //   dispatch: React.PropTypes.func.isRequired,
  //   query: React.PropTypes.object.isRequired,
  //   cards: React.PropTypes.array.isRequired,
  //   login: React.PropTypes.object.isRequired,
  //   signup: React.PropTypes.object.isRequired,
  //   favorites: React.PropTypes.array.isRequired,
  // };
  //
  constructor(props) {
    super(props);
  }

  outOfCards = false;

  handleYup(item) {
    console.log('in submitCarData', "item", item);
    var userEmail = this.props.login.email || this.props.signup.email || this.props.login.facebookId;
    console.log('userEmail', userEmail);
    var dispatch = this.props.dispatch;
    const newFavorite = {
        users_email: userEmail,
        image: item.image[0].src,
        make: this.props.query.carMake,
        model: this.props.query.model,
        year: this.props.query.endYear,
        price: item.price[0].text
    };
    console.log('newFavorite', newFavorite);
    return fetch('http://localhost:3000/api/carly/favorites', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFavorite)
    }).then(res => {
      console.log("response from SF: ", res);
      console.log("email", this.props.login.email || this.props.signup.email || this.props.login.facebookId);
      var userEmail = this.props.login.email || this.props.signup.email || this.props.login.facebookId;
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
  handleNope (card) {
    console.log("nope")
  }
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    // let CARD_REFRESH_LIMIT = 3

    // if (this.props.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
    //   console.log(`There are only ${this.props.cards.length - index - 1} cards left.`);

    //   if (!this.props.outOfCards) {
    //     console.log(`Adding ${Cards2.length} more cards`)

    //     this.setState({
    //       cards: this.props.cards.concat(Cards2),
    //       outOfCards: true
    //     })
    //   }

    // }

  }
  renderCards(){
    return (
      <SwipeCards
      cards={fakeData}
      loop={false}
      style={styles.container}

      renderCard={(cardData) => <Card {...cardData} />}
      renderNoMoreCards={() => <NoMoreCards />}
      showYup={true}
      showNope={true}

      handleYup={this.handleYup.bind(this)}
      handleNope={this.handleNope}
      cardRemoved={this.cardRemoved}/>
    )
  }
  render() {
    const rightItem = {
      title: 'ios-heart',
      icon: 'ios-heart',
      onPress: 'Actions.Favorites.bind(this)'
    };
    const leftItem = {
      title: 'ios-settings',
      icon: 'ios-sett',
      onPress: 'Actions.Results.bind(this)'
    }
    return (
      <View >
      <Header
        title={'Results'}
        leftItem={leftItem}
        rightItem={rightItem}

      >
      </Header>
      <SwipeCards
      cards={fakeData}
      loop={false}
      style={styles.container}

      renderCard={(cardData) => <Card {...cardData} />}
      renderNoMoreCards={() => <NoMoreCards />}
      showYup={true}
      showNope={true}

      handleYup={this.handleYup.bind(this)}
      handleNope={this.handleNope}
      cardRemoved={this.cardRemoved}/>

      </View>

    )
  }
}


const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  thumbnail: {
    flex: 1,
    width: 200,
    height: 300
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white'
  }
});

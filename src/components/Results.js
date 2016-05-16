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
  render() {
    return (
      <SwipeCards
        cards={this.props.cards}
        loop={false}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}

        handleYup={this.handleYup.bind(this)}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}/>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
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
  }
});
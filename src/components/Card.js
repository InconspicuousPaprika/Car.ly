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



// @connect(state => ({
//   query: state.search,
//   results: state.search.searchResults,
//   login: state.login,
//   signup: state.signup,
//   favorites: state.favorites.favoritesList,
//   CAR_MAKES_AND_MODELS: state.search.allCars
// }))

let Card = React.createClass({

  convertScale(url) {
    let newurl = 'http://images.autotrader.com/scaler/400/300/'+url.slice(42);
    return newurl;
  },
  render() {
    return (
      <View style={styles.card}>
        <Image style={styles.thumbnail} source={{uri: this.convertScale(this.props.image[0].src)}} />
        <Text style={styles.text}>This is card {this.props.vehicleTitle[0].text}</Text>
      </View>
    )
  }
})

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
})

export default Card;
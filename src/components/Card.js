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
import globalVariables from '../styles/globalVariables.js'



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
    if(url.includes('autotrader')) {
      url = 'http://images.autotrader.com/scaler/400/300/'+url.slice(42);
    } 
    // else if (url.includes('ebay')){
    //   url = ''
    // }
    return url;
  },
  render() {
    if ( this.props.miles ) {
      return (
        <View style={styles.card}>
          <Image style={styles.thumbnail} source={{uri: this.convertScale(this.props.image[0].src)}} />
          <Text style={styles.text}>{this.props.vehicleTitle[0].text}</Text>
          <Text style={styles.text}>This is more information {this.props.price[0].text}</Text>
          <Text style={styles.text}>This is even more information {this.props.miles[0].text}</Text>
        </View>
      )
    } else if (this.props.miles === undefined) {
      return (
        <View style={styles.card}>
          <Image style={styles.thumbnail} source={{uri: this.convertScale(this.props.image[0].src)}} />
          <Text style={styles.text}>{this.props.vehicleTitle[0].text}</Text>
          <Text style={styles.text}>This is more information {this.props.price[0].text}</Text>
          <Text style={styles.text}>This is even more information {'N/A'}</Text>
        </View>
      )
    }
  }
})

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: globalVariables.background,
    elevation: 1
  },
  thumbnail: {
    flex: 1,
    width: 400,
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
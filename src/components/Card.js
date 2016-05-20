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
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';


// @connect(state => ({
//   query: state.search,
//   results: state.search.searchResults,
//   login: state.login,
//   signup: state.signup,
//   favorites: state.favorites.favoritesList,
//   CAR_MAKES_AND_MODELS: state.search.allCars
// }))

const SpecIconBox = React.createClass({

  render() {
    return (
      <View style={styles.boxContainer}>
        <Image style={styles.boxIcon} source={this.props.icon} />
        <Text style={styles.boxValue}>{this.props.value}</Text>
        <Text style={styles.boxLabel}>{this.props.label}</Text>
      </View>
    );
  },
});

const Card = React.createClass({

  convertScale(url) {
    if(url.includes('autotrader')) {
      url = 'http://images.autotrader.com/scaler/500/500/'+url.slice(42);
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
              <View>
                 <View style={styles.iconContainer}>
                   <SpecIconBox value={this.props.vehicleTitle[0].text.slice(5,9) } label={'Year'} icon={require('../assets/images/year-large.png')} />
                   <SpecIconBox value={this.props.miles[0].text} label={'Miles'} icon={require('../assets/images/sqft-large.png')} />
                   <SpecIconBox value={this.props.price[0].text} label={'Price'} icon={require('../assets/images/tax-large.png')}/>
                 </View>
              </View>
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  card: {
    height:400,
    alignItems: 'center',
    backgroundColor: globalVariables.background,
    elevation: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.50,
    shadowRadius: 2,
    shadowOffset: {
      height: 10,
      width: 10
    },
  },
  thumbnail: {
    flex: 1,
    width: 355,
    height: 500,
    resizeMode: 'contain',
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
  boxContainer: {
    justifyContent: 'center',
    padding: 20
  },
  iconContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-around',
},
  boxIcon: {
    flex: 1,
    alignSelf: 'center',
    height: 34,
    width: 34,
  },

  boxValue: {
    flex: 1,
    fontSize: 19,
    fontWeight: '200',
    color: globalVariables.textColor,
    textAlign: 'center'
  },

  boxLabel: {
    flex: 1,
    fontSize: 12,
    color: globalVariables.textColor,
    textAlign: 'center'
  },
})

export default Card;

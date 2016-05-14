'use strict';

import React, { Component, StyleSheet, Text, View, Image } from 'react-native';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/resultsActions';
import { connect } from 'react-redux';
import SearchInput from '../components/resultsInput';
import PhotoList from '../components/resultsList';
import SwipeCards from 'react-native-swipe-cards';
import ResultsList from '../components/resultsList';



let Card = React.createClass({

@connect(state => ({
  query: state.search,
  login: state.login,
  signup: state.signup,
  favorite: state.favorite,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))

class SearchApp extends Component {

  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <ResultsList actions={actions} photos={this.props.photos} status={this.props.status}/>        
      </View>
    )
  }
})

const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards
    }
  },
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  },
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
      />
    )
  }
})

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  }
})
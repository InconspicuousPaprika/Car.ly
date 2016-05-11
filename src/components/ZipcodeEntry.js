import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Component,
  TextInput
} = React;
import setQueryAction from '../actions/setQueryAction.js';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import globalVariables from '../styles/globalVariables.js'
import globalStyles from '../styles/SearchGlobalStyles.js'
@connect(state => ({
  query: state.search,
}))

export default class ZipcodeEntry extends Component{

<TextInput
  style={ { height: 40, width:100, alignSelf:'center', borderColor: 'gray', borderWidth: 1 } }
  onChangeText={(zipcode) => dispatch(setQueryAction({ zipcode }))}
  value={query.zipcode}
/>
}

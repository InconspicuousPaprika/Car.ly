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

const ZipCodeBox = (props) => ({

  render() {
    return (
      <View style={styles.zipView}>
        <Text style={styles.zipText}>{this.props.value}</Text>
        <TouchableOpacity onPress={this.handleClear}>
          <Image style={styles.clearBtn} source={require('../assets/images/Clear.png')} />
        </TouchableOpacity>
      </View>
    );
  },

  handleClear() {
    this.props.onRemove(this.props.index);
  }
});
const styles = StyleSheet.create({
  zipView: {
    backgroundColor: '#F9F9F9',
    borderRadius: 2,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 30,
    margin: 5,
  },

  zipText: {
    color: globalVariables.green,
    fontSize: 18,
  },

  clearBtn: {
    position: 'absolute',
    right: 10,
    top: 14,
    width: 14,
    height: 14,
    opacity: 0.5
  },

});

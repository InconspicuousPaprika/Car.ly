
import React from 'react-native';
const {
  StyleSheet,
} = React;

import globalVariables from './globalVariables.js';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  label: {
    fontSize: 20,
    color: '#666',
    paddingBottom: 5,
    textAlign: 'center'
  },

  innerBox: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.50,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: 5
    }
  },
});

module.exports = styles

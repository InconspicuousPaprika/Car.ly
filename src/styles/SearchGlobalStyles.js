
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
    borderRadius: 15
  },
});

module.exports = styles

import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} = React;

import globalStyles from '../styles/SearchGlobalStyles.js';
import YearPicker from './YearPicker.js';

const YearPickerContainer = (props) => ({
  render(){
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Model Year</Text>
        <View style={globalStyles.innerBox}>
          <YearPicker label='Model Year' />

        </View>
      </View>
    );
  },

  handleStartChange(value) {
    // this.props.onChange('priceRange', [value, this.props.value[1]]);
  },

  handleEndChange(value) {
    // this.props.onChange('priceRange', [this.props.value[0], value]);
  }

});

const styles = StyleSheet.create({
  divider: {
    height: 15,
    width: 1,
    backgroundColor: '#ccc'
  },
});

export default YearPickerContainer;

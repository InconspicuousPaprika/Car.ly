import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} = React;

import globalVariables from '../styles/globalVariables.js';
import CarMakePickers from './CarMakePickers.js';
import CarModelPickers from './CarModelPickers.js';

const CarMakePickerContainer(props) => ({
  render(){
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Chose your car</Text>
        <View style={globalStyles.innerBox}>
          <CarMakePickers label='Make' onChange={this.handleStartChange} value={this.props.value[0]} />
          <CarModelPickers label='Model' onChange={this.handleEndChange} value={this.props.value[1]} />
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

})


export default CarMakePickerContainer;

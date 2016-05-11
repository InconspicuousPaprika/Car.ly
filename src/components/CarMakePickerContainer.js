import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} = React;

import globalStyles from '../styles/SearchGlobalStyles.js';
import CarMakePicker from './CarMakePicker.js';
import CarModelPicker from './CarModelPicker.js';

const CarMakePickerContainer = (props) => ({
  render(){
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Chose your car</Text>
        <View style={globalStyles.innerBox}>
          <CarMakePicker label='Make' />
          <CarModelPicker label='Model' />
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



export default CarMakePickerContainer;

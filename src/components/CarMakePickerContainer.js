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
  render() {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.label}>Choose your car</Text>
        <View style={globalStyles.innerBox}>
          <CarMakePicker label="Make" />
          <CarModelPicker label="Model" />
        </View>
      </View>
    );
  },

});

const styles = StyleSheet.create({
  divider: {
    height: 15,
    width: 1,
    backgroundColor: '#ccc',
  },
});



export default CarMakePickerContainer;

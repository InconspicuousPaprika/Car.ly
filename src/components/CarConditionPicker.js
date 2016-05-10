import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} = React;

import CarConditionPickerButton from './CarConditionPickerButton.js'
import styles from '../styles/SearchGlobalStyles.js'

const CarConditionPicker(props) => ({
render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Propery Type</Text>
        <View style={styles.innerBox}>
          <CarConditionPickerButton
            text='Used'
            icon='home'
            value='USED'
            current={this.props.value}
            onPress={this.handleChange} />

          <CarConditionPickerButton
            text='New'
            icon='condo'
            value='NEW'
            current={this.props.value}
            onPress={this.handleChange} />
        </View>
      </View>
    );
  },

  handleChange(value) {
    // this.props.onChange('propertyType', value);
  }
});



export default CarConditionPicker;

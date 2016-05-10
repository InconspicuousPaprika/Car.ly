import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  PickerIOS,
} = React;
import globalVariables from '../styles/globalVariables.js'

const CarMakePickers() => ({
  render() {
    <PickerIOS
      selectedValue={query.carMake}
      onValueChange={
        (carMake) => dispatch(setQueryAction({ carMake, modelIndex: 0 }))
      }
    >
      {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
        <PickerItemIOS
          key={carMake}
          value={carMake}
          label={CAR_MAKES_AND_MODELS[carMake].name}
        />
      ))}
    </PickerIOS>
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    color: globalVariables.textColor,
    textAlign: 'center'
  },

  value: {
    fontSize: 22,
    color: globalVariables.green,
  },
});

export default CarMakePickers;

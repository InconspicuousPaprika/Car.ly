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

const CarModelPickers() => ({
  render() {
    <PickerIOS
      selectedValue={query.modelIndex}
      key={query.carMake}
      onValueChange={(index) =>
        dispatch(setQueryAction({
          modelIndex:index,
          model:make.models[index]
        }))}
    >
      {CAR_MAKES_AND_MODELS[query.carMake].models.map((modelName, modelIndex) => (
        <PickerItemIOS
          key={ `${query.carMake} ${modelIndex}` }
          value={modelIndex}
          label={modelName}
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

export default CarModelPickers;

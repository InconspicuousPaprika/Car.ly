import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  PickerIOS,
  PickerItemIOS,
  Component
} = React;
import setQueryAction from '../actions/setQueryAction.js';
import searchActions from '../actions/searchActions.js';
import MultiSlider from 'react-native-multi-slider';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import globalVariables from '../styles/globalVariables.js'

@connect(state => ({
  query: state.search,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))
export default class CarModelPicker extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    query: React.PropTypes.object.isRequired
  };

  render() {
    const { query, dispatch, CAR_MAKES_AND_MODELS } = this.props;
    const make = CAR_MAKES_AND_MODELS[query.carMake];
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.label}</Text>

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
            key={ `${query.carMake} ${query.modelIndex}` }
            value={modelIndex}
            label={modelName}
          />
        ))}
      </PickerIOS>
    </View>
    )
  }
};

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

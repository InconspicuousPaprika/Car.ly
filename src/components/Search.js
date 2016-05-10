import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableHighlight,
  PickerIOS,
  Slider,
} from 'react-native';
import globalVariables from '../styles/globalVariables.js'

import CarConditionPicker from './CarConditionPicker.js';
import CarMakePickerContainer from './CarMakePickerContainer.js';
import setQueryAction from '../actions/setQueryAction.js';
import searchActions from '../actions/searchActions.js';
import MultiSlider from 'react-native-multi-slider';
import Immutable from 'immutable';
import { connect } from 'react-redux';



let PickerItemIOS = PickerIOS.Item;

@connect(state => ({
  query: state.search,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))
export default class Counter extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    query: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  sliderChange(values) {
    console.log(this.props.CAR_MAKES_AND_MODELS)
     let start = values[0];
     let end = values[1];
    this.props.dispatch(setQueryAction({ startYear:start, endYear:end }));
  }

  goToResults() {
    console.log('going');
    console.log(this.props.query);
    //TODO: change state data to store
    //backend.getCarData(object);
    this.props.dispatch(searchActions(this.props.query));
  }

  render() {
    const { query, dispatch, CAR_MAKES_AND_MODELS } = this.props;
    return (
  <ScrollView style={styles.container}>
    <View style={styles.page}>
      <CarConditionPicker />
      <CarMakePickerContainer />

    <TouchableHighlight
      underlayColor="#88D4F5"
      onPress={this.goToResults.bind(this)}
    >
    <Text>Search </Text>
    </TouchableHighlight>
    <Text>{`$${query.minPrice}-$${query.maxPrice}`}</Text>
    <MultiSlider
      values={[query.minPrice, query.maxPrice]}
      min={1000}
      max={150000}
      step={1000}
      onValuesChangeFinish={(value) => dispatch(setQueryAction({ minPrice:value[0], maxPrice:value[1] }))}
      // onValuesChangeFinish={this.sliderChange.bind(this)}
    />

    <Text>{`${query.startYear}-${query.endYear}`}</Text>
    <MultiSlider
      values={[query.startYear, query.endYear]}
      min={1990}
      max={2017}
      step={1}
      onValuesChangeFinish={this.sliderChange.bind(this)}
    />
    </View>
   </ScrollView>
)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: globalVariables.background
  },

  page: {
    paddingBottom: 50
  },

  searchButton: {
    padding: 14,
    backgroundColor: globalVariables.green,
  },

  searchButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  }
});

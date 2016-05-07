import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  PickerIOS,
  Slider,
} from 'react-native';
import setQueryAction from '../actions/setQueryAction.js';
import searchActions from '../actions/searchActions.js';
import MultiSlider from 'react-native-multi-slider';
import Immutable from 'immutable';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#48BBEC'
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  slider: {
    height: 10,
    margin: 10,
  },
  slideText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});


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
    const make = CAR_MAKES_AND_MODELS[query.carMake];

    let selectionObject = `${make.name} ${make.models[query.modelIndex]}`
    return (
  <View>
    <Text>Please choose a make for your car:</Text>
    <PickerIOS
      selectedValue={query.carMake}
      onValueChange={(carMake) => dispatch(setQueryAction({ carMake, modelIndex: 0 }))}
    >
      {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
        <PickerItemIOS
          key={carMake}
          value={carMake}
          label={CAR_MAKES_AND_MODELS[carMake].name}
        />
      ))}
    </PickerIOS>

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

    <Text>You selected: {selectionObject}</Text>
    <Text>Zipcode: </Text>
    <TextInput
      style={ { height: 40, width:100, alignSelf:'center', borderColor: 'gray', borderWidth: 1 } }
      onChangeText={(zipcode) => dispatch(setQueryAction({ zipcode }))}
      value={query.zipcode}
    />

    <TouchableHighlight
      style={styles.button}
      underlayColor="#88D4F5"
      onPress={this.goToResults.bind(this)}
    >
    <Text style={styles.buttonText}>Search </Text>
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
)
  }
}

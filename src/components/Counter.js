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
import searchActions from '../actions/searchActions.js'
import backend from '../service/backend.js'
import MultiSlider from 'react-native-multi-slider';
import Immutable from 'immutable';
import {
  MKColor,
  MKSlider,
  MKRangeSlider,
  setTheme,
} from 'react-native-material-kit';
import { connect } from 'react-redux';

function select(state){
  return {
    query: state.query
  };
}

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

// const {
//   MKButton,
//   MKColor,
// } = MK;

let PickerItemIOS = PickerIOS.Item;


const CAR_MAKES_AND_MODELS = {
  amc: {
    name: 'AMC',
    models: ['AMX', 'Concord', 'Eagle', 'Gremlin', 'Matador', 'Pacer'],
  },
  alfa: {
    name: 'Alfa-Romeo',
    models: ['159', '4C', 'Alfasud', 'Brera', 'GTV6', 'Giulia', 'MiTo', 'Spider'],
  },
  aston: {
    name: 'Aston Martin',
    models: ['DB5', 'DB9', 'DBS', 'Rapide', 'Vanquish', 'Vantage'],
  },
  audi: {
    name: 'Audi',
    models: ['90', '4000', '5000', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7'],
  },
  austin: {
    name: 'Austin',
    models: ['America', 'Maestro', 'Maxi', 'Mini', 'Montego', 'Princess'],
  },
  borgward: {
    name: 'Borgward',
    models: ['Hansa', 'Isabella', 'P100'],
  },
  buick: {
    name: 'Buick',
    models: ['Electra', 'LaCrosse', 'LeSabre', 'Park Avenue', 'Regal',
             'Roadmaster', 'Skylark'],
  },
  cadillac: {
    name: 'Cadillac',
    models: ['Catera', 'Cimarron', 'Eldorado', 'Fleetwood', 'Sedan de Ville'],
  },
  chevrolet: {
    name: 'Chevrolet',
    models: ['Astro', 'Aveo', 'Bel Air', 'Captiva', 'Cavalier', 'Chevelle',
             'Corvair', 'Corvette', 'Cruze', 'Nova', 'SS', 'Vega', 'Volt'],
  },
};

@connect(select)
export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.instanceOf(Immutable.Map).isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const { incrementAsync } = props;
    this.incrementAsync = () => incrementAsync();
    this.state = {
      carMake: 'cadillac',
      modelIndex: 3,
      value: 0,
      sliderLeft:1990,
      sliderRight:2017,
      payload:'',
      minPrice:1000,
      maxPrice:150000,
      zipcode:'',
      model: ''

    };
  }

  sliderChange(values) {
    this.setState({
      sliderLeft: values[0],
      sliderRight: values[1],
    });
  }

  goToResults() {
    let object = this.state;
    console.log(this.state.carMake);
    console.log('going');
    console.log(this.props);
    //TODO: change state data to store
    //backend.getCarData(object);
    // this.props.dispatch(searchActions(this.props.query));

  }

  render() {
    // const { increment, incrementIfOdd, decrement, counter } = this.props;

    const make = CAR_MAKES_AND_MODELS[this.state.carMake];
      // <View style={styles.container}>
      //   <Text style={styles.text}>Clicked: {counter.get('counter')} times</Text>
      //   <TouchableHighlight onPress={increment}>
      //     <Text style={styles.text}>+</Text>
      //   </TouchableHighlight>
      //   <TouchableHighlight onPress={decrement}>
      //     <Text style={styles.text}>-</Text>
      //   </TouchableHighlight>
      //   <TouchableHighlight onPress={incrementIfOdd}>
      //     <Text style={styles.text}>Increment if odd</Text>
      //   </TouchableHighlight>
      //   <TouchableHighlight onPress={this.incrementAsync}>
      //     <Text style={styles.text}>Increment async</Text>
      //   </TouchableHighlight>

    let selectionObject = `${make.name} ${make.models[this.state.modelIndex]}`;
    return (
  <View>
    <Text>Please choose a make for your car:</Text>
    <PickerIOS
      selectedValue={this.state.carMake}
      onValueChange={(carMake) => this.setState({ carMake, modelIndex: 0 })}
    >
      {Object.keys(CAR_MAKES_AND_MODELS).map((carMake) => (
        <PickerItemIOS
          key={carMake}
          value={carMake}
          label={CAR_MAKES_AND_MODELS[carMake].name}
        />
      ))}
    </PickerIOS>

    <Text>Please choose a model of {make.name}:</Text>
    <PickerIOS
      selectedValue={this.state.modelIndex}
      key={this.state.carMake}
      onValueChange={(modelIndex) => this.setState({ modelIndex:modelIndex, model:make.models[modelIndex] })}
    >
      {CAR_MAKES_AND_MODELS[this.state.carMake].models.map((modelName, modelIndex) => (
        <PickerItemIOS
          key={ `${this.state.carMake} ${modelIndex}` }
          value={modelIndex}
          label={modelName}
        />
      ))}
    </PickerIOS>

    <Text>You selected: {selectionObject}</Text>
    <Text>Zipcode: </Text>
    <TextInput
      style={ { height: 40, width:100, alignSelf:'center', borderColor: 'gray', borderWidth: 1 } }
      onChangeText={(zipcode) => this.setState({ zipcode })}
      value={this.state.zipcode}
    />

    <TouchableHighlight
      style={styles.button}
      underlayColor="#88D4F5"
      onPress={this.goToResults.bind(this)}
    >
    <Text style={styles.buttonText}>Search </Text>
    </TouchableHighlight>

    <Text>{`$${this.state.minPrice}-$${this.state.maxPrice}`}</Text>
    <MultiSlider
      values={[this.state.minPrice, this.state.maxPrice]}
      min={1000}
      max={150000}
      step={1000}
      onValuesChangeFinish={(value) => this.setState({ minPrice:value[0], maxPrice:value[1] })}
      // onValuesChangeFinish={this.sliderChange.bind(this)}
    />

    <Text>{`${this.state.sliderLeft}-${this.state.sliderRight}`}</Text>
    <MultiSlider
      values={[this.state.sliderLeft, this.state.sliderRight]}
      min={1990}
      max={2017}
      step={1}
      onValuesChangeFinish={this.sliderChange.bind(this)}
    />
      </View>
)
  }
}

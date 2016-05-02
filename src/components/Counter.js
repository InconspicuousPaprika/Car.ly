import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  PickerIOS,
} from 'react-native';
import Immutable from 'immutable';



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
  }
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

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.instanceOf(Immutable.Map).isRequired
  };

  constructor(props) {
    super(props);
    const { incrementAsync } = props;
    this.incrementAsync = () => incrementAsync();
    this.state = {
      carMake: 'cadillac',
      modelIndex: 3
    };
  }

  goToResults() {
    console.log('going');
  }

  render() {
    // const { increment, incrementIfOdd, decrement, counter } = this.props;

      // <View style={styles.container}>
        // <Text style={styles.text}>Clicked: {counter.get('counter')} times</Text>
        // <TouchableHighlight onPress={increment}>
        //   <Text style={styles.text}>+</Text>
        // </TouchableHighlight>
        // <TouchableHighlight onPress={decrement}>
        //   <Text style={styles.text}>-</Text>
        // </TouchableHighlight>
        // <TouchableHighlight onPress={incrementIfOdd}>
        //   <Text style={styles.text}>Increment if odd</Text>
        // </TouchableHighlight>
        // <TouchableHighlight onPress={this.incrementAsync}>
        //   <Text style={styles.text}>Increment async</Text>
        // </TouchableHighlight>
    const make = CAR_MAKES_AND_MODELS[this.state.carMake];
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
      onValueChange={(modelIndex) => this.setState({ modelIndex })}
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
    <TouchableHighlight
      style={styles.button}
      underlayColor="#88D4F5"
      onPress={this.goToResults}
    >
        <Text style={styles.buttonText}>Search </Text>
  </TouchableHighlight>
  </View>
);
  }
}

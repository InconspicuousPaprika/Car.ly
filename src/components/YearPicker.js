import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  PickerIOS,
  PickerItemIOS,
  Component,
} = React;
import setQueryAction from '../actions/setQueryAction.js';
import MultiSlider from 'react-native-multi-slider';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import globalVariables from '../styles/globalVariables.js'
import globalStyles from '../styles/SearchGlobalStyles.js'
@connect(state => ({
  query: state.search,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))
export default class CarMakePicker extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    query: React.PropTypes.object.isRequired
  };

  render() {
    const { query, dispatch, CAR_MAKES_AND_MODELS } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{`${query.startYear} - ${query.endYear}`}</Text>
        <MultiSlider
          containerStyle={styles.slider}
          selectedStyle={styles.selectedTab}
          values={[query.startYear, query.endYear]}
          min={1990}
          max={2017}
          step={1}
          onValuesChangeFinish={this.sliderChange.bind(this)}
        />
      </View>
    )
  }

  sliderChange(values) {
    console.log(this.props.CAR_MAKES_AND_MODELS)
    let start = values[0];
    let end = values[1];
    this.props.dispatch(setQueryAction({ startYear:start, endYear:end }));
  };
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  label: {
    fontSize: 15,
    color: globalVariables.textColor,
    textAlign: 'center'
  },
  slider: {
    justifyContent: 'center',
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop:10
  },
  selectedTab: {
    backgroundColor: '#248F95'
  },
  value: {
    fontSize: 22,
    color: globalVariables.green,
  },
});

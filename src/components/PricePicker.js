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
export default class PricePicker extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    query: React.PropTypes.object.isRequired
  };

  render() {
    const { query, dispatch, CAR_MAKES_AND_MODELS } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{`$${query.minPrice} - $${query.maxPrice}`}</Text>
        <MultiSlider
          containerStyle={styles.slider}
          selectedStyle={styles.selectedTab}
          values={[query.minPrice, query.maxPrice]}
          min={1000}
          max={150000}
          step={1000}
          onValuesChangeFinish={(value) => dispatch(setQueryAction({ minPrice:value[0], maxPrice:value[1] }))}
          // onValuesChangeFinish={this.sliderChange.bind(this)}
        />
      </View>
    )
  }
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
    backgroundColor: '#2ecc71'
  },
  value: {
    fontSize: 22,
    color: globalVariables.green,
  },
});

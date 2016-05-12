import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Component,
  TextInput
} = React;
import setQueryAction from '../actions/setQueryAction.js';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import globalVariables from '../styles/globalVariables.js'
import globalStyles from '../styles/SearchGlobalStyles.js'

@connect(state => ({
  query: state.search,
}))

export default class ZipCodeInput extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    query: React.PropTypes.object.isRequired
  };
  render() {
    const { query, dispatch, CAR_MAKES_AND_MODELS } = this.props;
    return (
      <View>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          placeholder={'zip code'}
          returnKeyType={'done'}
          clearButtonMode={'while-editing'}
          value={query.zipcode}
          onChangeText={(zipcode) => dispatch(setQueryAction({ zipcode }))}

        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    padding: 5,
    margin: 5,
    color: globalVariables.green
  },
});

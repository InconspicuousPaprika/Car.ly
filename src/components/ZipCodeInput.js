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
  getInitialState() {
    return {
      value: ''
    };
  },
  getDefaultProps() {
    return {
      onAdd() {}
    };
  },
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          placeholder={'zip code'}
          returnKeyType={'done'}
          clearButtonMode={'while-editing'}
          value={this.state.value}
          onChangeText={this.handleChange}
          onEndEditing={this.handleTextDone}
        />
      </View>
    );
  },

  handleChange(value) {
    this.setState({value});
  },

  handleTextDone(event) {
    console.log('handleTextDone');
    if (this.state.value) this.props.onAdd(this.state.value);
    this.setState({value: ''});
  }
};

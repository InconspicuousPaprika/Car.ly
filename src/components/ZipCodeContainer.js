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
import globalVariables from '../styles/globalVariables.js';
import globalStyles from '../styles/SearchGlobalStyles.js';
import ZipCodeInput from './ZipCodeInput.js';
import ZipCodeBox from './ZipCodeBox.js';

export default class ZipCodeContainer extends Component {
  render() {
    return (
    <View style={globalStyles.container}>
           <Text style={globalStyles.label}>Zip Codes</Text>
           <View style={[globalStyles.innerBox, styles.innerBox]}>
             <View style={styles.zipCodeBoxs}>
             </View>
             <View>
               <ZipCodeInput />
             </View>
           </View>

        </View>
    )
  }
}


const styles = StyleSheet.create({
  innerBox: {
    flexDirection: 'column'
  },

  zipCodeBoxs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  zipView: {
    backgroundColor: '#F9F9F9',
    borderRadius: 2,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 30,
    margin: 5,
  },

  zipText: {
    color: globalVariables.green,
    fontSize: 18,
  },

  clearBtn: {
    position: 'absolute',
    right: 10,
    top: 14,
    width: 14,
    height: 14,
    opacity: 0.5
  },

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

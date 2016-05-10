import React from 'react-native';
const {
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} = React;

import globalVariables from '../styles/globalVariables.js'

const CarConditionPickerButton = (props) => ({

return
  render() {
    const isActive = this.props.value === this.props.current;


    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.tapAreaView}>
          <Image
            style={styles.icon}
            source={icon}
          />
          <Text style={[styles.text, isActive && styles.active]}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  },

  handlePress() {
    // this.props.onPress(this.props.value);
  }

});

const styles = StyleSheet.create({
  tapAreaView: {
    alignItems: 'center',
  },

  icon: {
    width: 72,
    height: 38
  },

  text: {
    color: 'rgba(0,0,0,0.5)',
    paddingTop: 5
  },

  active: {
    color: globalVariables.green
  },
});

export default CarConditionPickerButton;

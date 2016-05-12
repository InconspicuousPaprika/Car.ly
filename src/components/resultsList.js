import React, {
  StyleSheet,
  Component,
  View,
  Text,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import _ from 'underscore';

@connect(state => ({
  query: state.search,
  results: state.search.searchResults,
  login: state.login,
  signup: state.signup,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))

export default class PhotoList extends Component {

  constructor(props){
    super(props);

  }

  render() {
    console.log("results");
    console.log(this.props.results);
    return (
      // <View>
      // <Text>words</Text>
      <ScrollView>
        {
          _.map(this.props.results, function(item) {
            return (
              <TouchableWithoutFeedback>
                <View>
                <Image
                  key={`PhotoItem_${item["VEHICLETITLE LINK"]["0"].title}`}
                  style={styles.image}
                  source={{uri: item.image["0"].src}}
                />
                <Text>{item["VEHICLETITLE LINK"]["0"].text}</Text>
                <Text>{item["PRIMARY PRICE"]["0"].text}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })
        }
      </ScrollView>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width:414,
    height:310,
    flex: 1
  },
  button: {
    height: 50,
    backgroundColor: '#3D3D46',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom:10
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center'
  }
});

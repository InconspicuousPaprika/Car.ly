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
import _ from 'underscore';
import { connect } from 'react-redux';


@connect(state => ({
  query: state.search,
  results: state.search.searchResults,
  login: state.login,
  signup: state.signup,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))

export default class ResultsList extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    query: React.PropTypes.object.isRequired,
    results: React.PropTypes.object.isRequired,
    login: React.PropTypes.object.isRequired,
    signup: React.PropTypes.object.isRequired
  };

  // constructor(props){
  //   super(props);
  // }

  convertScale(url) {
    let newurl = 'http://images.autotrader.com/scaler/400/300/'+url.slice(42);
    return newurl;
  }

  saveFavorite(item) {
    console.log(this);
    console.log(this.props.query.carMake);
    console.log(this.props.query.endYear);
    console.log(this.props.query.model);
    console.log(this.props.login.email);
    console.log(item);
  }

  render() {
    const { query, convertScale, results, login, signup, dispatch, CAR_MAKES_AND_MODELS } = this.props;
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        {
          _.map(this.props.results, function(item) {
            return (
              <TouchableWithoutFeedback onPress={this.saveFavorite.bind(this, item)}>
                <View>
                <Image
                  key={`PhotoItem_${item["VEHICLETITLE LINK"]["0"].title}`}
                  style={styles.image}
                  source={{uri: this.convertScale(item.image["0"].src)}}
                />
                <Text>{item["VEHICLETITLE LINK"]["0"].text}</Text>
                <Text>{item["PRIMARY PRICE"]["0"].text}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          }, this)
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

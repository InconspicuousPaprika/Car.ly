import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableHighlight,
  PickerIOS,
  Slider,
  StatusBar,
  ActivityIndicatorIOS
} from 'react-native';
import globalVariables from '../styles/globalVariables.js'
import PricePickerContainer from './PricePickerContainer.js'
import YearPickerContainer from './YearPickerContainer.js'
import CarConditionPicker from './CarConditionPicker.js';
import CarMakePickerContainer from './CarMakePickerContainer.js';
import ZipCodeContainer from './ZipCodeContainer.js';
import setQueryAction from '../actions/setQueryAction.js';
import searchActions from '../actions/searchActions.js';
import { ACTIVITY_INDICATOR, loading, CAR_DATA_REQUEST, requestedData} from '../actions/activityMonitoring.js';
import MultiSlider from 'react-native-multi-slider';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import HeaderContainer from './common/HeaderContainer.js';
import Icon from 'react-native-vector-icons/Ionicons';
import ListViewer from './common/ListViewer.js';
import { Actions } from 'react-native-router-flux';
import loginActions from '../actions/loginActions';
import signupAction from '../actions/signupActions.js';
import { getResponseJSON } from '../utils/getResponse.js'

let PickerItemIOS = PickerIOS.Item;

@connect(state => ({
  query: state.search,
  login: state.login,
  signup: state.signup,
  CAR_MAKES_AND_MODELS: state.search.allCars
}))
export default class Search extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    query: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  goToResults() {
    console.log('going');
    console.log(this.props.query);
    this.props.dispatch(searchActions(this.props.query));
    this.props.dispatch(requestedData({requestedCarData: true}));
    this.navigateToResults();
    this.turnOffActivity();
  }

  navigateToResults() {
    setTimeout(function() {
      Actions.Results();
    }, 4900);
  }

  turnOffActivity() {
    var that = this
    if (this.props.query.requestedCarData) {
      setTimeout(function() {
        that.props.dispatch(requestedData({requestedCarData: false}))
      },
    4000);
    }
  }

  handleLogout() {
    this.props.dispatch(loginActions({ email: null }));
    this.props.dispatch(signupAction({ email: null }));
    Actions.Login();
  }

  render() {
    var action = Actions
    const rightItem = {
      title: 'ios-heart',
      icon: 'ios-heart',
      onPress: 'Actions.Favorites.bind(this)'
    };
    const leftItem = {
      title: 'ios-car',
      icon: 'ios-car',
      onPress: 'Actions.Results.bind(this)'
    }
    return (
      <HeaderContainer
        title="Search"
        // parallaxContent={profilePicture}
        backgroundImage={require('../assets/images/opl-parallax-universe.jpg')}
        backgroundColor={'#A8D769'}
        // onSegmentChange={this.handleSegmentChanged}
        leftItem={leftItem}
        rightItem={rightItem}>
        <ListViewer
        renderEmptyList={this.renderScrollView.bind(this)}

        >
        </ListViewer>

      </HeaderContainer>

  )
  }
  renderScrollView(){
    return (
        <View style={styles.container} >
          <View style={styles.page}>
          <CarMakePickerContainer />
          <PricePickerContainer />
          <YearPickerContainer />
          <ZipCodeContainer />
          <CarConditionPicker />
        <TouchableHighlight
          underlayColor="#88D4F5"
          onPress={this.goToResults.bind(this)}
          style={styles.searchButton}
        >
        <Text style={styles.searchButtonText}>Search</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handleLogout.bind(this)}>
        <Text style={styles.loginText}>Logout</Text></TouchableHighlight>
        <ActivityIndicatorIOS
          animating={this.props.query.requestedCarData}
          style={[styles.centering, {height: 200}]}
          size="large"
          />
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: globalVariables.background
  },

  page: {
    paddingBottom: 50
  },

  searchButton: {
    padding: 14,
    backgroundColor: '#248F95',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 8,
    height: 40,
    borderColor: '#248F95',
  },

  searchButtonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },

  loginText: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    textDecorationLine: 'underline',
    marginTop: 10
  },

  centering: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gray: {
    backgroundColor: '#cccccc',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

});

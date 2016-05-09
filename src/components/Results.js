'use strict';

import React, { Component, View } from 'react-native';
import {bindActionCreators} from 'redux';
import * as searchActions from '../actions/resultsActions';
import { connect } from 'react-redux';
import SearchInput from '../components/resultsInput';
import PhotoList from '../components/resultsList';

class SearchApp extends Component {
  render() {
    console.log('searchApp props before bind');
    console.log(this.props);
    const actions = bindActionCreators(searchActions, this.props.dispatch);
    console.log('searchApp props');
    console.log(this.props);
    return (
      <View style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <SearchInput actions={actions} status={this.props.status}/>
        <PhotoList actions={actions} photos={this.props.photos} status={this.props.status}/>        
      </View>
    );
  }
}

export default connect(state => ({
  photos: state.photos.photos,
  status: state.photos.status
}))(SearchApp);
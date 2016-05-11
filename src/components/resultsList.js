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

export default class PhotoList extends Component {

  constructor(props){
    super(props);

  }

  convertScale(url) {
    // let newurl = url.replace(new RegExp('scaler\/\d\d\d\/\d\d\d'), "scaler/100/75"); ReGex is not happening
    let newurl = 'http://images.autotrader.com/scaler/400/300/'+url.slice(42);
    // console.log(newurl);
    console.log('begin printing this.props');
    console.log(this.props);
    console.log('done printing this.props');
    return newurl;

  }

  render() {
    return (
      // <View>
      // <Text>words</Text>
      <ScrollView>
        {
          this.props.photos.map((item, index) => {
            return (
              <TouchableWithoutFeedback onPress={this.props.actions.saveFavorite.bind(this, item, index)}>
                <View>
                <Image
                  key={`PhotoItem_${item["VEHICLETITLE LINK"][0].title}_${index}`}
                  style={styles.image}
                  source={{uri: this.convertScale(item.image[0].src)}}
                />
                <Text>{item["VEHICLETITLE LINK"][0].text}</Text>
                <Text>{item["PRIMARY PRICE"][0].text}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })
        }
        {
         (() => {
           if (this.props.status === 'DONE') {
             return (
               <TouchableHighlight style={styles.button} onPress={this.props.actions.searchNextPageAction}>
                <Text style={styles.buttonText}>Load More</Text>
              </TouchableHighlight>
             );
           }
         })()
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

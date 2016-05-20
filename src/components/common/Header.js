var globalStyles = require('../../styles/globalVariables');
var React = require('React');
var StyleSheet = require('StyleSheet');
var { Text } = require('../../styles/text.js');
var TouchableOpacity = require('TouchableOpacity');
var View = require('View');
var Image = require('Image');
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

export type Layout =
    'default'      // Use platform defaults (icon on Android, text on iOS)
  | 'icon'         // Always use icon
  | 'title';       // Always use title

export type Foreground = 'light' | 'dark';

export type Item = {
  title?: string;
  icon?: number;
  layout?: Layout;
  onPress?: () => void;
};

export type Props = {
  title: string;
  leftItem?: Item;
  rightItem?: Item;
  extraItems?: Array<Item>;
  foreground?: Foreground;
  style: any;
  children: any;
};


class HeaderIOS extends React.Component {
  props: Props;

  render() {
    const {leftItem, title, rightItem, foreground} = this.props;
    const titleColor = foreground === 'dark' ? globalStyles.darkText : 'white';
    const itemsColor = foreground === 'dark' ? globalStyles.lightText : 'white';

    const content = React.Children.count(this.props.children) === 0
      ? <Text style={[styles.titleText, {color: titleColor}]}>
          {title}
        </Text>
      : this.props.children;
    return (
      <View style={[styles.header, this.props.style]} >
        <View style={styles.leftItem}>
          <ItemWrapperIOS color={itemsColor} item={leftItem} />
        </View>
        <View
          accessible={true}
          accessibilityLabel={title}
          accessibilityTraits="header"
          style={styles.centerItem}>
          {content}
        </View>
        <View style={styles.rightItem}>
          <ItemWrapperIOS color={itemsColor} item={rightItem} />
        </View>
      </View>
    );
  }

}

class ItemWrapperIOS extends React.Component {
  props: {
    item: Item;
    color: string;
  };

  render() {
    const {item, color} = this.props;
    if (!item) {
      return null;
    }

    let content;
    const {title, icon, layout, onPress} = item;


    if (layout !== 'icon' && title) {
      if (title === 'ios-car') {
          content = <Icon name="ios-car" size={30} color='white' onPress={Actions.Results}/>

        } else if ( title === "ios-heart" ) {
          content = <Icon name="ios-heart" size={30} color='white' onPress={Actions.Favorites}/>

        } else {
          content = <Icon name='ios-settings' size={30} color='white' onPress={Actions.Search}/>
        }

    } else if (icon) {
      content = <Image source={title} />;
    }

    return (
      <TouchableOpacity
        accessibilityLabel={title}
        accessibilityTraits="button"
        style={styles.itemWrapper}>
        {content}
      </TouchableOpacity>
    );
  }
}


var STATUS_BAR_HEIGHT = 20;
var HEADER_HEIGHT = 44  + STATUS_BAR_HEIGHT  ;

var styles = StyleSheet.create({
  toolbarContainer: {
    paddingTop: STATUS_BAR_HEIGHT,
  },
  toolbar: {
    height: HEADER_HEIGHT - STATUS_BAR_HEIGHT,
  },
  header: {
    backgroundColor: 'transparent',
    paddingTop: STATUS_BAR_HEIGHT,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  leftItem: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerItem: {
    flex: 2,
    alignItems: 'center',
  },
  rightItem: {
    flex: 1,
    alignItems: 'flex-end',
  },
  itemWrapper: {
    padding: 11,
  },
  itemText: {
    letterSpacing: 1,
    fontSize: 12,
    color: 'white',
  },
});

const Header = HeaderIOS;
Header.height = HEADER_HEIGHT;

module.exports = Header;

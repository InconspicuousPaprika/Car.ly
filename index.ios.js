'use strict';
var React = require('react-native');
var Login = require('./src/components/Login');

class CarlyApp extends React.Component {
	render() {
		return (
			<React.NavigatorIOS 
				initialRoute={{
					title: 'Carly',
					component: Login
				}}/>
		);
	}
}

React.AppRegistry.registerComponent('CarlyApp', function() {return CarlyApp})


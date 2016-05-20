# Car.ly
Vehicle shopping application

## Introduction 

Car.ly is a (auto)mobile application that provides aggregated vehicle listing  data, according to user input. Delivering a variety of results from various websites, Car.ly empowers users to effortlessly navigate the automobile market and to compare and contrast local search results in an interactive and intuitive way. Car.ly delivers a seamless  shopping experience for drivers on the go. 

<hr>
## Table of Contents

  - [Example](#example)
  - [Installation](#installation)
  - [Technologies](#technologies)
  - [Architecture](#architecture)
  - [API Endpoints](#api)
  - [Contributing](#contributing)
  - [Meet the Engineers](#meet-the-engineers)
  - [Questions and Issues](#questions-and-issues)

==========
## Example
![alt tag](http://i63.tinypic.com/2111gsh.jpg)  
![alt tag](http://i63.tinypic.com/23ra6j7.jpg)  
![alt tag](http://i67.tinypic.com/15xr4tw.jpg)  
![alt tag](http://i65.tinypic.com/33z5h75.jpg)  
  
  

===============

## Installation

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

```bash
$ npm install -g react-native-cli
$ npm install
```

Also, you can use [generator-rnb](https://github.com/jhen0409/generator-rnb) to create project with this boilerplate.

## Development

#### Start local server

```bash
$ npm start
```

#### iOS

Run command to open iOS simulator and run app:

```bash
$ npm run ios
```

Or open `ios/RNBoilerplate.xcodeproj` file with XCode:

```bash
$ npm run ios-open
```

#### Android (5.0+)

Open Android emulator (recommented [Genymotion](https://www.genymotion.com)) and run command: (Or connect real device via USB)

```bash
$ adb reverse tcp:8081 tcp:8081  # react-native local server
$ adb reverse tcp:5678 tcp:5678  # remotedev local server
$ npm run android
```

__*[Emulator only]*__ If you're still use Android 4.0, it will cannot use `adb reverse`, you should use `10.0.2.2` (Genymotion: `10.0.3.2`) instead of `localhost` in [configureStore.js](src/configureStore.js#L15).

## Technologies

###Front-end
React Native  
Redux  
Facebook oauth    
Import.io  

###Back-end
MySql   
Express.js  
Node.js  

## Architecture
### High Level Architecture
![Architecture](http://i65.tinypic.com/20123p2.jpg)
### Database Schema
Database in MySQL

![](http://i63.tinypic.com/jhrl20.jpg)

## API
##### Public End Points
|Description|Endpoint|
|---|---|
|[Sign up](#post)|POST /users|
|[Log-in OAuth](#post)|POST /users/Fblogin|
|[Log-in user](#post)|POST /login|
|[Get User Info](#get-userbasicinfo)|GET /favorites/:user-email|
|[Create user favorites](#post)|POST /favorites|
|[Delete user favorites](#post)|DELETE /favorites|

=====================
## Meet The Engineers
Product Owner 
- [**Bo Sanders**](https://github.com/biletnikoff)

Scrum Master 
- [**Claire Hsu**](https://github.com/cehsu)

Development Team 
- [**David Gilroy**](https://github.com/dgilroy77)
- [**John Zuccarelli**](https://github.com/jzucca)

===============
## Contributing
Car.ly was built using waffle.io as the project organization tool.

## Questions and Issues
For any issues, please refer to [**our issues page**](https://github.com/InconspicuousPaprika/Car.ly/issues)
Please direct any questions regarding Car.ly to [**our wiki page**](https://github.com/InconspicuousPaprika/Car.ly/wiki)

Thank you!

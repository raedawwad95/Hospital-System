import React from 'react';
import{ StyleSheet, Text, View, Button, Animated, Easing } from 'react-native';
import {
  createSwitchNavigator, createStackNavigator, createBottomTabNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from './components/HomePage.js';
import Login from './components/Login.js';
import Create from './components/Create.js';
import News from './components/News.js';
import Profile from './components/Profile.js';
import Logout from './components/Logout.js';
import Emergency from './components/Emergency.js';
import Appointments from './components/PickAppoinment.js';

const Inside = createBottomTabNavigator({
  News: {screen: News},
  Profile :{screen: Profile},
  Appointments : {screen: Appointments},
  Emergency: {screen: Emergency},
  Logout :{screen: Logout},
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor : '#87d2f6',
      labelStyle: {
        fontSize: 15,
      },
      style: {
        backgroundColor: '#5a79ea',
      },
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomePage') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        } else if (routeName === 'News') {
          iconName = `ios-planet${focused ? '' : '-outline'}`;
        } else if (routeName === 'Logout') {
          iconName = `ios-close${focused ? '' : '-outline'}`;
        } else if (routeName === 'Emergency') {
          iconName = `ios-alert${focused ? '' : '-outline'}`;
        } else if (routeName === 'Appointments') {
          iconName = `ios-copy${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
);

const Main = createSwitchNavigator({
  Home: { screen: Login },
  Create : {screen: Create},
  MainHome: Inside,
  }, 
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      header:false,
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);

export default class App extends React.Component {
  render() {
    return <Main />;
  }
}

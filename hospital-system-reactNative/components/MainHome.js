import React from 'react';
import{ StyleSheet, Text, View, Button, Animated, Easing } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomePage from './HomePage.js';
import Create from './Create.js';

const Inside = createStackNavigator({
  Home: { screen: HomePage },
  Create : {screen: Create},
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
        duration: 800,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default class MainHome extends React.Component {
  render() {
    return <Inside />;
  }
}

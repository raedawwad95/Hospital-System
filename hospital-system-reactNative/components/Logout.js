import React from 'react';
import{ Text, View, AsyncStorage } from 'react-native';
import {
  createStackNavigator, createBottomTabNavigator
} from 'react-navigation';


class Logout extends React.Component {
  constructor(props) {
    super(props)
    this._signOutAsync = this._signOutAsync.bind(this);
  }

  componentDidMount() {
    this._signOutAsync();
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View >

      </View>
    );
  }
}

export default Logout;

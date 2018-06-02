import React from 'react';
import{ StyleSheet, Text, View, Button, AsyncStorage, Image } from 'react-native';
import {
  createStackNavigator, createBottomTabNavigator
} from 'react-navigation';
import { ImagePicker } from 'expo';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     avatarSource:'ttt',
     image: null,
       latitude: null,
      longitude: null,
      error: null,      
    }
  }
  static navigationOptions = {
    title: 'Home',

  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Home');
  };

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 3],
      base64:true,
    });

    axios.post('https://api.imgur.com/3/image', result.base64, {
        headers: {
          "Authorization": "Client-ID bb8a64e82b834b5",
        }
      })
        .then(function (response) {
          console.log(response.data)
          console.log(response.data.data.link)
        })
        .catch(function (error) {
          console.log(error);
        });

    //console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    let { image } = this.state;
    return (
      <View style={styles.container}>
        <Text>44444</Text>
        <Text>login</Text>
        <Text> Nested Details</Text>
        <Button
          title="Pick an image from camera roll"
          onPress={this._pickImage}
        />
        <Button
          title="create page"
          onPress={() => this.props.navigation.navigate('Create')}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Text>Shake  phone to open the developer menu.</Text>
       

        <Button
          title="Logout"
          onPress={this._signOutAsync}
        />

         <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;

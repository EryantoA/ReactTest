import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View style={{margin: 10, flex: 1}}>
      <View style={{width: 80, height: 80, backgroundColor: '#8e44ad'}} />
      <Text>Hello world</Text>
      <Home />
      <Text>Hello world</Text>
      <ImageUrl />
      <Text>Hello world</Text>
      <TextInput style={{borderWidth: 1}} />
      <ImageBase />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Home = () => {
  return <Text>Ujang Bujangan</Text>;
};

const ImageUrl = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

const ImageBase = () => {
  return (
    <Image
      source={require('../../assets/icon/React.webp')}
      style={{width: 120, height: 120}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/arch'}}
          style={{width: 100, height: 100, borderRadius: 30}}
        />
        <Text style={{color: 'blue', fontSize: 22}}>Ini Bangunan</Text>
      </View>
    );
  }
}

export default SampleComponent;

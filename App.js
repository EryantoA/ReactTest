import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import macbook from './assets/Apple-M2-SoC-devrait-maintenant-faire-ses-debuts-sur-MacBook.jpeg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#2ecc71',
          borderWidth: 2,
          borderColor: '#2c3e50',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          marginTop: 12,
          marginLeft: 30,
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2022
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#f2994a',
            marginTop: 12,
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
    marginTop: 40,
    marginLeft: 20,
  },
});

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
      source={require('./assets/React.webp')}
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

export default App;

import { Component } from 'react';
import { Image, Text, View } from 'react-native';
import profile from './assets/pexels-pixabay-220453.jpg';

class Flexbox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#2c3e50',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#e74c3c', width: 50, height: 50}} />
          <View style={{backgroundColor: '#f39c12', width: 50, height: 50}} />
          <View style={{backgroundColor: '#7f8c8d', width: 50, height: 50}} />
          <View style={{backgroundColor: '#2ecc71', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
		<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
			<Image
			source={profile}
			style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
		<View>
			<Text style={{fontSize:20, fontWeight: 'bold'}}>Eryanto Agusriadi</Text>
			<Text>1.000.000 subcriber</Text>
		</View>
		</View>
      </View>
    );
  }
}

export default Flexbox;

import { Component, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import profile from '../../assets/image/pexels-pixabay-220453.jpg';

// class FlexBox extends Component {
// 	constructor(props){
// 		super(props);
// 		console.log('==> constructor');
// 		this.state = {
// 			subscriber : 500,
// 		};
// 	}

// 	componentDidMount(){
// 		console.log('==> component did mount');
// 		setTimeout(() => {
// 			this.setState({
// 				subscriber: 900,
// 			});
// 		}, 2000);
// 	}

// 	componentDidUpdate(){
// 		console.log('==> component did update');
// 	}

// 	componentWillUnmount(){
// 		console.log('==> component will unmount');
// 	}

//   render() {
// 	console.log('==> render');
//     return (
//       <View>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: '#2c3e50',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: '#e74c3c', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#f39c12', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#7f8c8d', width: 50, height: 50}} />
//           <View style={{backgroundColor: '#2ecc71', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Channel</Text>
//           <Text>Tentang</Text>
//         </View>
// 		<View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
// 			<Image
// 			source={profile}
// 			style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//         />
// 		<View>
// 			<Text style={{fontSize:20, fontWeight: 'bold'}}>Eryanto Agusriadi</Text>
// 			<Text>{this.state.subscriber} ribu subcriber</Text>
// 		</View>
// 		</View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
	const [subscriber, setSubscriber] = useState(200);
	useEffect(() => {
		console.log('did mount');
		setTimeout(() => {
			setSubscriber(400);
		}, 2000);
		return () => {
			console.log('did update');
		};
	});

	// useEffect(() => {
	// 	console.log('did update');
	// 	setTimeout(() => {
	// 		setSubscriber(400);
	// 	}, 2000);
	// }, [subscriber]);
	
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
			<Text>{subscriber} ribu subcriber</Text>
		</View>
		</View>
      </View>
	)
}

export default FlexBox;

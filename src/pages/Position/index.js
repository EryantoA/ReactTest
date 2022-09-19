import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import cart from '../../assets/icon/shopping-cart.png';

const Position = () => {
  return (
	<View style={styles.wrapper}>
	  <View style={styles.cartWrapper}>
		<Image source={cart} style={styles.iconCart}/>
		<Text style={styles.notif}>10</Text>
	  </View>
	  <Text style={styles.text}>Keranjang</Text>
	</View>
  );
};

export default Position;

const styles = StyleSheet.create({
	wrapper: {padding: 20,  alignItems: 'center', flexDirection: 'column'},
	cartWrapper: {
		borderWidth: 1, 
		borderColor: '#5f27cd', 
		width: 93, 
		height: 93, 
		borderRadius: 93/2, 
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		marginTop: 20
	},
	iconCart: {width: 50, height:50},
	text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
	notif: {
		fontSize: 12, 
		color: 'white', 
		backgroundColor: '#1dd1a1', 
		padding: 4, 
		width: 24, 
		height: 24, 
		borderRadius: 25, 
		position: 'absolute', 
		top: 0, 
		right: 0
	}
});

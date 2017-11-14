import React from 'react';
import {View, Text} from 'react-native';

const Header=(props)=>{
	const propiedades=props;
	return (
		<View style={styles.header}>
			<Text style={styles.text}>{propiedades.title}</Text>
		</View>
	);
};

const styles={
	header:{
		backgroundColor: '#2d295b',
		height: 60,
		justifyContent: 'center',
		alignItems:'center',
		elevation: 5
	},
	text:{
		color:'white',
		fontSize: 16
	}
}

export {Header};
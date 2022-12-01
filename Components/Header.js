import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { RadioButton, Button, TextInput } from 'react-native-paper';
import { Svg, Circle } from 'react-native-svg';
import SVGImg from '../Assets/Hamburger_icon.svg';
import AjudaExu from './ajudaexupf'
const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.logo}>
                <AjudaExu/>
                <Image style={styles.imageLogo} source={require('../Assets/2770407.png')} />
                <Text style={{ color: 'rgb(65, 158, 215)', fontSize: 30, fontWeight: 'bold' }}>MyHealth</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: '7%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(193, 231, 227)',
    },
    logo: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 15,
    },
    imageLogo: {
        width: 35,
        height: 35,
    },
})

export default Header;
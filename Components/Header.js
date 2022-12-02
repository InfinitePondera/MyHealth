import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = (props) => {

    const openDrawer = () => {
        props.navigation.toggleDrawer();
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.logo}>
                <TouchableOpacity onPress={openDrawer}>
                    <Image style={{width: 40, height: 40, opacity: 0.2}} source={require('../Assets/menuLogo.png')} resizeMode='contain' />
                </TouchableOpacity>
                <Text style={{display: 'flex', flexDirection:'column', alignSelf: 'center', color: 'rgb(65, 158, 215)', fontSize: 25, fontWeight: 'bold', marginLeft: 5 }}>{props.header}</Text>
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
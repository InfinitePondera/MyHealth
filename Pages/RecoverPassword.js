import { sendPasswordResetEmail } from 'firebase/auth';
import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { RadioButton, Button, TextInput } from 'react-native-paper';

import auth from '../config/firebase'

const RecoverPassword = (props) => {
    const [email, setEmail] = React.useState("");
    const recoverPassword = (s) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            console.log("email reset enviado");
            setEmail("");
            props.navigation.pop();
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.logo}>
                    <Image style={styles.imageLogo} source={require('../Assets/2770407.png')} />
                    <Text style={{ color: 'rgb(65, 158, 215)', fontSize: 30, fontWeight: 'bold' }}>MyHealth</Text>
                </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <View style={styles.wrapper}>
                    <Text style={{color: '#EAEAEA', marginRight: 10}}>E-Mail</Text>
                    <TextInput value={email} onChangeText={text => setEmail(text)} style={{ backgroundColor: 'rgb(242, 240, 244)', width: 280, height: 28, fontSize: 16, padding: 1 }}></TextInput>
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Button title="Submit" onPress={() => recoverPassword(email)} textColor='#EAEAEA' style={{marginBottom: 64, width: 188, height: 50, backgroundColor: '#49B976', borderWidth: 1, borderColor: '#37BD6D'}}>Cadastrar</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ADD5D0',
        justifyContent: 'space-between'
    },
    logo: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginVertical: 8,
        marginLeft: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'rgb(193, 231, 227)',
    },
    imageLogo: {
        width: 35,
        height: 35,
    },
    wrapper: {
        marginHorizontal: 32,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15,

    },
    buttonWrapper: {
        display: 'flex',
        borderWidth: 1,
        borderColor: 'red',
        marginBottom: 32,
    },
});

export default RecoverPassword;
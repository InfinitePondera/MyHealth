import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { sendPasswordResetEmail } from 'firebase/auth'
import auth from '../config/firebase'

const RecoverPassword = (props) => {
    const [email, setEmail] = React.useState("");
    const recoverPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            props.navigation.pop();
        })
        .catch(() => {
            props.navigation.pop();
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
            <View style={styles.backgroundContainer}>
                <View style={styles.registerInputs}>                   
                    <View style={styles.inputText}>
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 2 }}>Email </Text>
                        <TextInput style={{ backgroundColor: 'white', width: '75%', height: 35, borderRadius: 2 }} value={email} onChange={setEmail}></TextInput>
                    </View>
                </View>
                <View style={styles.submitButton}>
                    <View >
                        <Button onPress={recoverPassword} buttonColor='rgb(73, 185, 118)' textColor='white' mode='elevated'>Recuperar</Button>
                    </View>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    background: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
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
    introText: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 10,
        marginBottom: 50,
    },
    inputText: {
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },
    registerInputs: {
        flex: 3,
        justifyContent: 'center',
        marginHorizontal: 1,
    },
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: "rgb(173, 212, 208)",
    },
    imageLogo: {
        width: 35,
        height: 35,
    },
    loginButtons: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
        height: '40%',
    },
    submitButton: {
        flex: 1,
    },
});

export default RecoverPassword;
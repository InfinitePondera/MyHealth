import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, Button } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../config/firebase'

const Login = (props) => {

    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [senhaIncorreta, setSenhaIncorreta] = React.useState(false);

    const goToCreateAccount = () => {
        props.navigation.navigate('CreateAccount');
    }

    const goToRecoverPassword = () => {
        props.navigation.navigate('RecoverPassword');
    }

    const goToVaccineList = () => {
        signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            props.navigation.navigate('VaccineList', {props});
        })
        .catch((error) => {
            props.navigation.navigate('VaccineList', {props});
        })
    }

    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={3} style={styles.background} source={require('../Assets/800wm.jpg')} resizeMode="cover">
                <View style={styles.backgroundContainer}>
                    <View style={styles.container}>
                        <View style={styles.logo}>
                            <Image style={styles.imageLogo} source={require('../Assets/2770407.png')} />
                            <Text style={{ color: 'rgb(65, 158, 215)', fontSize: 50, fontWeight: 'bold' }}>MyHealth</Text>
                        </View>
                        <View style={styles.introText}>
                            <Text style={{ color: 'rgb(65, 158, 215)', fontSize: 32, textAlign: 'center' }}>Controle as suas vacinas e fique seguro</Text>
                        </View>
                        <View style={styles.loginInputs}>
                            <View style={styles.inputText}>
                                <Text style={{ color: 'white', fontSize: 20, width: '15%', marginRight: 2, flexGrow: 2 }}>Email </Text>
                                <TextInput style={{backgroundColor: 'white', width: '85%', height: 35, borderRadius: 2}} value={email} onChange={setEmail}></TextInput>
                            </View>
                            <View style={styles.inputText}>
                                <Text style={{ color: 'white', fontSize: 20, width: '15%', marginRight: 2, flexGrow: 2 }}>Senha </Text>
                                <TextInput secureTextEntry={true} style={{backgroundColor: 'white', width: '85%', height: 35, borderRadius: 2}} value={senha} onChange={setSenha}></TextInput>
                                
                            </View>
                            { senhaIncorreta &&
                                <View style={{borderWidth: 1, borderColor: 'red'}}>
                                    <Text style={{ color: 'red', fontSize: 20, marginRight: 2, flexGrow: 2 }}>Senha Incorreta! </Text>
                                </View>
                            }
                            
                        </View>
                        <View style={styles.loginButtons}>
                            <View >
                                <Button onPress={goToVaccineList} color="rgb(73, 185, 118)" title='Entrar'></Button>
                            </View>
                            <View >
                                <Button onPress={goToCreateAccount} title='Criar minha Conta'></Button>
                            </View>
                            <View >
                                <Button onPress={goToRecoverPassword} color="rgb(181, 199, 209)" title='Esqueci minha Senha'></Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
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
        flex: 2,
        marginVertical: 50,
        justifyContent: 'center',
        flexDirection: 'row',

    },
    introText: {
        flex: 2,
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
    loginInputs: {
        flex: 4,
        justifyContent: 'center',
        marginHorizontal: 10,

    },
    backgroundContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(170, 178, 177, 0.80)",
    },
    imageLogo: {
        width: 50,
        height: 50,
    },
    loginButtons: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 10,
        height: '40%',

    },
});

export default Login;

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase'

const CreateAccount = (props) => {
    const [email, setEmail] = React.useState("");
    const [senha, setSenha] = React.useState("");
    const [senhaRepeat, setSenhaRepeat] = React.useState("");
    const [nome, setNome] = React.useState("");
    const [dataNascimento, setDataNascimento] = useState(new Date())
    const [generoSelecionado, setGeneroSelecionado] = React.useState('Masculino');
    const [pickerOpen, setPickerOpen] = React.useState(false);
    const [senhaInvalida, setSenhaInvalida] = React.useState(false);

    const register = () => {
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log(JSON.stringify(userCredential))
                props.navigation.pop()
            })
            .catch((error) => {
                console.log("Ocorreu um erro ao cadastrar: " + error.message)
                props.navigation.pop()
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
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 2 }}>Nome Completo </Text>
                        <TextInput style={{ backgroundColor: 'white', width: '75%', height: 35, borderRadius: 2 }} value={nome} onChange={setNome}></TextInput>
                    </View>
                    <View style={styles.inputText}>
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 1 }}>Sexo </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton
                                value="Masculino"
                                color='rgb(65, 158, 215)'
                                status={generoSelecionado === 'Masculino' ? 'checked' : 'unchecked'}
                                onPress={() => setGeneroSelecionado('Masculino')} />
                            <Text style={{ alignSelf: 'center', color: 'white' }}>Masculino</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton
                                value="Feminino"
                                color='rgb(65, 158, 215)'
                                status={generoSelecionado === 'Feminino' ? 'checked' : 'unchecked'}
                                onPress={() => setGeneroSelecionado('Feminino')} />
                            <Text style={{ alignSelf: 'center', color: 'white' }}>Feminino</Text>
                        </View>
                    </View>
                    <View style={styles.inputText}>
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 2 }}>Data nascimento </Text>
                        <TextInput style={{ backgroundColor: 'white', width: '45%', height: 35, borderRadius: 2 }} value={dataNascimento.toLocaleDateString()} onChange={setDataNascimento} />
                        <Button style={{ height: 25, width: 50 }} icon="calendar" mode="outlined" onPress={() => setPickerOpen(true)}></Button>
                        <DatePicker
                            date={dataNascimento}
                            modal
                            mode='date'
                            open={pickerOpen}
                            onConfirm={(dataNascimento) => {
                                setPickerOpen(false)
                                setDataNascimento(dataNascimento)
                            }}
                            onCancel={() => {
                                setPickerOpen(false)
                            }}
                        />
                    </View>
                    <View style={styles.inputText}>
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 2 }}>Email </Text>
                        <TextInput style={{ backgroundColor: 'white', width: '75%', height: 35, borderRadius: 2 }} value={email} onChange={setEmail}></TextInput>
                    </View>
                    <View style={styles.inputText}>
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 2 }}>Senha </Text>
                        <TextInput secureTextEntry={true} style={{ backgroundColor: 'white', width: '75%', height: 35, borderRadius: 2 }} value={senha} onChange={setSenha}></TextInput>
                    </View>
                    <View style={styles.inputText}>
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 2 }}>Repetir Senha </Text>
                        <TextInput secureTextEntry={true} style={{ backgroundColor: 'white', width: '75%', height: 35, borderRadius: 2 }} value={senhaRepeat} onChange={setSenhaRepeat}></TextInput>
                    </View>
                    {senhaInvalida &&
                        <View>
                            <Text style={{ color: 'red', fontSize: 15, marginRight: 2, }}>Senha Incorreta! </Text>
                        </View>
                    }
                </View>
                <View style={styles.submitButton}>
                    <View >
                        <Button onPress={register} buttonColor='rgb(73, 185, 118)' textColor='white' mode='elevated'>Cadastrar</Button>
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

export default CreateAccount;
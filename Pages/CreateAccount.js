import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { RadioButton, Button, TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const CreateAccount = (props) => {
    const [enteredName, setEnteredName] = useState(''); //INIT TO EMPTY
    const [sexo, setSexo] = React.useState('Masculino');
    const [dataNascimento, setDataNascimento] = useState(new Date())
    const [pickerOpen, setPickerOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [senhaRepeat, setSenhaRepeat] = React.useState('');
    const [senhaInvalida, setSenhaInvalida] = React.useState(false);

    const register = (e, s, r) =>{
        if (s != r) {
            setSenhaInvalida(true)
        }
        else {
            createUserWithEmailAndPassword(auth, e, s)
            .then(() => {
                console.log("Usuario cadastrado com sucesso");
                setEnteredName("");
                setSexo('Masculino');
                setDataNascimento('');
                setEmail("");
                setSenha("");
                setSenhaRepeat("");
                props.navigation.pop();
            })
            .catch((error) => {
                console.log(error);
            })
        }
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
                    <Text style={{marginRight: 10, color: '#EAEAEA'}}>Nome completo</Text>
                    <TextInput value={enteredName} onChangeText={text => setEnteredName(text)}  style={{ backgroundColor: 'rgb(242, 240, 244)', width: 201, height: 28, fontSize: 16, paddingVertical: 1 }}></TextInput>
                </View>
                <View style={styles.wrapper}>
                    <Text style={{color: '#EAEAEA', marginRight: 10, alignSelf: 'center'}}>Sexo</Text>
                    <RadioButton.Group onValueChange={newValue => setSexo(newValue)} value={sexo}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{color: '#EAEAEA'}}>Masculino</Text>
                            <RadioButton value="Masculino" />
                            <Text style={{color: '#EAEAEA'}}>Feminino</Text>
                            <RadioButton value="Feminino" />
                        </View>
                    </RadioButton.Group>
                </View>
                <View style={styles.wrapper}>
                    <Text style={{color: '#EAEAEA', marginRight: 10}}>Data de Nascimento</Text>
                    <TextInput value={dataNascimento.toLocaleDateString('pt-BR')} style={{ backgroundColor: 'rgb(242, 240, 244)', width: 201, height: 28, fontSize: 16, padding: 1 }} right={<TextInput.Icon onPress={() => { setPickerOpen(true) }} icon="calendar" />} />
                    <DatePicker
                        modal
                        mode='date'
                        locale='pt-BR'
                        open={pickerOpen}
                        date={dataNascimento}
                        onConfirm={(dataNascimento) => {
                            setPickerOpen(false)
                            setDataNascimento(dataNascimento)
                        }}
                        onCancel={() => {
                            setPickerOpen(false)
                        }}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={{color: '#EAEAEA', marginRight: 10}}>E-Mail</Text>
                    <TextInput value={email} onChangeText={text => setEmail(text)} style={{ backgroundColor: 'rgb(242, 240, 244)', width: 201, height: 28, fontSize: 16, padding: 1 }}></TextInput>
                </View>
                <View style={styles.wrapper}>
                    <Text style={{color: '#EAEAEA', marginRight: 10}}>Senha</Text>
                    <TextInput value={senha} onChangeText={text => setSenha(text)} secureTextEntry style={{ backgroundColor: 'rgb(242, 240, 244)', width: 201, height: 28, fontSize: 16, padding: 1 }}></TextInput>
                </View>
                <View style={styles.wrapper}>
                    <Text style={{color: '#EAEAEA', marginRight: 10}}>Repetir Senha</Text>
                    <TextInput value={senhaRepeat} onChangeText={text => setSenhaRepeat(text)} secureTextEntry style={{ backgroundColor: 'rgb(242, 240, 244)', width: 201, height: 28, fontSize: 16, padding: 1 }}></TextInput>
                </View>

            </View>
            
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Button title="Submit" onPress={() => register(email, senha, senhaRepeat)} textColor='#EAEAEA' style={{marginBottom: 64, width: 188, height: 50, backgroundColor: '#49B976', borderWidth: 1, borderColor: '#37BD6D'}}>Cadastrar</Button>
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

export default CreateAccount;
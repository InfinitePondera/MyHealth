import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

const NewVaccine = (props) => {
    const [vacina, setVacina] = React.useState("");
    const [dataVacina, setDataVacina] = useState(new Date())
    const [dataProxVacina, setDataProxVacina] = useState(new Date())
    const [doseSelecionada, setDoseSelecionada] = React.useState('1a. dose');
    const [pickerDoseOpen, setPickerDoseOpen] = React.useState(false);
    const [pickerNextOpen, setPickerNextOpen] = React.useState(false);
    const [uri, setUri] = useState('')

    const openImagePicker = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            setUri(response.assets[0].uri)
            console.log(uri)
        })
    }

    const register = (v, dv, dpv, ds, img) => {
        addDoc(collection(db, "vacinas"), {
            dataVacina: dv,
            vacina: v,
            dataProxVacina: dpv,
            dose: ds,
            comprovante: img
        })
        .then((result) => {
            console.log();
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
            <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <View style={styles.wrapper}>
                    <Text style={{ color: '#EAEAEA', marginRight: 10 }}>Data de Vacinação</Text>
                    <TextInput value={dataVacina.toLocaleDateString('pt-BR')} style={{ backgroundColor: 'rgb(242, 240, 244)', width: 201, height: 28, fontSize: 16, padding: 1 }} right={<TextInput.Icon onPress={() => { setPickerDoseOpen(true) }} icon="calendar" />} />
                    <DatePicker
                        modal
                        mode='date'
                        locale='pt-BR'
                        open={pickerDoseOpen}
                        date={dataVacina}
                        onConfirm={(dataVacina) => {
                            setPickerDoseOpen(false)
                            setDataVacina(dataVacina)
                        }}
                        onCancel={() => {
                            setPickerDoseOpen(false)
                        }}
                    />
                </View>
                <View style={styles.wrapper}>
                    <Text style={{marginRight: 10, color: '#EAEAEA'}}>Vacina</Text>
                    <TextInput value={vacina} onChangeText={text => setVacina(text)}  style={{ backgroundColor: 'rgb(242, 240, 244)', width: 201, height: 28, fontSize: 16, paddingVertical: 1 }}></TextInput>
                </View>
                <View style={styles.wrapper}>
                    <Text style={{ color: '#EAEAEA', marginRight: 10, alignSelf: 'center' }}>Dose</Text>
                    <RadioButton.Group onValueChange={newValue => setDoseSelecionada(newValue)} value={doseSelecionada}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ color: '#EAEAEA' }}>1a. Dose</Text>
                            <RadioButton value="1a. Dose" />
                            <Text style={{ color: '#EAEAEA' }}>2a. Dose</Text>
                            <RadioButton value="2a. Dose" />
                            <Text style={{ color: '#EAEAEA' }}>3a. Dose</Text>
                            <RadioButton value="3a. Dose" />
                            <Text style={{ color: '#EAEAEA' }}>Dose Única</Text>
                            <RadioButton value="Dose Unica" />
                        </View>
                    </RadioButton.Group>
                </View> 
                <View style={styles.wrapper}>
                    <Text style={{ color: '#EAEAEA', marginRight: 10 }}>Próxima Vacinação</Text>
                    <TextInput value={dataProxVacina.toLocaleDateString('pt-BR')} style={{ backgroundColor: 'rgb(242, 240, 244)', width: 201, height: 28, fontSize: 16, padding: 1 }} right={<TextInput.Icon onPress={() => { setPickerNextOpen(true) }} icon="calendar" />} />
                    <DatePicker
                        modal
                        mode='date'
                        locale='pt-BR'
                        open={pickerNextOpen}
                        date={dataProxVacina}
                        onConfirm={(dataProxVacina) => {
                            setPickerNextOpen(false)
                            setDataProxVacina(dataProxVacina)
                        }}
                        onCancel={() => {
                            setPickerNextOpen(false)
                        }}
                    />
                </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Button title="Submit" onPress={() => register(enteredName, email, senha, senhaRepeat)} textColor='#EAEAEA' style={{ marginBottom: 64, width: 188, height: 50, backgroundColor: '#49B976', borderWidth: 1, borderColor: '#37BD6D' }}>Cadastrar</Button>
            </View>
        </View>
    )
}

export default NewVaccine;

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
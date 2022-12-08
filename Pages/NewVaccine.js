import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { RadioButton, Button, TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { db } from '../config/firebase';
import { addDoc, collection, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { useSelector, useDispatch } from 'react-redux';
import { reducerSetVacina } from '../redux/vacinaSlice';

const NewVaccine = (props) => {
    const [vacina, setVacina] = React.useState("");
    const [dataVacina, setDataVacina] = useState(new Date())
    const [dataProxVacina, setDataProxVacina] = useState(new Date())
    const [doseSelecionada, setDoseSelecionada] = React.useState('1a. dose');
    const [pickerDoseOpen, setPickerDoseOpen] = React.useState(false);
    const [pickerNextOpen, setPickerNextOpen] = React.useState(false);
    const uid = useSelector((state) => state.login.uid);
    const docId = useSelector((state) => state.vacina.idVacina);
    const [uri, setUri] = useState('')
    const dispatch = useDispatch();

    const openImagePicker = () => {
        launchCamera({ mediaType: 'photo' }, (response) => {
            setUri(response.assets[0].uri);
            console.log(uri);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const register = (uid, v, dv, dpv, ds, img) => {
        addDoc(collection(db, "vacinas"), {
            user: uid,
            dataVacina: dv,
            vacina: v,
            dataProxVacina: dpv,
            dose: ds,
            comprovante: img
        })
        .then((result) => {
            console.log(result.id);
            props.navigation.pop();
        })
    }

    const updateVac = (id, v, dv, dpv, ds, img) => {
        updateDoc(doc(db, "vacinas", id), {
            dataVacina: dv,
            vacina: v,
            dataProxVacina: dpv,
            dose: ds,
            comprovante: img
        })
        .then((result) => {
            dispatch(reducerSetVacina({idVacina: undefined}))
            props.navigation.pop();
        })
        .catch((error) => {
            alert(error);
        })
    }

    const deleteVac = (id) => {
        deleteDoc(doc(db, "vacinas", id))
        .then(() => {
            dispatch(reducerSetVacina({idVacina: undefined}))
            props.navigation.pop();
        })
        .catch((error) => {
            alert(error);
        })
    }

    useEffect(() => {
        console.log(docId)
    }, [docId])

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
                    <TextInput value={vacina} onChangeText={text => setVacina(text)}  style={{ backgroundColor: 'rgb(242, 240, 244)', width: 201, height: 28, fontSize: 16, paddingVertical: 1 }} />
                </View>
                <View style={styles.wrapper}>
                    <Text style={{ color: '#EAEAEA', marginRight: 10, alignSelf: 'center' }}>Dose</Text>
                    <RadioButton.Group onValueChange={newValue => setDoseSelecionada(newValue)} value={doseSelecionada}>
                        <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', marginLeft: 50 }}>
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
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{marginRight: 10, color: '#EAEAEA'}}>Comprovante</Text>
                    <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <Button title="Picker" onPress={() => openImagePicker()} textColor='#EAEAEA' style={{ marginBottom: 64, width: 188, height: 25, backgroundColor: '#49B976', borderWidth: 1, borderColor: '#37BD6D' }}></Button>
                            {uri ?
                                <Image source={{uri: uri}} style={{width: 180, height: 150}} />
                                :
                                null
                            }
                    </View>
                        
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
            
            { docId ??
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Button title="Submit" onPress={() => register(uid, vacina, dataVacina, dataProxVacina, doseSelecionada, uri)} textColor='#EAEAEA' style={{ marginBottom: 64, width: 188, height: 50, backgroundColor: '#49B976', borderWidth: 1, borderColor: '#37BD6D' }}>Cadastrar</Button>
                </View>
            }
            { !docId ??
                <>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Button title="Submit" onPress={() => updateVac(docId, vacina, dataVacina, dataProxVacina, doseSelecionada, uri)} textColor='#EAEAEA' style={{ marginBottom: 64, width: 188, height: 50, backgroundColor: '#49B976', borderWidth: 1, borderColor: '#37BD6D' }}>Atualizar</Button>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Button title="Submit" onPress={() => deleteVac(docId)} textColor='#EAEAEA' style={{ marginBottom: 64, width: 188, height: 50, backgroundColor: 'rgb(253, 121, 121)', borderWidth: 1, borderColor: '#37BD6D' }}>Deletar</Button>
                    </View>
                </>
            }
            
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
    imagePickerWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 15
    },
    buttonWrapper: {
        display: 'flex',
        borderWidth: 1,
        borderColor: 'red',
        marginBottom: 32,
    },
});
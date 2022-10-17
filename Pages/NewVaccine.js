import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { launchImageLibrary } from 'react-native-image-picker';

const NewVaccine = (props) => {
    const [vacina, setVacina] = React.useState("");
    const [datavacina, setDatavacina] = useState(new Date())
    const [dataProxVacina, setDataProxVacina] = useState(new Date())
    const [doseSelecionada, setDoseSelecionada] = React.useState('1a. dose');
    const [pickerOpen, setPickerOpen] = React.useState(false);
    const [uri, setUri] = useState('')

    const openImagePicker = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            setUri(response.assets[0].uri)
            console.log(uri)
        })
    }

    const register = (props) => {
        var obj = {
            vaccineTitle: vacina,
            vaccineCount: doseSelecionada,
            vaccineDate: datavacina,
            vaccineImage: '../Assets/800wm.jpg',
            nextVaccineDate: dataProxVacina,
        }
        props.itens.add(obj)
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
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 2 }}>Data de vacinação </Text>
                        <TextInput style={{ backgroundColor: 'white', width: '45%', height: 35, borderRadius: 2 }} value={datavacina.toLocaleDateString()} onChange={setDatavacina} />
                        <Button style={{ height: 25, width: 50 }} icon="calendar" mode="outlined" onPress={() => setPickerOpen(true)}></Button>
                        <DatePicker
                            date={datavacina}
                            modal
                            mode='date'
                            open={pickerOpen}
                            onConfirm={(datavacina) => {
                                setPickerOpen(false)
                                setDatavacina(datavacina)
                            }}
                            onCancel={() => {
                                setPickerOpen(false)
                            }}
                        />
                    </View>
                    <View style={styles.inputText}>
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 2 }}>Vacina </Text>
                        <TextInput style={{ backgroundColor: 'white', width: '75%', height: 35, borderRadius: 2 }} value={vacina} onChange={setVacina}></TextInput>
                    </View>
                    <View style={styles.inputText}>
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 1 }}>Dose </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton
                                value="1a. dose"
                                color='rgb(65, 158, 215)'
                                status={doseSelecionada === '1a. dose' ? 'checked' : 'unchecked'}
                                onPress={() => setDoseSelecionada('1a. dose')} />
                            <Text style={{ alignSelf: 'center', color: 'white' }}>1a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton
                                value="2a. dose"
                                color='rgb(65, 158, 215)'
                                status={doseSelecionada === '2a. dose' ? 'checked' : 'unchecked'}
                                onPress={() => setDoseSelecionada('2a. dose')} />
                            <Text style={{ alignSelf: 'center', color: 'white' }}>2a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton
                                value="3a. dose"
                                color='rgb(65, 158, 215)'
                                status={doseSelecionada === '3a. dose' ? 'checked' : 'unchecked'}
                                onPress={() => setDoseSelecionada('3a. dose')} />
                            <Text style={{ alignSelf: 'center', color: 'white' }}>3a. dose</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <RadioButton
                                value="Dose unica"
                                color='rgb(65, 158, 215)'
                                status={doseSelecionada === 'Dose unica' ? 'checked' : 'unchecked'}
                                onPress={() => setDoseSelecionada('Dose unica')} />
                            <Text style={{ alignSelf: 'center', color: 'white' }}>Dose unica</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={openImagePicker}>
                            <Text>Clique aqui para pegar uma imagem</Text>
                        </TouchableOpacity>

                        {uri ?
                            <Image source={{ uri: uri }} style={{ width: 300, height: 100 }} />
                            :
                            null
                        }
                    </View>
                    <View style={styles.inputText}>
                        <Text style={{ color: 'white', fontSize: 16, width: '15%', marginRight: 2, flexGrow: 2 }}>Proxima Vacinação </Text>
                        <TextInput style={{ backgroundColor: 'white', width: '45%', height: 35, borderRadius: 2 }} value={dataProxVacina.toLocaleDateString()} onChange={setDataProxVacina} />
                        <Button style={{ height: 25, width: 50 }} icon="calendar" mode="outlined" onPress={() => setPickerOpen(true)}></Button>
                        <DatePicker
                            date={dataProxVacina}
                            modal
                            mode='date'
                            open={pickerOpen}
                            onConfirm={(dataProxVacina) => {
                                setPickerOpen(false)
                                setDataProxVacina(dataProxVacina)
                            }}
                            onCancel={() => {
                                setPickerOpen(false)
                            }}
                        />
                    </View>

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

export default NewVaccine;

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
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton, Button, TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import VaccineCard from "../Components/VaccineCard";
import Header from "../Components/Header";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../config/firebase';
import { useDispatch, useSelector } from "react-redux";
import { reducerSetVacina } from "../redux/vacinaSlice";

const VaccineList = (props) => {
    const navigation = useNavigation();
    const [vacinas, setVacinas] = useState([]);
    const [searchString, setSearchString] = useState('');
    const uid = useSelector((state) => state.login.uid);
    const q = query(collection(db, "vacinas"))
    const dispatch = useDispatch();

    useEffect(() => {
        onSnapshot(q, (result) => {
            const listaVacinas = []
            result.forEach((doc) => {
                listaVacinas.push({
                    id: doc.id,
                    user: doc.data().uid,
                    dataVacina: doc.data().dataVacina,
                    vacina: doc.data().vacina,
                    dataProxVacina: doc.data().dataProxVacina,
                    dose: doc.data().dose,
                    comprovante: doc.data().comprovante,
                })
            })
            setVacinas(listaVacinas);
        })    
    }, [uid])
    
    const goToNewVaccine = () => {
        dispatch(reducerSetVacina({idVacina: undefined}))
        navigation.navigate('NewVaccine');
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} header='Lista de Vacinas' />
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextInput value={searchString} left={<TextInput.Icon disabled icon="magnify" />} style={styles.searchBox} placeholder="Pesquise..."></TextInput>
            </View>
            <FlatList
                style={styles.background}
                data={vacinas} numColumns={2}
                renderItem={(item) => <VaccineCard item={item} />}
            />
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Button style={styles.registerButton} textColor='#EAEAEA' onPress={goToNewVaccine} mode="outlined">Cadastrar nova vacina</Button>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ADD5D0',
    },
    background: {
        width: '100%',
        height: '100%',

    },
    registerButton: {
        width: 210,
        height: 50,
        backgroundColor: '#49B976',
        borderWidth: 1,
        borderColor: '#37BD6D',
        marginBottom: 50,
    },
    searchBox: {
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 10,
        backgroundColor: 'white',
        padding: 1,
        paddingHorizontal: 3,
        width: 350,
        height: 25,
    }
});

export default VaccineList;
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton, Button, TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import VaccineCard from "../Components/VaccineCard";
import Header from "../Components/Header";


export const vacinas = [    
    {
        vaccineTitle: "CoronaVac",
        vaccineCount: "1a. dose",
        vaccineDate: "01/21/2022",
        nextVaccineDate: "07/21/2022",
    },
    {
        vaccineTitle: "Pfizer Covid-19",
        vaccineCount: "1a. dose",
        vaccineDate: "03/25/2022",
        nextVaccineDate: "08/13/2022",
    },
    {
        vaccineTitle: "J&J Covid-19",
        vaccineCount: "Dose unica",
        vaccineDate: "12/25/2021",
    },
    {
        vaccineTitle: "Soro de Supersoldado",
        vaccineCount: "Dose unica",
        vaccineDate: "03/01/1945",
    },
]

const VaccineList = (props) => {
    const navigation = useNavigation();
    

    const goToNewVaccine = (props) => {
        navigation.navigate('NewVaccine', {itens: vacinas});
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} header='Lista de Vacinas' />
            <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <TextInput left={<TextInput.Icon disabled icon="magnify" />} style={styles.searchBox} placeholder="Pesquise..."></TextInput>
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
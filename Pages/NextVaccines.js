import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, FlatList } from 'react-native';
import { RadioButton, Button, TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";
import NextVaccineComponent from "../Components/NextVaccineComponent";

export const proxVacinas = [    
    {
        vaccineName: "CoronaVac",
        vaccineDate: "01/21/2022",
    },
    {
        vaccineName: "CoronaVac",
        vaccineDate: "01/21/2022",
    },
    {
        vaccineName: "CoronaVac",
        vaccineDate: "01/21/2022",
    },
    {
        vaccineName: "CoronaVac",
        vaccineDate: "01/21/2022",
    },
]

const NextVaccines = (props) => {
    const navigation = useNavigation();

    const goToNewVaccine = (props) => {
        navigation.navigate('NewVaccine');
    }

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} header='Próximas Vacinas' />
            <FlatList
                style={styles.background}
                data={proxVacinas} numColumns={1}
                renderItem={(item) => <NextVaccineComponent nextVaccineData={item} />}
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
        marginTop: 15,
        marginLeft: 10,
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

export default NextVaccines;
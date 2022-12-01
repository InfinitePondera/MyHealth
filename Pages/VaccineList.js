import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton, Button } from 'react-native-paper';
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
            <Header />
            <FlatList
                style={styles.background}
                data={vacinas} numColumns={2}
                renderItem={(item) => <VaccineCard item={item} />}
                ListFooterComponent={<Button onPress={goToNewVaccine} mode="outlined">Cadastrar nova vacina</Button>}
            />

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
    
    introText: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 10,
        marginBottom: 50,
    },
    scrollBackground: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    
    backgroundContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(170, 178, 177, 0.80)",
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

export default VaccineList;
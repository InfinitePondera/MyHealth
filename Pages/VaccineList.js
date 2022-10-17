import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { RadioButton, Button } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import VaccineCard from "../Components/VaccineCard";

export const vacinas = [    
]

const VaccineList = (props) => {
    const navigation = useNavigation();
    

    const goToNewVaccine = (props) => {
        navigation.navigate('NewVaccine', {itens: vacinas});
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.logo}>
                    <Image style={styles.imageLogo} source={require('../Assets/2770407.png')} />
                    <Text style={{ color: 'rgb(65, 158, 215)', fontSize: 30, fontWeight: 'bold' }}>MyHealth</Text>
                </View>
            </View>
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
    },
    background: {
        width: '100%',
        height: '100%',

    },
    headerContainer: {
        height: '7%',
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
    scrollBackground: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    logo: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 15,
    },
    backgroundContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: "rgba(170, 178, 177, 0.80)",
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
});

export default VaccineList;
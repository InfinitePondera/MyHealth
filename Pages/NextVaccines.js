import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, FlatList } from 'react-native';
import { RadioButton, Button, TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../config/firebase';
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import NextVaccineComponent from "../Components/NextVaccineComponent";

const NextVaccines = (props) => {

    const [proxVacinas, setProxVacinas] = useState([]);
    const uid = useSelector((state) => state.login.uid);
    const q = query(collection(db, "vacinas"))

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
            setProxVacinas(listaVacinas);
        })    
    }, [uid])

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} header='Próximas Vacinas' />
            <FlatList
                style={styles.background}
                data={proxVacinas.filter((vacina) => vacina.dataProxVacina)} numColumns={1}
                renderItem={(item) => <NextVaccineComponent nextVaccineData={item} />}
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
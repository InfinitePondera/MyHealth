import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { reducerSetVacina } from "../redux/vacinaSlice";
import { useDispatch } from "react-redux";

const VaccineCard = (props) => {
    const navigation = useNavigation();
    const { item } = props.item;
    const dispatch = useDispatch();
    const goToEdit = (props) => {
        console.log(item.id);
        dispatch(reducerSetVacina({idVacina: item.id}));
        navigation.navigate('NewVaccine');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{backgroundColor: 'rgb(255, 255, 255)'}} onPress={goToEdit}>
                <Text style={{ color: 'rgb(63, 146, 197)' }}>{item.vacina}</Text>
                <Text style={{ color: 'white', backgroundColor: 'rgb(63, 146, 197)' }}>{item.dose}</Text>
                <Text style={{ color: 'rgb(183, 183, 183)' }}>{new Date(item.dataVacina).toLocaleDateString('pt-BR')}</Text>
                { item.comprovante ??
                    <Image source={{uri: item.comprovante}} style={{width: 150, height: 100}} />
                }
                {item.nextVaccineDate != undefined &&
                    <Text style={{ color: 'rgb(253, 162, 162)' }}>Próxima dose em: {new Date(item.dataProxVacina).toLocaleDateString('pt-BR')}</Text>
                }
                {item.nextVaccineDate === undefined &&
                    <Text style={{ color: 'rgb(253, 162, 162)' }}>Não há próxima dose</Text>
                }
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'center',
        width: (Dimensions.get('window').width / 2) - 10,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 7,
    },
});

export default VaccineCard;
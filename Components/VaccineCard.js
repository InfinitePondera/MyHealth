import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VaccineCard = (props) => {
    const navigation = useNavigation();
    const { item } = props.item;

    const goToEdit = (props) => {
        navigation.navigate('EditVaccine', { item });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{backgroundColor: 'rgb(255, 255, 255)', }} onPress={goToEdit}>
                <Text style={{ color: 'rgb(63, 146, 197)' }}>{item.vaccineTitle}</Text>
                <Text style={{ color: 'white', backgroundColor: 'rgb(63, 146, 197)' }}>{item.vaccineCount}</Text>
                <Text style={{ color: 'rgb(183, 183, 183)' }}>{item.vaccineDate}</Text>
                {item.nextVaccineDate != undefined &&
                    <Text style={{ color: 'rgb(253, 162, 162)' }}>Próxima dose em: {item.nextVaccineDate}</Text>
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
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";

const VaccineCard = (props) => {
    const { item } = props.item;
    const goToEdit = (props) => {
        props.navigation.navigate('EditVaccineCard', { item });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goToEdit}>
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
        alignItems: 'center',
        width: (Dimensions.get('window').width / 2) - 10,
        marginVertical: 5,
        marginHorizontal: 5,
    },
});

export default VaccineCard;
import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NextVaccineComponent = (props) => {
    const { item } = props.nextVaccineData;

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <Text style={{ color: 'rgb(63, 146, 197)', fontSize: 20, marginLeft: 10 }}>{item.vaccineName}</Text>
                <Text style={{ color: 'rgb(139, 139, 139)', fontSize: 20, marginLeft: 10 }}>{item.vaccineDate}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(255, 255, 255)',
        alignItems: 'flex-start',
        width: 360,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 7,
    },
});

export default NextVaccineComponent;
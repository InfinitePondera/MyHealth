import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, Dimensions } from 'react-native';
import { Button, Modal } from "react-native-paper";

const ConfirmModal = (props) => {

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <View style={styles.container}>
            <Modal visible={visible} onDismiss={hideModal}>
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{color: 'rgb(255, 131, 131)', fontSize: 15}}>Tem certeza que deseja remover essa vacina?</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                    <Button style={{backgroundColor:'rgb(255, 131, 131)'}} textColor='white'>Sim</Button>
                    <Button style={{backgroundColor:'rgb(63, 146, 197)'}} textColor='white'>Cancelar</Button>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgb(185, 223, 219)',
        alignItems: 'center',
        width: 360,
        padding: 10,
    },
});

export default ConfirmModal;
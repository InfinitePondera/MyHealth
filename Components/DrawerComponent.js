import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const DrawerComponent = (props) => {
    return (
        <DrawerContentScrollView style={styles.container}>
            <View style={styles.username}>
                <Text style={{fontSize: 24, color: 'rgb(65, 158, 215)'}}>Olá, {props.userName}</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    username: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    container: {
        backgroundColor: '#ADD5D0',
    }
});

export default DrawerComponent;
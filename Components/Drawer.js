import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

const Drawer = (props) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.username}>
                <Text style={{fontSize: 24}}>Olá, {props.userName}</Text>
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
    }
});

export default Drawer;
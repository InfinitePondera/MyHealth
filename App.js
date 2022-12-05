import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/Login';
import NewVaccine from './Pages/NewVaccine';
import RecoverPassword from './Pages/RecoverPassword';
import VaccineList from './Pages/VaccineList';
import DrawerComponent from './Components/DrawerComponent';
import NextVaccines from './Pages/NextVaccines';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Provider store={store}>
      <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props} />} screenOptions={{ headerShown: false, drawerLabelStyle: { color: 'rgb(65, 158, 215)' } }}>
        <Drawer.Screen name="Lista de Vacinas" component={VaccineList} />
        <Drawer.Screen name="Próximas Vacinas" component={NextVaccines} />
        <Drawer.Screen name="Sair" component={Login} />
      </Drawer.Navigator>
    </Provider>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name="Root" component={Root} />
          <Stack.Screen options={{ headerShown: false }} name="CreateAccount" component={CreateAccount} />
          <Stack.Screen options={{ headerShown: false }} name="RecoverPassword" component={RecoverPassword} />
          <Stack.Screen options={{ headerShown: false }} name="VaccineList" component={VaccineList} />
          <Stack.Screen options={{ headerShown: false }} name="NewVaccine" component={NewVaccine} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  )
}



export default App;

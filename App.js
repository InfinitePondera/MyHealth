import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import CreateAccount from './Pages/CreateAccount';
import EditVaccine from './Pages/EditVaccine';
import Login from './Pages/Login';
import NewVaccine from './Pages/NewVaccine';
import RecoverPassword from './Pages/RecoverPassword';
import VaccineList from './Pages/VaccineList';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="VaccineList" component={VaccineList} />
      <Drawer.Screen name="NewVaccine" component={NewVaccine} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Root" component={Root} />
        <Stack.Screen options={{ headerShown: false }} name="CreateAccount" component={CreateAccount} />
        <Stack.Screen options={{ headerShown: false }} name="RecoverPassword" component={RecoverPassword} />
        <Stack.Screen options={{ headerShown: false }} name="VaccineList" component={VaccineList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import CreateAccount from './Pages/CreateAccount';
import Login from './Pages/Login';
import NewVaccine from './Pages/NewVaccine';
import RecoverPassword from './Pages/RecoverPassword';
import VaccineList from './Pages/VaccineList';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="CreateAccount" component={CreateAccount} />
        <Stack.Screen options={{ headerShown: false }} name="RecoverPassword" component={RecoverPassword} />
        <Stack.Screen options={{ headerShown: false }} name="VaccineList" component={VaccineList} />
        <Stack.Screen options={{ headerShown: false }} name="NewVaccine" component={NewVaccine} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;

import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserContext } from '../context/UserContext';

import LoginScreen from '../screens/LoginScreen';
import RegistrarScreen from '../screens/RegistrarScreen';
import HomeScreen from '../screens/HomeScreen';
import InicioScreen from '../screens/InicioScreen';

import ContatosScreen from '../screens/ContatosScreen';
import DetalhesScreen from '../screens/DetalheScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  const [usuario] = useContext(UserContext);
  return (
    <>
      {usuario.logado ? (
      <NavigationContainer independent={true}>
        <Tab.Navigator initialRouteName="Login">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerStyle: { backgroundColor: 'red' },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontsize: 16,
                color: 'black',
              },
            }}
          />
          <Tab.Screen
            name="Contatos"
            component={ContatosScreen}
            options={{
              headerStyle: { backgroundColor: 'red' },
              headerTitleStyle: {
                fontWeight: 'bold',
                fontsize: 16,
                color: 'black',
              },
            }}
          />
         
        </Tab.Navigator>
       </NavigationContainer>
      ) : (
        
          <Stack.Navigator independent={true}>
            <Stack.Screen
              name="Inicio"
              component={InicioScreen}
              options={{
                headerStyle: { backgroundColor: 'red' },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontsize: 16,
                  color: 'black',
                },
              }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerStyle: { backgroundColor: 'red' },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontsize: 16,
                  color: 'black',
                },
              }}
            />
            <Stack.Screen
              name="Registrar"
              component={RegistrarScreen}
              options={{
                headerStyle: { backgroundColor: 'red' },
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontsize: 16,
                  color: 'black',
                },
              }}
            />
         
          </Stack.Navigator>
        
      )}
   
    </>
  );
}

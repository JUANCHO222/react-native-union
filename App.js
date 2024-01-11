import 'react-native-gesture-handler';
import React from 'react';
import { Button, View, Image, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign,MaterialIcons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';
import Analisis from './MyScreens/Analisis';
import PhotoCam from './MyScreens/PhotoCam';
import PhotoCamSec from './MyScreens/PhotoCamSec';
import buscarPaciente from './MyScreens/buscarPaciente';
import perfilPaciente from './MyScreens/perfilPaciente';
import RegistrarPacientes from './MyScreens/RegistrarPacientes';
import PaginaInicial from './MyScreens/PaginaInicial';

import LoginScreen from './MyScreens/LoginScreen';
const HomeIcon=()=><AntDesign name="home" size={24}></AntDesign>
const changeUIcon=()=><AntDesign name="addusergroup" size={24}></AntDesign>
const SupportIcon=()=><MaterialIcons name="support-agent" size={24}></MaterialIcons>
const LogoutIcon=()=><MaterialIcons name="logout" size={24}></MaterialIcons>

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        screenOptions={{
          // ... otras opciones
          headerStyle: {
            backgroundColor: "#4D82BC",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerActiveTintColor: "#4D82BC",
          drawerLabelStyle: {
            color: "black",
          },
        }}
      >
        {/* Pantallas */}
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={({ route }) => ({
            drawerLabel: () => null,
            drawerItemStyle: { display: 'none' },
            headerShown: false, // Oculta la barra de navegación
          })}
        />
        <Drawer.Screen name="Inicio" component={PaginaInicial}  options={{drawerIcon:HomeIcon}}/>
        <Drawer.Screen name="Registrar Pacientes" component={RegistrarPacientes} options={({ route }) => ({drawerLabel: () => null,drawerItemStyle: { display: 'none' },})}/>
        <Drawer.Screen name="Analisis" component={Analisis} options={({ route }) => ({drawerLabel: () => null,drawerItemStyle: { display: 'none' },})} />
        <Drawer.Screen name="Camara" component={PhotoCam} options={({ route }) => ({drawerLabel: () => null,drawerItemStyle: { display: 'none' },})} />
        <Drawer.Screen name="CamaraS" component={PhotoCamSec} options={({ route }) => ({drawerLabel: () => null,drawerItemStyle: { display: 'none' },})} />
        <Drawer.Screen name="buscarPacienteS" component={buscarPaciente} options={({ route }) => ({drawerLabel: () => null,drawerItemStyle: { display: 'none' },})} />
        <Drawer.Screen name="perfilPacienteS" component={perfilPaciente} options={({ route }) => ({drawerLabel: () => null,drawerItemStyle: { display: 'none' },})} />
              
      </Drawer.Navigator>
    </NavigationContainer>

  )
}

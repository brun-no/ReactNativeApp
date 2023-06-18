import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from "axios"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from './views/Lista';
import Calculadora from './views/Calculadora';
import CalcularImc from './views/CalcularImc';
import CparaF from './views/CparaF';
import BrlForUsd from './views/BrlForUsd';
import CalcularIdade from './views/CalcularIdade';
import ParOuImpar from './views/ParOuImpar';
import AppBurguer from './views/AppBurguer';
import Tarefas from './views/Tarefas';
import Tabuada from './views/Tabuada';
import Cronometro from './views/Cronometro';
import TextoParaFala from './views/TextoParaFala';
import CalculadoraCompleta from './views/CalculadoraCompleta';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Atividades" component={Lista} options={{ title: 'Atividades React Native' }} />
 
        <Stack.Screen name="Calculadora" component={Calculadora} options={{ title: 'Calculadora Básica' }} />
        <Stack.Screen name="CalcularImc" component={CalcularImc} options={{ title: 'Calcular seu Imc' }} />
        <Stack.Screen name="CparaF" component={CparaF} options={{ title: 'Cessius para Fahrenheit' }} />     
        <Stack.Screen name="BrlForUsd" component={BrlForUsd} options={{ title: 'Converter Real para Dollar' }} />
        <Stack.Screen name="CalcularIdade" component={CalcularIdade} options={{ title: 'Revelar sua Idade' }} />
        <Stack.Screen name="ParOuImpar" component={ParOuImpar} options={{ title: 'Par ou Ímpar?' }} />
        <Stack.Screen name="Tarefas" component={Tarefas} options={{ title: 'App Tarefas' }} />
        <Stack.Screen name="Tabuada" component={Tabuada} options={{ title: 'Tabuada' }} />
        <Stack.Screen name="Cronometro" component={Cronometro} options={{ title: 'Cronômetro' }} />
        <Stack.Screen name="TextoParaFala" component={TextoParaFala} options={{ title: 'Texto para fala' }} />
        <Stack.Screen name="CalculadoraCompleta" component={CalculadoraCompleta} options={{ title: 'Calculadora Completa' }} />
        <Stack.Screen name="AppBurguer" component={AppBurguer} options={{ title: 'Desafio App Burguer' }} />

      </Stack.Navigator>




      
    </NavigationContainer>
  );
};

export default App;
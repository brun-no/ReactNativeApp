import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import RelogioComponent from '../components/Relogio'; //exibir mensagem e o relogio

function Lista({ navigation }) {
  const [showRelogio, setShowRelogio] = useState(false);

  const toggleRelogio = () => {
    setShowRelogio(!showRelogio);
  };

  const Separator = () => <View style={styles.separator} />;

  return (
      <>

            <View style={styles.titulo}>
            
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Lista de Apps:</Text>
</View>

<ImageBackground source={require('../assets/Blackground.png')} style={styles.background}>
     
    </ImageBackground>

        <View style={styles.container}>
       
            <Button   title=" Calculadora Básica " 
            onPress={()=> navigation.navigate("Calculadora")}/>
 <Separator />
            <Button   title="        Calcular IMC       " 
            onPress={()=> navigation.navigate("CalcularImc")}/>
<Separator />
            <Button  title="Celsius p/ Fahrenheit" 
            onPress={()=> navigation.navigate("CparaF")}/>
<Separator />

            <Button   title=" Convert R$ p/ dólar" 
            onPress={()=> navigation.navigate("BrlForUsd")}/>
<Separator />
<Button   title="       Cronômetro       " 
            onPress={()=> navigation.navigate("Cronometro")}/>
<Separator />
 <Button  title="  Revelar sua Idade   " 
            onPress={()=> navigation.navigate("CalcularIdade")}/>
<Separator />
 <Button  title="      Par ou Impar?       " 
            onPress={()=> navigation.navigate("ParOuImpar")}/>
<Separator />
 <Button  title="            Tarefas            " 
            onPress={()=> navigation.navigate("Tarefas")}/>
<Separator />
<Button  title="           Tabuada           " 
            onPress={()=> navigation.navigate("Tabuada")}/>
<Separator />
<Button  title="     Texto para Fala    " 
            onPress={()=> navigation.navigate("TextoParaFala")}/>
            <Separator />
<Button  title="Calculadora Completa" 
            onPress={()=> navigation.navigate("CalculadoraCompleta")}/>
<Separator />
 <Button  title="       App Burguer        " 
            onPress={()=> navigation.navigate("AppBurguer")}/>
<Separator />

            <StatusBar style="auto" />
        </View>

        //exibir ocultar mensagem e relogio
        <View>
        {/* Botão para exibir/ocultar o RelogioComponent */}
        <Button
          title={showRelogio ? 'Ocultar Desenvolvedor' : 'Exibir Desenvolvedor'}
          onPress={toggleRelogio}
        />

        {/* Renderização condicional do RelogioComponent */}
        {showRelogio && <RelogioComponent />}
      </View> 
        </>
    );
}

const styles = StyleSheet.create({
    container: {
       
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',

    },
    titulo:
    {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'blue',
        marginTop: 5,
        
    },
    
    separator: {
    marginVertical: 2,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
    
  },


    background: {
    marginTop: 5,
    resizeMode: 'cover', // or 'stretch'
  },

});

export default Lista;

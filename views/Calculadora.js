
import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, TextInput, TouchOpacity, ScrollView, TouchableOpacity  } from 'react-native';



export default function Calculadora() {

// Variaveis para armazenar os resultados
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');

//funçao para somar
function somar(){
const total = parseFloat(n1) + parseFloat(n2);
//alerta emitido com o resultado
alert('O resultado é ' + total);
}
//funçao para subtrair
function subtrair(){
const total = parseFloat(n1) - parseFloat(n2);
//alerta emitido com o resultado
alert('O resultado é ' + total);
}
//funçao para multiplicar
function multiplicar(){
const total = parseFloat(n1) * parseFloat(n2);
//alerta emitido com o resultado
alert('O resultado é ' + total);
}
//funçao para dividir
function dividir(){
const total = parseFloat(n1) / parseFloat(n2);
//alerta emitido com o resultado
alert('O resultado é ' + total);
}

//exibir na tela
  return (
    //titulo do aplicativo

     <>
            <View style={styles.titulo}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Calculadora Básica</Text>
</View>

    <View style={styles.container}>


      <TextInput style={styles.entradadetexto1} placeholder="Digite um Valor" value={n1} onChangeText={(n1)=>setN1(n1)}/>

      <TextInput style={styles.entradadetexto2} placeholder="Digite um Valor" value={n2} onChangeText={(n2)=>setN2(n2)}/>
       




 <View style={styles.buttonStackRow}>
        <View style={styles.buttonStack}>
         
          <TouchableOpacity style={styles.button} onPress={somar}>
          <Text style={styles.loremIpsum}>+</Text></TouchableOpacity>

        </View>
        <View style={styles.button2Stack}>
          <TouchableOpacity style={styles.button2} onPress={subtrair}>
          <Text style={styles.loremIpsum2}>-</Text></TouchableOpacity>
        </View>
        <View style={styles.button4Stack}>
          <TouchableOpacity style={styles.button4} onPress={multiplicar}>
          <Text style={styles.loremIpsum1}>*</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button3} onPress={dividir}>
          <Text style={styles.loremIpsum3}>/</Text></TouchableOpacity>
      </View>
     
    </View>
     </>
  );
}

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

    titulo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'blue',
        marginTop: 5,
 },

  entradadetexto1: {
   
        marginTop: 20,
        width: 256,
        height: 43,
        borderWidth: 2,
        borderColor: "#000000",
        marginLeft: 30,
        borderRadius: 7
    },

    entradadetexto2: {
          
        marginTop: 5,
        width: 256,
        height: 43,
        borderWidth: 2,
        borderColor: "#000000",
        marginLeft: 30,
        borderRadius: 7
    },

  button: {
    top: 0,
    left: 0,
    width: 76,
    height: 65,
    position: "absolute",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },

  buttonStack: {
    width: 76,
    height: 68
  },
  button2: {
    top: 0,
    left: 0,
    width: 76,
    height: 65,
    position: "absolute",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0
  },
  loremIpsum2: {
    top: 0,
    left: 30,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 57
  },
  button2Stack: {
    width: 76,
    height: 68
  },
  button4: {
    top: 0,
    left: 0,
    width: 76,
    height: 65,
    position: "absolute",
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  loremIpsum1: {
    top: 6,
    left: 25,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 61,
  },
  button4Stack: {
    width: 76,
    height: 79,
    marginLeft: 1,
  },
  button3: {
    width: 76,
    height: 65,
    backgroundColor: "blue",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 49,
    marginLeft: 28
  },
  buttonStackRow: {
    height: 79,
    flexDirection: "row",
    flex: 1,
    marginRight: 35,
    marginLeft: 3,
    marginTop: 20,
  },
    loremIpsum: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 49,
    marginLeft: 28,
  },

   

});
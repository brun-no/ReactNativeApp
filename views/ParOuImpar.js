import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, TextInput, TouchOpacity, ScrollView, TouchableOpacity  } from 'react-native';

export default function ParOuImpar() {
// Variaveis para armazenar os resultados
  const [text, setText] = useState("");
  let [x, setx] = useState('');
  
//funçao 
function tipo(){
    let num = parseInt(text);
     let texto = "ÍMPAR";
     if(num%2==0){
      texto = "PAR";

      let x = texto;
      setx(x.toString());
}

//alerta emitido com o resultado
alert('A verificação descobriu que o numero é: ' + texto);
}

//exibir na tela
return (
    //titulo do aplicativo

     <>
            <View style={styles.titulo}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Par ou Ímpar?</Text>
</View>

    <View style={styles.container}>


<TextInput style={styles.entradadetexto1}
       placeholder="Digite um Número" 
       onChangeText={text => setText(text)} defaultValue = {text}/>


 <View style={styles.buttonStackRow}>
        <View style={styles.buttonStack}>
         
   <TouchableOpacity style={styles.botao}  onPress={tipo}>
        <Text style={styles.textobotao}>Descobrir</Text>
      </TouchableOpacity>

       <View style={styles.exibirResultado}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>O número é: {x}</Text>
</View>

        </View>
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

            botao: {
      
                backgroundColor: "blue",
                marginTop: 15,
                borderWidth: 0,
                borderColor: "rgba(0,0,0,1)",
                borderRadius: 15,
                flexDirection: "row",
                shadowColor: "rgba(0,0,0,1)",
                marginLeft: 32,
                shadowOffset: {
                  width: 3,
                  height: 3
                },
                elevation: 5,
                shadowOpacity: 1,
                shadowRadius: 0,
                overflow: "visible",
                width: 250,
                height: 40
                
        },

    textobotao: {
  
                fontFamily: "courier-regular",
                color: "white",
                fontSize: 35,
                textAlign: "center",
                width: 256,
                height: 65

    },

    exibirResultado: {


        fontFamily: "courier-regular",
        textAlign: "center",
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'rgba(155,155,155,1)',
        marginTop: 5,
        
    },

});
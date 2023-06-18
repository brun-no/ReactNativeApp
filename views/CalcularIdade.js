import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, TextInput, TouchOpacity, ScrollView, TouchableOpacity  } from 'react-native';

export default function CalcIdade() {
// Variaveis para armazenar os resultados
  const [n1, setN1] = useState('');
  const [x, setx] = useState('');
  

//funçao para revelar a idade
function revelarIdade(){
const v1 = parseFloat(n1);
const total = v1 - new Date().getFullYear();
const x = Math.abs(total);
setx(x.toString());

//alerta emitido com o resultado
alert('Sua idade esse ano é: ' + x);
}
//exibir na tela
return (
    //titulo do aplicativo

     <>
            <View style={styles.titulo}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Sua idade esse ano é: {x}</Text>
</View>

    <View style={styles.container}>


       <TextInput style={styles.entradadetexto1} placeholder="Digite ano de nascimento" value={n1} onChangeText={(n1)=>setN1(n1)}/>



 <View style={styles.buttonStackRow}>
        <View style={styles.buttonStack}>
         
         <TouchableOpacity style={styles.botao}  onPress={revelarIdade}>
        <Text style={styles.textobotao}>Revelar Idade</Text>
      </TouchableOpacity>

       <View style={styles.exibirResultado}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Resultado: {x}</Text>
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
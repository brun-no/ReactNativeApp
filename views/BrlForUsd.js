import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, TextInput, TouchOpacity, ScrollView, TouchableOpacity  } from 'react-native';


export default function BrlForUsd() {
// Variaveis para armazenar os resultados
  var [totalReal, setTotalReal] = useState('');
  var [totalDollar, setTotalDollar] = useState('');
  var [cotacao, setContacao] = useState('');
  const [x, setx] = useState('');

//funçao para converter Real em Dollar
function converterParaDollar(){
//Total Dollar = QtdReal / Cotação do dia do dollar
totalDollar = parseFloat(totalReal) / parseFloat(cotacao);
const x = totalDollar.toFixed(2);
setx(x.toString());

//alerta emitido com o resultado
alert("O total em Dollar será: " + totalDollar.toFixed(2));
}

//exibir na tela
return (
    //titulo do aplicativo

     <>
            <View style={styles.titulo}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Conversor de Real para Dollar</Text>
</View>

    <View style={styles.container}>

                    <TextInput style={styles.entradadetexto1} placeholder="Total em Reais" keyboardType="numeric" 
      onChangeText={(totalReal) => setTotalReal(totalReal)}/>

<TextInput style={styles.entradadetexto2} placeholder="Cotação do dia" keyboardType="numeric" 
      onChangeText={(cotacao)=>setContacao(cotacao)}/>


 <View style={styles.buttonStackRow}>
        <View style={styles.buttonStack}>
         

   <TouchableOpacity style={styles.botao}  onPress={converterParaDollar}>
        <Text style={styles.textobotao}>Converter</Text>
      </TouchableOpacity>

        </View>
       <View style={styles.exibirResultado}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Resultado: {x}</Text>
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

        entradadetexto2: {
          
        marginTop: 5,
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
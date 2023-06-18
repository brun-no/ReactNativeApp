//importar o React
import * as React from 'react';
//importar o useState para utilização nas funções 
import react, {useState} from "react";
//importar componentes visuais
import {View, Image, TouchableOpacity, Text, StyleSheet, StatusBar, TextInput} from "react-native";

//criar tela
export default function CalcularImc(){

//Declarando as variaveis useState
let [peso, setPeso] = useState (0);
let [altura, setAltura] = useState (0);    
let [mensagem, setMensagem] = useState(<span style={styles.msgDica}>Insira sua Altura e Peso e clique em calcular para conferir o Resultado</span>);
    
function calcularImc(){

        let pesoInt = parseInt(peso);  
        let alturaInt = parseInt(altura);
        let imc = (peso / ((altura / 100) * (altura / 100)));

        if(imc < 18.5){
    setMensagem (
    <>
      <Image style={styles.img}
        source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFxx132XH6CjM7rvol86H8VTPFAZIFQN-EzvM7lxLvpLB70BxODLiN-qUepNtA-ntd8_ypK-nMlsZapzmdorbdBHEXRdnWy30Y0USAyaPJ6GimDRTFvjhgNljIrx9Cs1Gtm0_F3b9mL4KQ5b52oY-ZVj1IfJ568fKbWFrdUYF3jwErumugsHKzhq0n/s1600/2A.png' }}
      /> 
      <Text style={styles.resultadoImc}>IMC: {imc.toFixed(2)}  MENOR QUE 18,5 CLASSIFICAÇÃO: ABAIXO DO PESO </Text>
         <View style={styles.tarja}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>RISCO DE DOENÇA: NORMAL OU ELEVADO </Text>
</View>
    </>
  ); 
        } 
        else if(imc <= 24.9){
    setMensagem (
    <>
      <Image style={styles.img}
        source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVg7b-nwdT_x5fDTkJDJ7odiarguyCTOWYzEtrFRvkG7JwSUduzXABH2LAZT6bPl70KRi8TuHpc1JNsIXtPrK8oTlZ9ieGV1uvSr0XIt0mvUvnyNI5h5I9cJMAfdRS-i3khqPtDRVlCfH5NZkNmuxQrDRCk_aKme8vMEEAD8XPiKpYI9KwaRdDGQTc/s1600/3A.png' }}
      /> 
      <Text style={styles.resultadoImc}>IMC: {imc.toFixed(2)}  ENTRE 18,5 E 24,9	CLASSIFICAÇÃO: PESO NORMAL</Text>
         <View style={styles.tarja}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>RISCO DE DOENÇA: POUCO ELEVADO </Text>
</View>
    </>
  ); 
            }
        else if(imc <= 29.9){
    setMensagem (
    <>
      <Image style={styles.img}
        source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLPmFraWRAq-COUS-wl82CJCoUvb8ndbtuSmJK_ApT0P8_cZwrE6Vdegh05YKrtpqNyB5kxBQdsnRpIOxomNc5vNghXHLtggulF_y2p9EV9SufFu1OZ2AYtA2erFDA0dfCw2pzkgFKUIVsrN8Pi2iI9HWteGp1nIai4rXPPmzB8Ue3y6kPvEl3LU2v/s1600/4A.png' }}
      /> 
      <Text style={styles.resultadoImc}>IMC: {imc.toFixed(2)}  ENTRE 25,0 E 29,9	CLASSIFICAÇÃO: SOBREPESO </Text>
         <View style={styles.tarja}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>RISCO DE DOENÇA: NORMAL</Text>
</View>
    </>
  );            
        } 
        else if(imc <= 34.9){
    setMensagem (
    <>
      <Image style={styles.img}
        source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEFpsy6yRcpx8B28l-Of_cdTiZu8A03W9tXdEmLhQUoDACvQKXztCfUrOpMOWVctQMES5X6PPySaHsX-L2yKBqxQW9QM4AALsO32NaGG13FTtZ9-M-TTYuympFvmkj_G6j4-Fh6Gn3KmZZ3xbROSKtu5Nr5rtLNcCCGy_e1KtF6H4C1WUIUj_4hcQo/s1600/5A.png' }}
      /> 
      <Text style={styles.resultadoImc}>IMC: {imc.toFixed(2)}  ENTRE 30,0 E 34,9	CLASSIFICAÇÃO: OBESIDADE GRAU I </Text>
         <View style={styles.tarja}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>RISCO DE DOENÇA: ELEVADO </Text>
</View>
    </>
  ); 
           
        }
        else if(imc <= 39.9){
    setMensagem (
    <>
      <Image style={styles.img}
        source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRRDyuSXqvM4O-UQjaSHYSHHfih3JkFuUbf5QYY1VREv5PwrjTAwV--ud1Pjpson4_mjFLLwQIJZ06OzWJZCty3RV6kqs0Qf1Qqz3iGqUIwLzUlMSRGBKNZ539SbAWbMUJUFaAz-YEM0Go106PhtxdCy2ZHNeFHECjs5aNrOSpwUXekZw0DCVjIT6d/s1600/6A.png' }}
      /> 
      <Text style={styles.resultadoImc}>IMC: {imc.toFixed(2)}  ENTRE 34,9 E 39,9	CLASSIFICAÇÃO: OBESIDADE GRAU II </Text>
         <View style={styles.tarja}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>RISCO DE DOENÇA: MUITO ELEVADO </Text>
</View>
    </>
  ); 

           
        } else {
    setMensagem (
    <>
      <Image style={styles.img}
        source={{ uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIJ-WFRGfghwnSuwJ2qnZEd03N1ftaeb2T9EknnMLwFD23eJRMJ4BfoX9aemeUTEe3JPXlEr6N6g4UtQPY3UFck4k8L9fAvR2cblqctXv8IPwhnvwRzlkWjq7MBI5gSBPwqwfyqUdTPVdds7qGzafevIPSBC8KcoxovgBHBCZJ08rxMUbrb_9F-Aue/s1600/7A.png' }}
      /> 
      <Text style={styles.resultadoImc}>IMC: {imc.toFixed(2)}  MAIOR QUE 40,0	CLASSIFICAÇÃO: OBESIDADE GRAU III </Text>
         <View style={styles.tarja}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#fff'}}>RISCO DE DOENÇA: MUITÍSSIMO ELEVADO </Text>
</View>
    </>
  );        
        
} //fim funcao calcular
} //fim home

return(
      <>
            <View style={styles.titulo}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Calcular IMC</Text>
</View>

          <View style={styles.container}>‎ 

         ‎ 
          <TextInput style={styles.entradadetexto1} 
          onChangeText={(valor)=>setAltura(Number(valor))}
             placeholder="Digite sua Altura cm" keyboardType="numeric"/>
          <TextInput style={styles.entradadetexto2} 
          onChangeText={(valor)=>setPeso(Number(valor))}
             placeholder="Digite seu Peso em kg" keyboardType="numeric"/>
          <TouchableOpacity style={styles.botao} onPress={calcularImc}>
          <Text style={styles.textobotao}> Calcular </Text>
          </TouchableOpacity>
          <Text style={styles.exibirResultado}>{mensagem}</Text>
          

        </View> 
        </>
   ) //fim do return
} //fim do home


const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
        
        
    },

    titulo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'blue',
        marginTop: 5,
 },
 
        tarja: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'red',
        marginTop: 5,      
    },

        resultadoImc: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginTop: 20,      
    },

        img: {  
        position: 'absolute',
        left: 100,
        width: 120,
        height: 120,
        top: 0,
        alignContent: 'center',
        marginTop: 5,
        },

    entradadetexto1: {
   
        marginTop: 120,
        width: 256,
        height: 43,
        borderWidth: 2,
        borderColor: "#000000",
        borderRadius: 7
    },

    entradadetexto2: {
          
        marginTop: 5,
        width: 256,
        height: 43,
        borderWidth: 2,
        borderColor: "#000000",
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

          marginTop: 30,
          fontFamily: "courier-regular",
          textAlign: "left",
          fontSize: 15,
          color: 'black',
        
    },

        msgDica: {
        position: 'absolute',
        left: 0,
    fontFamily: "roboto-regular",
    color: "black",
    fontSize: 15,
    textAlign: "center",
    borderRadius: 100,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0
        
    }


}); 
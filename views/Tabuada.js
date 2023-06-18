import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function CalcIdade() {
// Variaveis para armazenar os resultados
  const [text, setText] = useState("");

//exibir na tela
return (
  
    <ScrollView style={styles.container}>
      <View style={styles.titulo}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Tabuada </Text>
</View>
    
      <Card>
        <TextInput style={styles.entradadetexto1}
          placeholder="Informe um número"
          onChangeText={text => setText(text)}
          defaultValue={text}
        />
      </Card>
      <View style={styles.exibirResultado}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>Resultado: </Text>
</View>

      <Card>
        <Text style={styles.resultado}>{text} X 0 = {text * 0}</Text>
        <Text style={styles.resultado}>{text} X 1 = {text * 1}</Text>
        <Text style={styles.resultado}>{text} X 2 = {text * 2}</Text>
        <Text style={styles.resultado}>{text} X 3 = {text * 3}</Text>
        <Text style={styles.resultado}>{text} X 4 = {text * 4}</Text>
        <Text style={styles.resultado}>{text} X 5 = {text * 5}</Text>
        <Text style={styles.resultado}>{text} X 6 = {text * 6}</Text>
        <Text style={styles.resultado}>{text} X 7 = {text * 7}</Text>
        <Text style={styles.resultado}>{text} X 8 = {text * 8}</Text>
        <Text style={styles.resultado}>{text} X 9 = {text * 9}</Text>
        <Text style={styles.resultado}>{text} X 10 = {text * 10}</Text>
      </Card>
      
    </ScrollView>
    
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

    resultado: {
    margin: 2,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});